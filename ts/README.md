# N4chan TypeScript SDK



The TypeScript SDK for the N4chan API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
npm install @voxgig-sdk/n4chan
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { N4chanSDK } from 'n4chan'

const client = new N4chanSDK({
  apikey: process.env.N4CHAN_APIKEY,
})
```

### 2. List archives

```ts
const result = await client.Archive().list()

if (result.ok) {
  for (const item of result.data) {
    console.log(item.id, item.name)
  }
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

const result = await client.Planet().load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new N4chanSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Planet()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
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
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
N4CHAN_TEST_LIVE=TRUE
N4CHAN_APIKEY=<your-key>
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
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
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
| `Archive(data?)` | `ArchiveEntity` | Create a Archive entity instance. |
| `Board(data?)` | `BoardEntity` | Create a Board entity instance. |
| `Catalog(data?)` | `CatalogEntity` | Create a Catalog entity instance. |
| `Index(data?)` | `IndexEntity` | Create a Index entity instance. |
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
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): N4chanSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

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
| `board` |  |
| `board_flag` |  |
| `bump_limit` |  |
| `cooldown` |  |
| `custom_spoiler` |  |
| `image_limit` |  |
| `is_archived` |  |
| `max_comment_char` |  |
| `max_filesize` |  |
| `max_webm_duration` |  |
| `max_webm_filesize` |  |
| `meta_description` |  |
| `page` |  |
| `per_page` |  |
| `spoiler` |  |
| `title` |  |
| `ws_board` |  |

Operations: list.

API path: `/boards.json`

#### Catalog

| Field | Description |
| --- | --- |
| `page` |  |
| `thread` |  |

Operations: list.

API path: `/{board}/catalog.json`

#### Index

| Field | Description |
| --- | --- |
| `post` |  |

Operations: list.

API path: `/{board}/{page}.json`

#### Thread

| Field | Description |
| --- | --- |
| `archived` |  |
| `archived_on` |  |
| `bumplimit` |  |
| `capcode` |  |
| `closed` |  |
| `com` |  |
| `country` |  |
| `country_name` |  |
| `custom_spoiler` |  |
| `ext` |  |
| `filedeleted` |  |
| `filename` |  |
| `fsize` |  |
| `h` |  |
| `id` |  |
| `image` |  |
| `imagelimit` |  |
| `last_modified` |  |
| `m_img` |  |
| `md5` |  |
| `name` |  |
| `no` |  |
| `now` |  |
| `omitted_image` |  |
| `omitted_post` |  |
| `page` |  |
| `reply` |  |
| `resto` |  |
| `semantic_url` |  |
| `since4pass` |  |
| `spoiler` |  |
| `sticky` |  |
| `sub` |  |
| `tag` |  |
| `thread` |  |
| `tim` |  |
| `time` |  |
| `tn_h` |  |
| `tn_w` |  |
| `trip` |  |
| `unique_ip` |  |
| `w` |  |

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
const archives = await client.Archive().list()
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
| `board` | ``$STRING`` |  |
| `board_flag` | ``$OBJECT`` |  |
| `bump_limit` | ``$INTEGER`` |  |
| `cooldown` | ``$OBJECT`` |  |
| `custom_spoiler` | ``$INTEGER`` |  |
| `image_limit` | ``$INTEGER`` |  |
| `is_archived` | ``$INTEGER`` |  |
| `max_comment_char` | ``$INTEGER`` |  |
| `max_filesize` | ``$INTEGER`` |  |
| `max_webm_duration` | ``$INTEGER`` |  |
| `max_webm_filesize` | ``$INTEGER`` |  |
| `meta_description` | ``$STRING`` |  |
| `page` | ``$INTEGER`` |  |
| `per_page` | ``$INTEGER`` |  |
| `spoiler` | ``$INTEGER`` |  |
| `title` | ``$STRING`` |  |
| `ws_board` | ``$INTEGER`` |  |

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
| `page` | ``$INTEGER`` |  |
| `thread` | ``$ARRAY`` |  |

#### Example: List

```ts
const catalogs = await client.Catalog().list()
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
| `post` | ``$ARRAY`` |  |

#### Example: List

```ts
const indexs = await client.Index().list()
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
| `archived` | ``$INTEGER`` |  |
| `archived_on` | ``$INTEGER`` |  |
| `bumplimit` | ``$INTEGER`` |  |
| `capcode` | ``$STRING`` |  |
| `closed` | ``$INTEGER`` |  |
| `com` | ``$STRING`` |  |
| `country` | ``$STRING`` |  |
| `country_name` | ``$STRING`` |  |
| `custom_spoiler` | ``$INTEGER`` |  |
| `ext` | ``$STRING`` |  |
| `filedeleted` | ``$INTEGER`` |  |
| `filename` | ``$STRING`` |  |
| `fsize` | ``$INTEGER`` |  |
| `h` | ``$INTEGER`` |  |
| `id` | ``$STRING`` |  |
| `image` | ``$INTEGER`` |  |
| `imagelimit` | ``$INTEGER`` |  |
| `last_modified` | ``$INTEGER`` |  |
| `m_img` | ``$INTEGER`` |  |
| `md5` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `no` | ``$INTEGER`` |  |
| `now` | ``$STRING`` |  |
| `omitted_image` | ``$INTEGER`` |  |
| `omitted_post` | ``$INTEGER`` |  |
| `page` | ``$INTEGER`` |  |
| `reply` | ``$INTEGER`` |  |
| `resto` | ``$INTEGER`` |  |
| `semantic_url` | ``$STRING`` |  |
| `since4pass` | ``$INTEGER`` |  |
| `spoiler` | ``$INTEGER`` |  |
| `sticky` | ``$INTEGER`` |  |
| `sub` | ``$STRING`` |  |
| `tag` | ``$STRING`` |  |
| `thread` | ``$ARRAY`` |  |
| `tim` | ``$INTEGER`` |  |
| `time` | ``$INTEGER`` |  |
| `tn_h` | ``$INTEGER`` |  |
| `tn_w` | ``$INTEGER`` |  |
| `trip` | ``$STRING`` |  |
| `unique_ip` | ``$INTEGER`` |  |
| `w` | ``$INTEGER`` |  |

#### Example: List

```ts
const threads = await client.Thread().list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

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
import { N4chanSDK } from 'n4chan'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const moon = client.Moon()
await moon.load({ planet_id: 'earth', id: 'luna' })

// moon.data() now returns the loaded moon data
// moon.match() returns { planet_id: 'earth', id: 'luna' }
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
