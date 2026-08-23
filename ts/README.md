# N4chan TypeScript SDK



The TypeScript SDK for the N4chan API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Archive()` — each with a small set of operations (`list`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/n4chan-sdk/releases](https://github.com/voxgig-sdk/n4chan-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { N4chanSDK } from '@voxgig-sdk/n4chan'

const client = new N4chanSDK()
```

### 2. List archive records

`list()` resolves to an array of Archive ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const archives = await client.Archive().list({ board: "example" })

for (const archive of archives) {
  console.log(archive)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const catalogs = await client.Catalog().list()
  console.log(catalogs)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = N4chanSDK.test()

const catalog = await client.Catalog().list()
// catalog is the entity, populated with mock response data
// — call catalog.data() for the record itself
console.log(catalog)
```

You can also use the instance method:

```ts
const client = new N4chanSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Catalog()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new N4chanSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
N4CHAN_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### N4chanSDK

#### Constructor

```ts
new N4chanSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Archive(data?)` | `ArchiveEntity` | Create an Archive entity instance. |
| `Board(data?)` | `BoardEntity` | Create a Board entity instance. |
| `Catalog(data?)` | `CatalogEntity` | Create a Catalog entity instance. |
| `Index(data?)` | `IndexEntity` | Create an Index entity instance. |
| `Thread(data?)` | `ThreadEntity` | Create a Thread entity instance. |
| `tester(testopts?, sdkopts?)` | `N4chanSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `N4chanSDK.test(testopts?, sdkopts?)` | `N4chanSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): N4chanSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Archive

| Field | Description |
| --- | --- |

Operations: list.

API path: `/{board}/archive.json`

#### Board

| Field | Description |
| --- | --- |
| `board` | Board identifier |
| `board_flags` | Board flags configuration |
| `bump_limit` | Bump limit for threads |
| `cooldowns` | Cooldown periods for posting |
| `custom_spoilers` | Number of custom spoiler images |
| `image_limit` | Image limit for threads |
| `is_archived` | Archive enabled flag |
| `max_comment_chars` | Maximum comment length |
| `max_filesize` | Maximum filesize in bytes |
| `max_webm_duration` | Maximum WebM duration in seconds |
| `max_webm_filesize` | Maximum WebM filesize in bytes |
| `meta_description` | Board meta description |
| `pages` | Number of pages |
| `per_page` | Threads per page |
| `spoilers` | Custom spoilers enabled flag |
| `title` | Board title |
| `ws_board` | Worksafe board flag (1 for worksafe, 0 for NSFW) |

Operations: list.

API path: `/boards.json`

#### Catalog

| Field | Description |
| --- | --- |
| `page` | Page number |
| `threads` |  |

Operations: list.

API path: `/{board}/catalog.json`

#### Index

| Field | Description |
| --- | --- |
| `posts` |  |

Operations: list.

API path: `/{board}/{page}.json`

#### Thread

| Field | Description |
| --- | --- |
| `archived` | Archived flag |
| `archived_on` | Unix timestamp when archived |
| `bumplimit` | Bump limit reached flag |
| `capcode` | Capcode (mod, admin, etc.) |
| `closed` | Closed flag |
| `com` | Comment (HTML escaped) |
| `country` | Country code |
| `country_name` | Country name |
| `custom_spoiler` | Custom spoiler ID |
| `ext` | File extension |
| `filedeleted` | File deleted flag |
| `filename` | Original filename |
| `fsize` | File size in bytes |
| `h` | Image height |
| `id` | Poster ID |
| `imagelimit` | Image limit reached flag |
| `images` | Number of images |
| `last_modified` | Unix timestamp of last modification |
| `m_img` | Mobile optimized image flag |
| `md5` | MD5 hash in base64 |
| `name` | Poster name |
| `no` | Post number |
| `now` | Formatted date and time |
| `omitted_images` | Number of omitted images |
| `omitted_posts` | Number of omitted posts |
| `page` | Page number |
| `replies` | Number of replies |
| `resto` | Reply to thread ID (0 for OP) |
| `semantic_url` | SEO-friendly URL slug |
| `since4pass` | Year 4chan pass purchased |
| `spoiler` | Spoiler flag |
| `sticky` | Sticky flag |
| `sub` | Subject |
| `tag` | Tag |
| `threads` |  |
| `tim` | Unix timestamp for image |
| `time` | Unix timestamp |
| `tn_h` | Thumbnail height |
| `tn_w` | Thumbnail width |
| `trip` | Tripcode |
| `unique_ips` | Number of unique poster IPs |
| `w` | Image width |

Operations: list.

API path: `/{board}/thread/{threadId}.json`



## Entities


### Archive

Create an instance: `const archive = client.Archive()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const archives = await client.Archive().list({ board: "example" })
```


### Board

Create an instance: `const board = client.Board()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `string` | Board identifier |
| `board_flags` | `Record<string, any>` | Board flags configuration |
| `bump_limit` | `number` | Bump limit for threads |
| `cooldowns` | `Record<string, any>` | Cooldown periods for posting |
| `custom_spoilers` | `number` | Number of custom spoiler images |
| `image_limit` | `number` | Image limit for threads |
| `is_archived` | `number` | Archive enabled flag |
| `max_comment_chars` | `number` | Maximum comment length |
| `max_filesize` | `number` | Maximum filesize in bytes |
| `max_webm_duration` | `number` | Maximum WebM duration in seconds |
| `max_webm_filesize` | `number` | Maximum WebM filesize in bytes |
| `meta_description` | `string` | Board meta description |
| `pages` | `number` | Number of pages |
| `per_page` | `number` | Threads per page |
| `spoilers` | `number` | Custom spoilers enabled flag |
| `title` | `string` | Board title |
| `ws_board` | `number` | Worksafe board flag (1 for worksafe, 0 for NSFW) |

#### Example: List

```ts
const boards = await client.Board().list()
```


### Catalog

Create an instance: `const catalog = client.Catalog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `page` | `number` | Page number |
| `threads` | `any[]` |  |

#### Example: List

```ts
const catalogs = await client.Catalog().list({ board: "example" })
```


### Index

Create an instance: `const index = client.Index()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `any[]` |  |

#### Example: List

```ts
const indexs = await client.Index().list({ board: "example", page: 1 })
```


### Thread

Create an instance: `const thread = client.Thread()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `number` | Archived flag |
| `archived_on` | `number` | Unix timestamp when archived |
| `bumplimit` | `number` | Bump limit reached flag |
| `capcode` | `string` | Capcode (mod, admin, etc.) |
| `closed` | `number` | Closed flag |
| `com` | `string` | Comment (HTML escaped) |
| `country` | `string` | Country code |
| `country_name` | `string` | Country name |
| `custom_spoiler` | `number` | Custom spoiler ID |
| `ext` | `string` | File extension |
| `filedeleted` | `number` | File deleted flag |
| `filename` | `string` | Original filename |
| `fsize` | `number` | File size in bytes |
| `h` | `number` | Image height |
| `id` | `string` | Poster ID |
| `imagelimit` | `number` | Image limit reached flag |
| `images` | `number` | Number of images |
| `last_modified` | `number` | Unix timestamp of last modification |
| `m_img` | `number` | Mobile optimized image flag |
| `md5` | `string` | MD5 hash in base64 |
| `name` | `string` | Poster name |
| `no` | `number` | Post number |
| `now` | `string` | Formatted date and time |
| `omitted_images` | `number` | Number of omitted images |
| `omitted_posts` | `number` | Number of omitted posts |
| `page` | `number` | Page number |
| `replies` | `number` | Number of replies |
| `resto` | `number` | Reply to thread ID (0 for OP) |
| `semantic_url` | `string` | SEO-friendly URL slug |
| `since4pass` | `number` | Year 4chan pass purchased |
| `spoiler` | `number` | Spoiler flag |
| `sticky` | `number` | Sticky flag |
| `sub` | `string` | Subject |
| `tag` | `string` | Tag |
| `threads` | `any[]` |  |
| `tim` | `number` | Unix timestamp for image |
| `time` | `number` | Unix timestamp |
| `tn_h` | `number` | Thumbnail height |
| `tn_w` | `number` | Thumbnail width |
| `trip` | `string` | Tripcode |
| `unique_ips` | `number` | Number of unique poster IPs |
| `w` | `number` | Image width |

#### Example: List

```ts
const threads = await client.Thread().list({ board: "example" })
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
n4chan/
├── src/
│   ├── N4chanSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { N4chanSDK } from '@voxgig-sdk/n4chan'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const catalog = client.Catalog()
await catalog.list()

// catalog.data() now returns the catalog data from the last `list`
// catalog.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
