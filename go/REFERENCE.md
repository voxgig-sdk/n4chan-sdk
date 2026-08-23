# N4chan Golang SDK Reference

Complete API reference for the N4chan Golang SDK.


## N4chanSDK

### Constructor

```go
func NewN4chanSDK(options map[string]any) *N4chanSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *N4chanSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *N4chanSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Archive(data map[string]any) N4chanEntity`

Create a new `Archive` entity instance. Pass `nil` for no initial data.

#### `Board(data map[string]any) N4chanEntity`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `Catalog(data map[string]any) N4chanEntity`

Create a new `Catalog` entity instance. Pass `nil` for no initial data.

#### `Index(data map[string]any) N4chanEntity`

Create a new `Index` entity instance. Pass `nil` for no initial data.

#### `Thread(data map[string]any) N4chanEntity`

Create a new `Thread` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ArchiveEntity

```go
archive := client.Archive(nil)
fmt.Println(archive.GetName()) // "archive"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Archive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArchiveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BoardEntity

```go
board := client.Board(nil)
fmt.Println(board.GetName()) // "board"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `string` | No | Board identifier |
| `board_flags` | `map[string]any` | No | Board flags configuration |
| `bump_limit` | `int` | No | Bump limit for threads |
| `cooldowns` | `map[string]any` | No | Cooldown periods for posting |
| `custom_spoilers` | `int` | No | Number of custom spoiler images |
| `image_limit` | `int` | No | Image limit for threads |
| `is_archived` | `int` | No | Archive enabled flag |
| `max_comment_chars` | `int` | No | Maximum comment length |
| `max_filesize` | `int` | No | Maximum filesize in bytes |
| `max_webm_duration` | `int` | No | Maximum WebM duration in seconds |
| `max_webm_filesize` | `int` | No | Maximum WebM filesize in bytes |
| `meta_description` | `string` | No | Board meta description |
| `pages` | `int` | No | Number of pages |
| `per_page` | `int` | No | Threads per page |
| `spoilers` | `int` | No | Custom spoilers enabled flag |
| `title` | `string` | No | Board title |
| `ws_board` | `int` | No | Worksafe board flag (1 for worksafe, 0 for NSFW) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Board(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CatalogEntity

```go
catalog := client.Catalog(nil)
fmt.Println(catalog.GetName()) // "catalog"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | `int` | No | Page number |
| `threads` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Catalog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IndexEntity

```go
index := client.Index(nil)
fmt.Println(index.GetName()) // "index"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Index(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IndexEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ThreadEntity

```go
thread := client.Thread(nil)
fmt.Println(thread.GetName()) // "thread"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `int` | No | Archived flag |
| `archived_on` | `int` | No | Unix timestamp when archived |
| `bumplimit` | `int` | No | Bump limit reached flag |
| `capcode` | `string` | No | Capcode (mod, admin, etc.) |
| `closed` | `int` | No | Closed flag |
| `com` | `string` | No | Comment (HTML escaped) |
| `country` | `string` | No | Country code |
| `country_name` | `string` | No | Country name |
| `custom_spoiler` | `int` | No | Custom spoiler ID |
| `ext` | `string` | No | File extension |
| `filedeleted` | `int` | No | File deleted flag |
| `filename` | `string` | No | Original filename |
| `fsize` | `int` | No | File size in bytes |
| `h` | `int` | No | Image height |
| `id` | `string` | No | Poster ID |
| `imagelimit` | `int` | No | Image limit reached flag |
| `images` | `int` | No | Number of images |
| `last_modified` | `int` | No | Unix timestamp of last modification |
| `m_img` | `int` | No | Mobile optimized image flag |
| `md5` | `string` | No | MD5 hash in base64 |
| `name` | `string` | No | Poster name |
| `no` | `int` | Yes | Post number |
| `now` | `string` | Yes | Formatted date and time |
| `omitted_images` | `int` | No | Number of omitted images |
| `omitted_posts` | `int` | No | Number of omitted posts |
| `page` | `int` | No | Page number |
| `replies` | `int` | No | Number of replies |
| `resto` | `int` | No | Reply to thread ID (0 for OP) |
| `semantic_url` | `string` | No | SEO-friendly URL slug |
| `since4pass` | `int` | No | Year 4chan pass purchased |
| `spoiler` | `int` | No | Spoiler flag |
| `sticky` | `int` | No | Sticky flag |
| `sub` | `string` | No | Subject |
| `tag` | `string` | No | Tag |
| `threads` | `[]any` | No |  |
| `tim` | `int` | No | Unix timestamp for image |
| `time` | `int` | Yes | Unix timestamp |
| `tn_h` | `int` | No | Thumbnail height |
| `tn_w` | `int` | No | Thumbnail width |
| `trip` | `string` | No | Tripcode |
| `unique_ips` | `int` | No | Number of unique poster IPs |
| `w` | `int` | No | Image width |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Thread(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewN4chanSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

