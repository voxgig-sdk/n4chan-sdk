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
| `board` | `string` | No | Board identifier |
| `board_flags` | `table` | No | Board flags configuration |
| `bump_limit` | `number` | No | Bump limit for threads |
| `cooldowns` | `table` | No | Cooldown periods for posting |
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
| `page` | `number` | No | Page number |
| `threads` | `table` | No |  |

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
| `posts` | `table` | No |  |

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
| `threads` | `table` | No |  |
| `tim` | `number` | No | Unix timestamp for image |
| `time` | `number` | Yes | Unix timestamp |
| `tn_h` | `number` | No | Thumbnail height |
| `tn_w` | `number` | No | Thumbnail width |
| `trip` | `string` | No | Tripcode |
| `unique_ips` | `number` | No | Number of unique poster IPs |
| `w` | `number` | No | Image width |

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

