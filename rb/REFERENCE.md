# N4chan Ruby SDK Reference

Complete API reference for the N4chan Ruby SDK.


## N4chanSDK

### Constructor

```ruby
require_relative 'N4chan_sdk'

client = N4chanSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `N4chanSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = N4chanSDK.test
```


### Instance Methods

#### `Archive(data = nil)`

Create a new `Archive` entity instance. Pass `nil` for no initial data.

#### `Board(data = nil)`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `Catalog(data = nil)`

Create a new `Catalog` entity instance. Pass `nil` for no initial data.

#### `Index(data = nil)`

Create a new `Index` entity instance. Pass `nil` for no initial data.

#### `Thread(data = nil)`

Create a new `Thread` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ArchiveEntity

```ruby
archive = client.Archive
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Archive.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ArchiveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BoardEntity

```ruby
board = client.Board
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `String` | No |  |
| `board_flags` | `Hash` | No |  |
| `bump_limit` | `Integer` | No |  |
| `cooldowns` | `Hash` | No |  |
| `custom_spoilers` | `Integer` | No |  |
| `image_limit` | `Integer` | No |  |
| `is_archived` | `Integer` | No |  |
| `max_comment_chars` | `Integer` | No |  |
| `max_filesize` | `Integer` | No |  |
| `max_webm_duration` | `Integer` | No |  |
| `max_webm_filesize` | `Integer` | No |  |
| `meta_description` | `String` | No |  |
| `pages` | `Integer` | No |  |
| `per_page` | `Integer` | No |  |
| `spoilers` | `Integer` | No |  |
| `title` | `String` | No |  |
| `ws_board` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Board.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CatalogEntity

```ruby
catalog = client.Catalog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | `Integer` | No |  |
| `threads` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Catalog.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IndexEntity

```ruby
index = client.Index
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Index.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IndexEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ThreadEntity

```ruby
thread = client.Thread
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `Integer` | No |  |
| `archived_on` | `Integer` | No |  |
| `bumplimit` | `Integer` | No |  |
| `capcode` | `String` | No |  |
| `closed` | `Integer` | No |  |
| `com` | `String` | No |  |
| `country` | `String` | No |  |
| `country_name` | `String` | No |  |
| `custom_spoiler` | `Integer` | No |  |
| `ext` | `String` | No |  |
| `filedeleted` | `Integer` | No |  |
| `filename` | `String` | No |  |
| `fsize` | `Integer` | No |  |
| `h` | `Integer` | No |  |
| `id` | `String` | No |  |
| `imagelimit` | `Integer` | No |  |
| `images` | `Integer` | No |  |
| `last_modified` | `Integer` | No |  |
| `m_img` | `Integer` | No |  |
| `md5` | `String` | No |  |
| `name` | `String` | No |  |
| `no` | `Integer` | Yes |  |
| `now` | `String` | Yes |  |
| `omitted_images` | `Integer` | No |  |
| `omitted_posts` | `Integer` | No |  |
| `page` | `Integer` | No |  |
| `replies` | `Integer` | No |  |
| `resto` | `Integer` | No |  |
| `semantic_url` | `String` | No |  |
| `since4pass` | `Integer` | No |  |
| `spoiler` | `Integer` | No |  |
| `sticky` | `Integer` | No |  |
| `sub` | `String` | No |  |
| `tag` | `String` | No |  |
| `threads` | `Array` | No |  |
| `tim` | `Integer` | No |  |
| `time` | `Integer` | Yes |  |
| `tn_h` | `Integer` | No |  |
| `tn_w` | `Integer` | No |  |
| `trip` | `String` | No |  |
| `unique_ips` | `Integer` | No |  |
| `w` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Thread.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = N4chanSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

