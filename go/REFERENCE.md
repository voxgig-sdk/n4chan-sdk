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
| `board` | `string` | No |  |
| `board_flags` | `map[string]any` | No |  |
| `bump_limit` | `int` | No |  |
| `cooldowns` | `map[string]any` | No |  |
| `custom_spoilers` | `int` | No |  |
| `image_limit` | `int` | No |  |
| `is_archived` | `int` | No |  |
| `max_comment_chars` | `int` | No |  |
| `max_filesize` | `int` | No |  |
| `max_webm_duration` | `int` | No |  |
| `max_webm_filesize` | `int` | No |  |
| `meta_description` | `string` | No |  |
| `pages` | `int` | No |  |
| `per_page` | `int` | No |  |
| `spoilers` | `int` | No |  |
| `title` | `string` | No |  |
| `ws_board` | `int` | No |  |

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
| `page` | `int` | No |  |
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
| `archived` | `int` | No |  |
| `archived_on` | `int` | No |  |
| `bumplimit` | `int` | No |  |
| `capcode` | `string` | No |  |
| `closed` | `int` | No |  |
| `com` | `string` | No |  |
| `country` | `string` | No |  |
| `country_name` | `string` | No |  |
| `custom_spoiler` | `int` | No |  |
| `ext` | `string` | No |  |
| `filedeleted` | `int` | No |  |
| `filename` | `string` | No |  |
| `fsize` | `int` | No |  |
| `h` | `int` | No |  |
| `id` | `string` | No |  |
| `imagelimit` | `int` | No |  |
| `images` | `int` | No |  |
| `last_modified` | `int` | No |  |
| `m_img` | `int` | No |  |
| `md5` | `string` | No |  |
| `name` | `string` | No |  |
| `no` | `int` | Yes |  |
| `now` | `string` | Yes |  |
| `omitted_images` | `int` | No |  |
| `omitted_posts` | `int` | No |  |
| `page` | `int` | No |  |
| `replies` | `int` | No |  |
| `resto` | `int` | No |  |
| `semantic_url` | `string` | No |  |
| `since4pass` | `int` | No |  |
| `spoiler` | `int` | No |  |
| `sticky` | `int` | No |  |
| `sub` | `string` | No |  |
| `tag` | `string` | No |  |
| `threads` | `[]any` | No |  |
| `tim` | `int` | No |  |
| `time` | `int` | Yes |  |
| `tn_h` | `int` | No |  |
| `tn_w` | `int` | No |  |
| `trip` | `string` | No |  |
| `unique_ips` | `int` | No |  |
| `w` | `int` | No |  |

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

