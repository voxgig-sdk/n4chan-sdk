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
| `board` | `string` | No |  |
| `board_flag` | `table` | No |  |
| `bump_limit` | `number` | No |  |
| `cooldown` | `table` | No |  |
| `custom_spoiler` | `number` | No |  |
| `image_limit` | `number` | No |  |
| `is_archived` | `number` | No |  |
| `max_comment_char` | `number` | No |  |
| `max_filesize` | `number` | No |  |
| `max_webm_duration` | `number` | No |  |
| `max_webm_filesize` | `number` | No |  |
| `meta_description` | `string` | No |  |
| `page` | `number` | No |  |
| `per_page` | `number` | No |  |
| `spoiler` | `number` | No |  |
| `title` | `string` | No |  |
| `ws_board` | `number` | No |  |

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
| `page` | `number` | No |  |
| `thread` | `table` | No |  |

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
| `post` | `table` | No |  |

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
| `archived` | `number` | No |  |
| `archived_on` | `number` | No |  |
| `bumplimit` | `number` | No |  |
| `capcode` | `string` | No |  |
| `closed` | `number` | No |  |
| `com` | `string` | No |  |
| `country` | `string` | No |  |
| `country_name` | `string` | No |  |
| `custom_spoiler` | `number` | No |  |
| `ext` | `string` | No |  |
| `filedeleted` | `number` | No |  |
| `filename` | `string` | No |  |
| `fsize` | `number` | No |  |
| `h` | `number` | No |  |
| `id` | `string` | No |  |
| `image` | `number` | No |  |
| `imagelimit` | `number` | No |  |
| `last_modified` | `number` | No |  |
| `m_img` | `number` | No |  |
| `md5` | `string` | No |  |
| `name` | `string` | No |  |
| `no` | `number` | Yes |  |
| `now` | `string` | Yes |  |
| `omitted_image` | `number` | No |  |
| `omitted_post` | `number` | No |  |
| `page` | `number` | No |  |
| `reply` | `number` | No |  |
| `resto` | `number` | No |  |
| `semantic_url` | `string` | No |  |
| `since4pass` | `number` | No |  |
| `spoiler` | `number` | No |  |
| `sticky` | `number` | No |  |
| `sub` | `string` | No |  |
| `tag` | `string` | No |  |
| `thread` | `table` | No |  |
| `tim` | `number` | No |  |
| `time` | `number` | Yes |  |
| `tn_h` | `number` | No |  |
| `tn_w` | `number` | No |  |
| `trip` | `string` | No |  |
| `unique_ip` | `number` | No |  |
| `w` | `number` | No |  |

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

