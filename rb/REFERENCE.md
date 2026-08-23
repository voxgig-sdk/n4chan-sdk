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
| `board` | `String` | No | Board identifier |
| `board_flags` | `Hash` | No | Board flags configuration |
| `bump_limit` | `Integer` | No | Bump limit for threads |
| `cooldowns` | `Hash` | No | Cooldown periods for posting |
| `custom_spoilers` | `Integer` | No | Number of custom spoiler images |
| `image_limit` | `Integer` | No | Image limit for threads |
| `is_archived` | `Integer` | No | Archive enabled flag |
| `max_comment_chars` | `Integer` | No | Maximum comment length |
| `max_filesize` | `Integer` | No | Maximum filesize in bytes |
| `max_webm_duration` | `Integer` | No | Maximum WebM duration in seconds |
| `max_webm_filesize` | `Integer` | No | Maximum WebM filesize in bytes |
| `meta_description` | `String` | No | Board meta description |
| `pages` | `Integer` | No | Number of pages |
| `per_page` | `Integer` | No | Threads per page |
| `spoilers` | `Integer` | No | Custom spoilers enabled flag |
| `title` | `String` | No | Board title |
| `ws_board` | `Integer` | No | Worksafe board flag (1 for worksafe, 0 for NSFW) |

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
| `page` | `Integer` | No | Page number |
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
| `archived` | `Integer` | No | Archived flag |
| `archived_on` | `Integer` | No | Unix timestamp when archived |
| `bumplimit` | `Integer` | No | Bump limit reached flag |
| `capcode` | `String` | No | Capcode (mod, admin, etc.) |
| `closed` | `Integer` | No | Closed flag |
| `com` | `String` | No | Comment (HTML escaped) |
| `country` | `String` | No | Country code |
| `country_name` | `String` | No | Country name |
| `custom_spoiler` | `Integer` | No | Custom spoiler ID |
| `ext` | `String` | No | File extension |
| `filedeleted` | `Integer` | No | File deleted flag |
| `filename` | `String` | No | Original filename |
| `fsize` | `Integer` | No | File size in bytes |
| `h` | `Integer` | No | Image height |
| `id` | `String` | No | Poster ID |
| `imagelimit` | `Integer` | No | Image limit reached flag |
| `images` | `Integer` | No | Number of images |
| `last_modified` | `Integer` | No | Unix timestamp of last modification |
| `m_img` | `Integer` | No | Mobile optimized image flag |
| `md5` | `String` | No | MD5 hash in base64 |
| `name` | `String` | No | Poster name |
| `no` | `Integer` | Yes | Post number |
| `now` | `String` | Yes | Formatted date and time |
| `omitted_images` | `Integer` | No | Number of omitted images |
| `omitted_posts` | `Integer` | No | Number of omitted posts |
| `page` | `Integer` | No | Page number |
| `replies` | `Integer` | No | Number of replies |
| `resto` | `Integer` | No | Reply to thread ID (0 for OP) |
| `semantic_url` | `String` | No | SEO-friendly URL slug |
| `since4pass` | `Integer` | No | Year 4chan pass purchased |
| `spoiler` | `Integer` | No | Spoiler flag |
| `sticky` | `Integer` | No | Sticky flag |
| `sub` | `String` | No | Subject |
| `tag` | `String` | No | Tag |
| `threads` | `Array` | No |  |
| `tim` | `Integer` | No | Unix timestamp for image |
| `time` | `Integer` | Yes | Unix timestamp |
| `tn_h` | `Integer` | No | Thumbnail height |
| `tn_w` | `Integer` | No | Thumbnail width |
| `trip` | `String` | No | Tripcode |
| `unique_ips` | `Integer` | No | Number of unique poster IPs |
| `w` | `Integer` | No | Image width |

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

