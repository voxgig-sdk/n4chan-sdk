# N4chan Python SDK



The Python SDK for the N4chan API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Archive()` — each
carrying a small, uniform set of operations (`list`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/n4chan-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from n4chan_sdk import N4chanSDK

client = N4chanSDK()
```

### 2. List archive records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    archives = client.Archive().list({"board": "example"})
    for archive in archives:
        print(archive)
except Exception as err:
    print(f"list failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    catalogs = client.Catalog().list()
    print(catalogs)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = N4chanSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
catalog = client.Catalog().list()
# catalog contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = N4chanSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### N4chanSDK

```python
from n4chan_sdk import N4chanSDK

client = N4chanSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = N4chanSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### N4chanSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Archive` | `(data) -> ArchiveEntity` | Create an Archive entity instance. |
| `Board` | `(data) -> BoardEntity` | Create a Board entity instance. |
| `Catalog` | `(data) -> CatalogEntity` | Create a Catalog entity instance. |
| `Index` | `(data) -> IndexEntity` | Create an Index entity instance. |
| `Thread` | `(data) -> ThreadEntity` | Create a Thread entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `archive = client.Archive()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
archives = client.Archive().list({"board": "example"})
```


### Board

Create an instance: `board = client.Board()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `str` | Board identifier |
| `board_flags` | `dict` | Board flags configuration |
| `bump_limit` | `int` | Bump limit for threads |
| `cooldowns` | `dict` | Cooldown periods for posting |
| `custom_spoilers` | `int` | Number of custom spoiler images |
| `image_limit` | `int` | Image limit for threads |
| `is_archived` | `int` | Archive enabled flag |
| `max_comment_chars` | `int` | Maximum comment length |
| `max_filesize` | `int` | Maximum filesize in bytes |
| `max_webm_duration` | `int` | Maximum WebM duration in seconds |
| `max_webm_filesize` | `int` | Maximum WebM filesize in bytes |
| `meta_description` | `str` | Board meta description |
| `pages` | `int` | Number of pages |
| `per_page` | `int` | Threads per page |
| `spoilers` | `int` | Custom spoilers enabled flag |
| `title` | `str` | Board title |
| `ws_board` | `int` | Worksafe board flag (1 for worksafe, 0 for NSFW) |

#### Example: List

```python
boards = client.Board().list()
```


### Catalog

Create an instance: `catalog = client.Catalog()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `page` | `int` | Page number |
| `threads` | `list` |  |

#### Example: List

```python
catalogs = client.Catalog().list({"board": "example"})
```


### Index

Create an instance: `index = client.Index()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `posts` | `list` |  |

#### Example: List

```python
indexs = client.Index().list({"board": "example", "page": 1})
```


### Thread

Create an instance: `thread = client.Thread()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `int` | Archived flag |
| `archived_on` | `int` | Unix timestamp when archived |
| `bumplimit` | `int` | Bump limit reached flag |
| `capcode` | `str` | Capcode (mod, admin, etc.) |
| `closed` | `int` | Closed flag |
| `com` | `str` | Comment (HTML escaped) |
| `country` | `str` | Country code |
| `country_name` | `str` | Country name |
| `custom_spoiler` | `int` | Custom spoiler ID |
| `ext` | `str` | File extension |
| `filedeleted` | `int` | File deleted flag |
| `filename` | `str` | Original filename |
| `fsize` | `int` | File size in bytes |
| `h` | `int` | Image height |
| `id` | `str` | Poster ID |
| `imagelimit` | `int` | Image limit reached flag |
| `images` | `int` | Number of images |
| `last_modified` | `int` | Unix timestamp of last modification |
| `m_img` | `int` | Mobile optimized image flag |
| `md5` | `str` | MD5 hash in base64 |
| `name` | `str` | Poster name |
| `no` | `int` | Post number |
| `now` | `str` | Formatted date and time |
| `omitted_images` | `int` | Number of omitted images |
| `omitted_posts` | `int` | Number of omitted posts |
| `page` | `int` | Page number |
| `replies` | `int` | Number of replies |
| `resto` | `int` | Reply to thread ID (0 for OP) |
| `semantic_url` | `str` | SEO-friendly URL slug |
| `since4pass` | `int` | Year 4chan pass purchased |
| `spoiler` | `int` | Spoiler flag |
| `sticky` | `int` | Sticky flag |
| `sub` | `str` | Subject |
| `tag` | `str` | Tag |
| `threads` | `list` |  |
| `tim` | `int` | Unix timestamp for image |
| `time` | `int` | Unix timestamp |
| `tn_h` | `int` | Thumbnail height |
| `tn_w` | `int` | Thumbnail width |
| `trip` | `str` | Tripcode |
| `unique_ips` | `int` | Number of unique poster IPs |
| `w` | `int` | Image width |

#### Example: List

```python
threads = client.Thread().list({"board": "example"})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── n4chan_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`n4chan_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
catalog = client.Catalog()
catalog.list()

# catalog.data_get() now returns the catalog data from the last list
# catalog.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
