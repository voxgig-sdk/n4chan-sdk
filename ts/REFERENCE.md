# N4chan TypeScript SDK Reference

Complete API reference for the N4chan TypeScript SDK.


## N4chanSDK

### Constructor

```ts
new N4chanSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `N4chanSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = N4chanSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `N4chanSDK` instance in test mode.


### Instance Methods

#### `Archive(data?: object)`

Create a new `Archive` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArchiveEntity` instance.

#### `Board(data?: object)`

Create a new `Board` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BoardEntity` instance.

#### `Catalog(data?: object)`

Create a new `Catalog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogEntity` instance.

#### `Index(data?: object)`

Create a new `Index` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IndexEntity` instance.

#### `Thread(data?: object)`

Create a new `Thread` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ThreadEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `N4chanSDK.test()`.

**Returns:** `N4chanSDK` instance in test mode.


---

## ArchiveEntity

```ts
const archive = client.Archive()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Archive().list({ board: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArchiveEntity` instance with the same client and
options.

#### `client()`

Return the parent `N4chanSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BoardEntity

```ts
const board = client.Board()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `string` | No | Board identifier |
| `board_flags` | `Record<string, any>` | No | Board flags configuration |
| `bump_limit` | `number` | No | Bump limit for threads |
| `cooldowns` | `Record<string, any>` | No | Cooldown periods for posting |
| `custom_spoilers` | `number` | No | Number of custom spoiler images |
| `image_limit` | `number` | No | Image limit for threads |
| `is_archived` | `number` | No | Archive enabled flag |
| `max_comment_chars` | `number` | No | Maximum comment length |
| `max_filesize` | `number` | No | Maximum filesize in bytes |
| `max_webm_duration` | `number` | No | Maximum WebM duration in seconds |
| `max_webm_filesize` | `number` | No | Maximum WebM filesize in bytes |
| `meta_description` | `string` | No | Board meta description |
| `pages` | `number` | No | Number of pages |
| `per_page` | `number` | No | Threads per page |
| `spoilers` | `number` | No | Custom spoilers enabled flag |
| `title` | `string` | No | Board title |
| `ws_board` | `number` | No | Worksafe board flag (1 for worksafe, 0 for NSFW) |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Board().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BoardEntity` instance with the same client and
options.

#### `client()`

Return the parent `N4chanSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogEntity

```ts
const catalog = client.Catalog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | `number` | No | Page number |
| `threads` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Catalog().list({ board: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogEntity` instance with the same client and
options.

#### `client()`

Return the parent `N4chanSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IndexEntity

```ts
const index = client.Index()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Index().list({ board: "example", page: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IndexEntity` instance with the same client and
options.

#### `client()`

Return the parent `N4chanSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ThreadEntity

```ts
const thread = client.Thread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `number` | No | Archived flag |
| `archived_on` | `number` | No | Unix timestamp when archived |
| `bumplimit` | `number` | No | Bump limit reached flag |
| `capcode` | `string` | No | Capcode (mod, admin, etc.) |
| `closed` | `number` | No | Closed flag |
| `com` | `string` | No | Comment (HTML escaped) |
| `country` | `string` | No | Country code |
| `country_name` | `string` | No | Country name |
| `custom_spoiler` | `number` | No | Custom spoiler ID |
| `ext` | `string` | No | File extension |
| `filedeleted` | `number` | No | File deleted flag |
| `filename` | `string` | No | Original filename |
| `fsize` | `number` | No | File size in bytes |
| `h` | `number` | No | Image height |
| `id` | `string` | No | Poster ID |
| `imagelimit` | `number` | No | Image limit reached flag |
| `images` | `number` | No | Number of images |
| `last_modified` | `number` | No | Unix timestamp of last modification |
| `m_img` | `number` | No | Mobile optimized image flag |
| `md5` | `string` | No | MD5 hash in base64 |
| `name` | `string` | No | Poster name |
| `no` | `number` | Yes | Post number |
| `now` | `string` | Yes | Formatted date and time |
| `omitted_images` | `number` | No | Number of omitted images |
| `omitted_posts` | `number` | No | Number of omitted posts |
| `page` | `number` | No | Page number |
| `replies` | `number` | No | Number of replies |
| `resto` | `number` | No | Reply to thread ID (0 for OP) |
| `semantic_url` | `string` | No | SEO-friendly URL slug |
| `since4pass` | `number` | No | Year 4chan pass purchased |
| `spoiler` | `number` | No | Spoiler flag |
| `sticky` | `number` | No | Sticky flag |
| `sub` | `string` | No | Subject |
| `tag` | `string` | No | Tag |
| `threads` | `any[]` | No |  |
| `tim` | `number` | No | Unix timestamp for image |
| `time` | `number` | Yes | Unix timestamp |
| `tn_h` | `number` | No | Thumbnail height |
| `tn_w` | `number` | No | Thumbnail width |
| `trip` | `string` | No | Tripcode |
| `unique_ips` | `number` | No | Number of unique poster IPs |
| `w` | `number` | No | Image width |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `thread_id` | `/{board}/thread/{threadId}.json` | `client.Thread().list({ $action: 'thread_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Thread record — check the API definition for its shape.

```ts
const result = await client.Thread().list({
  $action: 'thread_id',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Thread().list({ board: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ThreadEntity` instance with the same client and
options.

#### `client()`

Return the parent `N4chanSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new N4chanSDK({
  feature: {
    test: { active: true },
  }
})
```

