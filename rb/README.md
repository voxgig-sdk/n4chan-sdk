# N4chan Ruby SDK



The Ruby SDK for the N4chan API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Archive` — with named operations (`list`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/n4chan-sdk/releases](https://github.com/voxgig-sdk/n4chan-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "N4chan_sdk"

client = N4chanSDK.new
```

### 2. List archive records

```ruby
begin
  # list returns an Array of Archive records — iterate directly.
  archives = client.Archive.list
  archives.each do |item|
    puts "#{item}"
  end
rescue => err
  warn "list failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  catalogs = client.Catalog.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = N4chanSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
catalog = client.Catalog.list()
puts catalog
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = N4chanSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### N4chanSDK

```ruby
require_relative "N4chan_sdk"
client = N4chanSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = N4chanSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### N4chanSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Archive` | `(data) -> ArchiveEntity` | Create an Archive entity instance. |
| `Board` | `(data) -> BoardEntity` | Create a Board entity instance. |
| `Catalog` | `(data) -> CatalogEntity` | Create a Catalog entity instance. |
| `Index` | `(data) -> IndexEntity` | Create an Index entity instance. |
| `Thread` | `(data) -> ThreadEntity` | Create a Thread entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `N4chanError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Archive

| Field | Description |
| --- | --- |

Operations: List.

API path: `/{board}/archive.json`

#### Board

| Field | Description |
| --- | --- |
| `board` | Board identifier |
| `board_flags` | Board flags configuration |
| `bump_limit` | Bump limit for threads |
| `cooldowns` | Cooldown periods for posting |
| `custom_spoilers` | Number of custom spoiler images |
| `image_limit` | Image limit for threads |
| `is_archived` | Archive enabled flag |
| `max_comment_chars` | Maximum comment length |
| `max_filesize` | Maximum filesize in bytes |
| `max_webm_duration` | Maximum WebM duration in seconds |
| `max_webm_filesize` | Maximum WebM filesize in bytes |
| `meta_description` | Board meta description |
| `pages` | Number of pages |
| `per_page` | Threads per page |
| `spoilers` | Custom spoilers enabled flag |
| `title` | Board title |
| `ws_board` | Worksafe board flag (1 for worksafe, 0 for NSFW) |

Operations: List.

API path: `/boards.json`

#### Catalog

| Field | Description |
| --- | --- |
| `page` | Page number |
| `threads` |  |

Operations: List.

API path: `/{board}/catalog.json`

#### Index

| Field | Description |
| --- | --- |
| `posts` |  |

Operations: List.

API path: `/{board}/{page}.json`

#### Thread

| Field | Description |
| --- | --- |
| `archived` | Archived flag |
| `archived_on` | Unix timestamp when archived |
| `bumplimit` | Bump limit reached flag |
| `capcode` | Capcode (mod, admin, etc.) |
| `closed` | Closed flag |
| `com` | Comment (HTML escaped) |
| `country` | Country code |
| `country_name` | Country name |
| `custom_spoiler` | Custom spoiler ID |
| `ext` | File extension |
| `filedeleted` | File deleted flag |
| `filename` | Original filename |
| `fsize` | File size in bytes |
| `h` | Image height |
| `id` | Poster ID |
| `imagelimit` | Image limit reached flag |
| `images` | Number of images |
| `last_modified` | Unix timestamp of last modification |
| `m_img` | Mobile optimized image flag |
| `md5` | MD5 hash in base64 |
| `name` | Poster name |
| `no` | Post number |
| `now` | Formatted date and time |
| `omitted_images` | Number of omitted images |
| `omitted_posts` | Number of omitted posts |
| `page` | Page number |
| `replies` | Number of replies |
| `resto` | Reply to thread ID (0 for OP) |
| `semantic_url` | SEO-friendly URL slug |
| `since4pass` | Year 4chan pass purchased |
| `spoiler` | Spoiler flag |
| `sticky` | Sticky flag |
| `sub` | Subject |
| `tag` | Tag |
| `threads` |  |
| `tim` | Unix timestamp for image |
| `time` | Unix timestamp |
| `tn_h` | Thumbnail height |
| `tn_w` | Thumbnail width |
| `trip` | Tripcode |
| `unique_ips` | Number of unique poster IPs |
| `w` | Image width |

Operations: List.

API path: `/{board}/thread/{threadId}.json`



## Entities


### Archive

Create an instance: `archive = client.Archive`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ruby
# list returns an Array of Archive records (raises on error).
archives = client.Archive.list
```


### Board

Create an instance: `board = client.Board`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `String` | Board identifier |
| `board_flags` | `Hash` | Board flags configuration |
| `bump_limit` | `Integer` | Bump limit for threads |
| `cooldowns` | `Hash` | Cooldown periods for posting |
| `custom_spoilers` | `Integer` | Number of custom spoiler images |
| `image_limit` | `Integer` | Image limit for threads |
| `is_archived` | `Integer` | Archive enabled flag |
| `max_comment_chars` | `Integer` | Maximum comment length |
| `max_filesize` | `Integer` | Maximum filesize in bytes |
| `max_webm_duration` | `Integer` | Maximum WebM duration in seconds |
| `max_webm_filesize` | `Integer` | Maximum WebM filesize in bytes |
| `meta_description` | `String` | Board meta description |
| `pages` | `Integer` | Number of pages |
| `per_page` | `Integer` | Threads per page |
| `spoilers` | `Integer` | Custom spoilers enabled flag |
| `title` | `String` | Board title |
| `ws_board` | `Integer` | Worksafe board flag (1 for worksafe, 0 for NSFW) |

#### Example: List

```ruby
# list returns an Array of Board records (raises on error).
boards = client.Board.list
```


### Catalog

Create an instance: `catalog = client.Catalog`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `page` | `Integer` | Page number |
| `threads` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of Catalog records (raises on error).
catalogs = client.Catalog.list
```


### Index

Create an instance: `index = client.Index`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of Index records (raises on error).
indexs = client.Index.list
```


### Thread

Create an instance: `thread = client.Thread`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `Integer` | Archived flag |
| `archived_on` | `Integer` | Unix timestamp when archived |
| `bumplimit` | `Integer` | Bump limit reached flag |
| `capcode` | `String` | Capcode (mod, admin, etc.) |
| `closed` | `Integer` | Closed flag |
| `com` | `String` | Comment (HTML escaped) |
| `country` | `String` | Country code |
| `country_name` | `String` | Country name |
| `custom_spoiler` | `Integer` | Custom spoiler ID |
| `ext` | `String` | File extension |
| `filedeleted` | `Integer` | File deleted flag |
| `filename` | `String` | Original filename |
| `fsize` | `Integer` | File size in bytes |
| `h` | `Integer` | Image height |
| `id` | `String` | Poster ID |
| `imagelimit` | `Integer` | Image limit reached flag |
| `images` | `Integer` | Number of images |
| `last_modified` | `Integer` | Unix timestamp of last modification |
| `m_img` | `Integer` | Mobile optimized image flag |
| `md5` | `String` | MD5 hash in base64 |
| `name` | `String` | Poster name |
| `no` | `Integer` | Post number |
| `now` | `String` | Formatted date and time |
| `omitted_images` | `Integer` | Number of omitted images |
| `omitted_posts` | `Integer` | Number of omitted posts |
| `page` | `Integer` | Page number |
| `replies` | `Integer` | Number of replies |
| `resto` | `Integer` | Reply to thread ID (0 for OP) |
| `semantic_url` | `String` | SEO-friendly URL slug |
| `since4pass` | `Integer` | Year 4chan pass purchased |
| `spoiler` | `Integer` | Spoiler flag |
| `sticky` | `Integer` | Sticky flag |
| `sub` | `String` | Subject |
| `tag` | `String` | Tag |
| `threads` | `Array` |  |
| `tim` | `Integer` | Unix timestamp for image |
| `time` | `Integer` | Unix timestamp |
| `tn_h` | `Integer` | Thumbnail height |
| `tn_w` | `Integer` | Thumbnail width |
| `trip` | `String` | Tripcode |
| `unique_ips` | `Integer` | Number of unique poster IPs |
| `w` | `Integer` | Image width |

#### Example: List

```ruby
# list returns an Array of Thread records (raises on error).
threads = client.Thread.list
```


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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── N4chan_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`N4chan_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
catalog = client.Catalog
catalog.list()

# catalog.data_get now returns the catalog data from the last list
# catalog.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
