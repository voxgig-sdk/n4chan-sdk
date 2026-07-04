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
const archive = client.archive
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.archive.list()
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
const board = client.board
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | ``$STRING`` | No |  |
| `board_flag` | ``$OBJECT`` | No |  |
| `bump_limit` | ``$INTEGER`` | No |  |
| `cooldown` | ``$OBJECT`` | No |  |
| `custom_spoiler` | ``$INTEGER`` | No |  |
| `image_limit` | ``$INTEGER`` | No |  |
| `is_archived` | ``$INTEGER`` | No |  |
| `max_comment_char` | ``$INTEGER`` | No |  |
| `max_filesize` | ``$INTEGER`` | No |  |
| `max_webm_duration` | ``$INTEGER`` | No |  |
| `max_webm_filesize` | ``$INTEGER`` | No |  |
| `meta_description` | ``$STRING`` | No |  |
| `page` | ``$INTEGER`` | No |  |
| `per_page` | ``$INTEGER`` | No |  |
| `spoiler` | ``$INTEGER`` | No |  |
| `title` | ``$STRING`` | No |  |
| `ws_board` | ``$INTEGER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.board.list()
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
const catalog = client.catalog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | ``$INTEGER`` | No |  |
| `thread` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.catalog.list()
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
const index = client.index
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `post` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.index.list()
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
const thread = client.thread
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | ``$INTEGER`` | No |  |
| `archived_on` | ``$INTEGER`` | No |  |
| `bumplimit` | ``$INTEGER`` | No |  |
| `capcode` | ``$STRING`` | No |  |
| `closed` | ``$INTEGER`` | No |  |
| `com` | ``$STRING`` | No |  |
| `country` | ``$STRING`` | No |  |
| `country_name` | ``$STRING`` | No |  |
| `custom_spoiler` | ``$INTEGER`` | No |  |
| `ext` | ``$STRING`` | No |  |
| `filedeleted` | ``$INTEGER`` | No |  |
| `filename` | ``$STRING`` | No |  |
| `fsize` | ``$INTEGER`` | No |  |
| `h` | ``$INTEGER`` | No |  |
| `id` | ``$STRING`` | No |  |
| `image` | ``$INTEGER`` | No |  |
| `imagelimit` | ``$INTEGER`` | No |  |
| `last_modified` | ``$INTEGER`` | No |  |
| `m_img` | ``$INTEGER`` | No |  |
| `md5` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `no` | ``$INTEGER`` | Yes |  |
| `now` | ``$STRING`` | Yes |  |
| `omitted_image` | ``$INTEGER`` | No |  |
| `omitted_post` | ``$INTEGER`` | No |  |
| `page` | ``$INTEGER`` | No |  |
| `reply` | ``$INTEGER`` | No |  |
| `resto` | ``$INTEGER`` | No |  |
| `semantic_url` | ``$STRING`` | No |  |
| `since4pass` | ``$INTEGER`` | No |  |
| `spoiler` | ``$INTEGER`` | No |  |
| `sticky` | ``$INTEGER`` | No |  |
| `sub` | ``$STRING`` | No |  |
| `tag` | ``$STRING`` | No |  |
| `thread` | ``$ARRAY`` | No |  |
| `tim` | ``$INTEGER`` | No |  |
| `time` | ``$INTEGER`` | Yes |  |
| `tn_h` | ``$INTEGER`` | No |  |
| `tn_w` | ``$INTEGER`` | No |  |
| `trip` | ``$STRING`` | No |  |
| `unique_ip` | ``$INTEGER`` | No |  |
| `w` | ``$INTEGER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.thread.list()
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

