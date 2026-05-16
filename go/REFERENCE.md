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
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TestSDK(testopts, sdkopts map[string]any) *N4chanSDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
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
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Archive(nil).List(nil, nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Board(nil).List(nil, nil)
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
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | ``$INTEGER`` | No |  |
| `thread` | ``$ARRAY`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Catalog(nil).List(nil, nil)
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
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `post` | ``$ARRAY`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Index(nil).List(nil, nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Thread(nil).List(nil, nil)
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

