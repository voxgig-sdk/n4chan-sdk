# N4chan Golang SDK



The Golang SDK for the N4chan API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/n4chan-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/n4chan-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/n4chan-sdk/go=../n4chan-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/n4chan-sdk/go"
)

func main() {
    client := sdk.New()

    // List archive records — the value is the array of records itself.
    archives, err := client.Archive(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range archives.([]any) {
        fmt.Println(item)
    }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

archive, err := client.Archive(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(archive) // the loaded mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewN4chanSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
N4CHAN_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewN4chanSDK

```go
func NewN4chanSDK(options map[string]any) *N4chanSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *N4chanSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### N4chanSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Archive` | `(data map[string]any) N4chanEntity` | Create an Archive entity instance. |
| `Board` | `(data map[string]any) N4chanEntity` | Create a Board entity instance. |
| `Catalog` | `(data map[string]any) N4chanEntity` | Create a Catalog entity instance. |
| `Index` | `(data map[string]any) N4chanEntity` | Create an Index entity instance. |
| `Thread` | `(data map[string]any) N4chanEntity` | Create a Thread entity instance. |

### Entity interface (N4chanEntity)

All entities implement the `N4chanEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    archive, err := client.Archive(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // archive is the loaded record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Archive

| Field | Description |
| --- | --- |

Operations: List.

API path: `/{board}/archive.json`

#### Board

| Field | Description |
| --- | --- |
| `"board"` |  |
| `"board_flag"` |  |
| `"bump_limit"` |  |
| `"cooldown"` |  |
| `"custom_spoiler"` |  |
| `"image_limit"` |  |
| `"is_archived"` |  |
| `"max_comment_char"` |  |
| `"max_filesize"` |  |
| `"max_webm_duration"` |  |
| `"max_webm_filesize"` |  |
| `"meta_description"` |  |
| `"page"` |  |
| `"per_page"` |  |
| `"spoiler"` |  |
| `"title"` |  |
| `"ws_board"` |  |

Operations: List.

API path: `/boards.json`

#### Catalog

| Field | Description |
| --- | --- |
| `"page"` |  |
| `"thread"` |  |

Operations: List.

API path: `/{board}/catalog.json`

#### Index

| Field | Description |
| --- | --- |
| `"post"` |  |

Operations: List.

API path: `/{board}/{page}.json`

#### Thread

| Field | Description |
| --- | --- |
| `"archived"` |  |
| `"archived_on"` |  |
| `"bumplimit"` |  |
| `"capcode"` |  |
| `"closed"` |  |
| `"com"` |  |
| `"country"` |  |
| `"country_name"` |  |
| `"custom_spoiler"` |  |
| `"ext"` |  |
| `"filedeleted"` |  |
| `"filename"` |  |
| `"fsize"` |  |
| `"h"` |  |
| `"id"` |  |
| `"image"` |  |
| `"imagelimit"` |  |
| `"last_modified"` |  |
| `"m_img"` |  |
| `"md5"` |  |
| `"name"` |  |
| `"no"` |  |
| `"now"` |  |
| `"omitted_image"` |  |
| `"omitted_post"` |  |
| `"page"` |  |
| `"reply"` |  |
| `"resto"` |  |
| `"semantic_url"` |  |
| `"since4pass"` |  |
| `"spoiler"` |  |
| `"sticky"` |  |
| `"sub"` |  |
| `"tag"` |  |
| `"thread"` |  |
| `"tim"` |  |
| `"time"` |  |
| `"tn_h"` |  |
| `"tn_w"` |  |
| `"trip"` |  |
| `"unique_ip"` |  |
| `"w"` |  |

Operations: List.

API path: `/{board}/thread/{threadId}.json`



## Entities


### Archive

Create an instance: `archive := client.Archive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
archives, err := client.Archive(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(archives) // the array of records
```


### Board

Create an instance: `board := client.Board(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | ``$STRING`` |  |
| `board_flag` | ``$OBJECT`` |  |
| `bump_limit` | ``$INTEGER`` |  |
| `cooldown` | ``$OBJECT`` |  |
| `custom_spoiler` | ``$INTEGER`` |  |
| `image_limit` | ``$INTEGER`` |  |
| `is_archived` | ``$INTEGER`` |  |
| `max_comment_char` | ``$INTEGER`` |  |
| `max_filesize` | ``$INTEGER`` |  |
| `max_webm_duration` | ``$INTEGER`` |  |
| `max_webm_filesize` | ``$INTEGER`` |  |
| `meta_description` | ``$STRING`` |  |
| `page` | ``$INTEGER`` |  |
| `per_page` | ``$INTEGER`` |  |
| `spoiler` | ``$INTEGER`` |  |
| `title` | ``$STRING`` |  |
| `ws_board` | ``$INTEGER`` |  |

#### Example: List

```go
boards, err := client.Board(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(boards) // the array of records
```


### Catalog

Create an instance: `catalog := client.Catalog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `page` | ``$INTEGER`` |  |
| `thread` | ``$ARRAY`` |  |

#### Example: List

```go
catalogs, err := client.Catalog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(catalogs) // the array of records
```


### Index

Create an instance: `index := client.Index(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `post` | ``$ARRAY`` |  |

#### Example: List

```go
indexs, err := client.Index(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(indexs) // the array of records
```


### Thread

Create an instance: `thread := client.Thread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | ``$INTEGER`` |  |
| `archived_on` | ``$INTEGER`` |  |
| `bumplimit` | ``$INTEGER`` |  |
| `capcode` | ``$STRING`` |  |
| `closed` | ``$INTEGER`` |  |
| `com` | ``$STRING`` |  |
| `country` | ``$STRING`` |  |
| `country_name` | ``$STRING`` |  |
| `custom_spoiler` | ``$INTEGER`` |  |
| `ext` | ``$STRING`` |  |
| `filedeleted` | ``$INTEGER`` |  |
| `filename` | ``$STRING`` |  |
| `fsize` | ``$INTEGER`` |  |
| `h` | ``$INTEGER`` |  |
| `id` | ``$STRING`` |  |
| `image` | ``$INTEGER`` |  |
| `imagelimit` | ``$INTEGER`` |  |
| `last_modified` | ``$INTEGER`` |  |
| `m_img` | ``$INTEGER`` |  |
| `md5` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `no` | ``$INTEGER`` |  |
| `now` | ``$STRING`` |  |
| `omitted_image` | ``$INTEGER`` |  |
| `omitted_post` | ``$INTEGER`` |  |
| `page` | ``$INTEGER`` |  |
| `reply` | ``$INTEGER`` |  |
| `resto` | ``$INTEGER`` |  |
| `semantic_url` | ``$STRING`` |  |
| `since4pass` | ``$INTEGER`` |  |
| `spoiler` | ``$INTEGER`` |  |
| `sticky` | ``$INTEGER`` |  |
| `sub` | ``$STRING`` |  |
| `tag` | ``$STRING`` |  |
| `thread` | ``$ARRAY`` |  |
| `tim` | ``$INTEGER`` |  |
| `time` | ``$INTEGER`` |  |
| `tn_h` | ``$INTEGER`` |  |
| `tn_w` | ``$INTEGER`` |  |
| `trip` | ``$STRING`` |  |
| `unique_ip` | ``$INTEGER`` |  |
| `w` | ``$INTEGER`` |  |

#### Example: List

```go
threads, err := client.Thread(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(threads) // the array of records
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/n4chan-sdk/go/
├── n4chan.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/n4chan-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
archive := client.Archive(nil)
archive.Load(map[string]any{"id": "example_id"}, nil)

// archive.Data() now returns the loaded archive data
// archive.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
