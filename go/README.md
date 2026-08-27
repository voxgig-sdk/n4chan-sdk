# N4chan Golang SDK



The Golang SDK for the N4chan API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Archive(nil)` — each with the same small set of operations (`List`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
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


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
catalogs, err := client.Catalog(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = catalogs
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
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

catalog, err := client.Catalog(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(catalog) // the returned mock data
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
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    archive, err := client.Archive(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // archive is the returned record

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
| `"board"` | Board identifier |
| `"board_flags"` | Board flags configuration |
| `"bump_limit"` | Bump limit for threads |
| `"cooldowns"` | Cooldown periods for posting |
| `"custom_spoilers"` | Number of custom spoiler images |
| `"image_limit"` | Image limit for threads |
| `"is_archived"` | Archive enabled flag |
| `"max_comment_chars"` | Maximum comment length |
| `"max_filesize"` | Maximum filesize in bytes |
| `"max_webm_duration"` | Maximum WebM duration in seconds |
| `"max_webm_filesize"` | Maximum WebM filesize in bytes |
| `"meta_description"` | Board meta description |
| `"pages"` | Number of pages |
| `"per_page"` | Threads per page |
| `"spoilers"` | Custom spoilers enabled flag |
| `"title"` | Board title |
| `"ws_board"` | Worksafe board flag (1 for worksafe, 0 for NSFW) |

Operations: List.

API path: `/boards.json`

#### Catalog

| Field | Description |
| --- | --- |
| `"page"` | Page number |
| `"threads"` |  |

Operations: List.

API path: `/{board}/catalog.json`

#### Index

| Field | Description |
| --- | --- |
| `"posts"` |  |

Operations: List.

API path: `/{board}/{page}.json`

#### Thread

| Field | Description |
| --- | --- |
| `"archived"` | Archived flag |
| `"archived_on"` | Unix timestamp when archived |
| `"bumplimit"` | Bump limit reached flag |
| `"capcode"` | Capcode (mod, admin, etc.) |
| `"closed"` | Closed flag |
| `"com"` | Comment (HTML escaped) |
| `"country"` | Country code |
| `"country_name"` | Country name |
| `"custom_spoiler"` | Custom spoiler ID |
| `"ext"` | File extension |
| `"filedeleted"` | File deleted flag |
| `"filename"` | Original filename |
| `"fsize"` | File size in bytes |
| `"h"` | Image height |
| `"id"` | Poster ID |
| `"imagelimit"` | Image limit reached flag |
| `"images"` | Number of images |
| `"last_modified"` | Unix timestamp of last modification |
| `"m_img"` | Mobile optimized image flag |
| `"md5"` | MD5 hash in base64 |
| `"name"` | Poster name |
| `"no"` | Post number |
| `"now"` | Formatted date and time |
| `"omitted_images"` | Number of omitted images |
| `"omitted_posts"` | Number of omitted posts |
| `"page"` | Page number |
| `"replies"` | Number of replies |
| `"resto"` | Reply to thread ID (0 for OP) |
| `"semantic_url"` | SEO-friendly URL slug |
| `"since4pass"` | Year 4chan pass purchased |
| `"spoiler"` | Spoiler flag |
| `"sticky"` | Sticky flag |
| `"sub"` | Subject |
| `"tag"` | Tag |
| `"threads"` |  |
| `"tim"` | Unix timestamp for image |
| `"time"` | Unix timestamp |
| `"tn_h"` | Thumbnail height |
| `"tn_w"` | Thumbnail width |
| `"trip"` | Tripcode |
| `"unique_ips"` | Number of unique poster IPs |
| `"w"` | Image width |

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
| `board` | `string` | Board identifier |
| `board_flags` | `map[string]any` | Board flags configuration |
| `bump_limit` | `int` | Bump limit for threads |
| `cooldowns` | `map[string]any` | Cooldown periods for posting |
| `custom_spoilers` | `int` | Number of custom spoiler images |
| `image_limit` | `int` | Image limit for threads |
| `is_archived` | `int` | Archive enabled flag |
| `max_comment_chars` | `int` | Maximum comment length |
| `max_filesize` | `int` | Maximum filesize in bytes |
| `max_webm_duration` | `int` | Maximum WebM duration in seconds |
| `max_webm_filesize` | `int` | Maximum WebM filesize in bytes |
| `meta_description` | `string` | Board meta description |
| `pages` | `int` | Number of pages |
| `per_page` | `int` | Threads per page |
| `spoilers` | `int` | Custom spoilers enabled flag |
| `title` | `string` | Board title |
| `ws_board` | `int` | Worksafe board flag (1 for worksafe, 0 for NSFW) |

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
| `page` | `int` | Page number |
| `threads` | `[]any` |  |

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
| `posts` | `[]any` |  |

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
| `archived` | `int` | Archived flag |
| `archived_on` | `int` | Unix timestamp when archived |
| `bumplimit` | `int` | Bump limit reached flag |
| `capcode` | `string` | Capcode (mod, admin, etc.) |
| `closed` | `int` | Closed flag |
| `com` | `string` | Comment (HTML escaped) |
| `country` | `string` | Country code |
| `country_name` | `string` | Country name |
| `custom_spoiler` | `int` | Custom spoiler ID |
| `ext` | `string` | File extension |
| `filedeleted` | `int` | File deleted flag |
| `filename` | `string` | Original filename |
| `fsize` | `int` | File size in bytes |
| `h` | `int` | Image height |
| `id` | `string` | Poster ID |
| `imagelimit` | `int` | Image limit reached flag |
| `images` | `int` | Number of images |
| `last_modified` | `int` | Unix timestamp of last modification |
| `m_img` | `int` | Mobile optimized image flag |
| `md5` | `string` | MD5 hash in base64 |
| `name` | `string` | Poster name |
| `no` | `int` | Post number |
| `now` | `string` | Formatted date and time |
| `omitted_images` | `int` | Number of omitted images |
| `omitted_posts` | `int` | Number of omitted posts |
| `page` | `int` | Page number |
| `replies` | `int` | Number of replies |
| `resto` | `int` | Reply to thread ID (0 for OP) |
| `semantic_url` | `string` | SEO-friendly URL slug |
| `since4pass` | `int` | Year 4chan pass purchased |
| `spoiler` | `int` | Spoiler flag |
| `sticky` | `int` | Sticky flag |
| `sub` | `string` | Subject |
| `tag` | `string` | Tag |
| `threads` | `[]any` |  |
| `tim` | `int` | Unix timestamp for image |
| `time` | `int` | Unix timestamp |
| `tn_h` | `int` | Thumbnail height |
| `tn_w` | `int` | Thumbnail width |
| `trip` | `string` | Tripcode |
| `unique_ips` | `int` | Number of unique poster IPs |
| `w` | `int` | Image width |

#### Example: List

```go
threads, err := client.Thread(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(threads) // the array of records
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

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

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
catalog := client.Catalog(nil)
catalog.List(nil, nil)

// catalog.Data() now returns the catalog data from the last list
// catalog.Match() returns the last match criteria
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
