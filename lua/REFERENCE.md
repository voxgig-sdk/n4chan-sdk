# N4chan Lua SDK Reference

Complete API reference for the N4chan Lua SDK.


## N4chanSDK

### Constructor

```lua
local sdk = require("n4chan_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Archive(data)`

Create a new `Archive` entity instance. Pass `nil` for no initial data.

#### `Board(data)`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `Catalog(data)`

Create a new `Catalog` entity instance. Pass `nil` for no initial data.

#### `Index(data)`

Create a new `Index` entity instance. Pass `nil` for no initial data.

#### `Thread(data)`

Create a new `Thread` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ArchiveEntity

```lua
local archive = client:Archive(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Archive():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArchiveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BoardEntity

```lua
local board = client:Board(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Board():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CatalogEntity

```lua
local catalog = client:Catalog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | ``$INTEGER`` | No |  |
| `thread` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Catalog():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IndexEntity

```lua
local index = client:Index(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `post` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Index():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndexEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ThreadEntity

```lua
local thread = client:Thread(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Thread():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

