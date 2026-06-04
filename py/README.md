# N4chan Python SDK

The Python SDK for the N4chan API. Provides an entity-oriented interface following Pythonic conventions.


## Install
```bash
pip install n4chan-sdk
```

Or install from source:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from n4chan_sdk import N4chanSDK

client = N4chanSDK({})
```

### 2. List archives

```python
result, err = client.Archive(None).list(None, None)
if err:
    raise Exception(err)

if isinstance(result, list):
    for item in result:
        d = item.data_get()
        print(d["id"], d["name"])
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
if err:
    raise Exception(err)

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
```

### Prepare a request without sending it

```python
fetchdef, err = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})
if err:
    raise Exception(err)

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = N4chanSDK.test(None, None)

result, err = client.N4chan(None).load(
    {"id": "test01"}, None
)
# result contains mock response data
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
| `prepare` | `(fetchargs) -> (dict, err)` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> (dict, err)` | Build and send an HTTP request. |
| `Archive` | `(data) -> ArchiveEntity` | Create a Archive entity instance. |
| `Board` | `(data) -> BoardEntity` | Create a Board entity instance. |
| `Catalog` | `(data) -> CatalogEntity` | Create a Catalog entity instance. |
| `Index` | `(data) -> IndexEntity` | Create a Index entity instance. |
| `Thread` | `(data) -> ThreadEntity` | Create a Thread entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> (any, err)` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> (any, err)` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> (any, err)` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> (any, err)` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> (any, err)` | Remove an entity. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return `(any, err)`. The first value is a
`dict` with these keys:

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
| `board` |  |
| `board_flag` |  |
| `bump_limit` |  |
| `cooldown` |  |
| `custom_spoiler` |  |
| `image_limit` |  |
| `is_archived` |  |
| `max_comment_char` |  |
| `max_filesize` |  |
| `max_webm_duration` |  |
| `max_webm_filesize` |  |
| `meta_description` |  |
| `page` |  |
| `per_page` |  |
| `spoiler` |  |
| `title` |  |
| `ws_board` |  |

Operations: List.

API path: `/boards.json`

#### Catalog

| Field | Description |
| --- | --- |
| `page` |  |
| `thread` |  |

Operations: List.

API path: `/{board}/catalog.json`

#### Index

| Field | Description |
| --- | --- |
| `post` |  |

Operations: List.

API path: `/{board}/{page}.json`

#### Thread

| Field | Description |
| --- | --- |
| `archived` |  |
| `archived_on` |  |
| `bumplimit` |  |
| `capcode` |  |
| `closed` |  |
| `com` |  |
| `country` |  |
| `country_name` |  |
| `custom_spoiler` |  |
| `ext` |  |
| `filedeleted` |  |
| `filename` |  |
| `fsize` |  |
| `h` |  |
| `id` |  |
| `image` |  |
| `imagelimit` |  |
| `last_modified` |  |
| `m_img` |  |
| `md5` |  |
| `name` |  |
| `no` |  |
| `now` |  |
| `omitted_image` |  |
| `omitted_post` |  |
| `page` |  |
| `reply` |  |
| `resto` |  |
| `semantic_url` |  |
| `since4pass` |  |
| `spoiler` |  |
| `sticky` |  |
| `sub` |  |
| `tag` |  |
| `thread` |  |
| `tim` |  |
| `time` |  |
| `tn_h` |  |
| `tn_w` |  |
| `trip` |  |
| `unique_ip` |  |
| `w` |  |

Operations: List.

API path: `/{board}/thread/{threadId}.json`



## Entities


### Archive

Create an instance: `const archive = client.Archive()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const archives = await client.Archive().list()
```


### Board

Create an instance: `const board = client.Board()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```ts
const boards = await client.Board().list()
```


### Catalog

Create an instance: `const catalog = client.Catalog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `page` | ``$INTEGER`` |  |
| `thread` | ``$ARRAY`` |  |

#### Example: List

```ts
const catalogs = await client.Catalog().list()
```


### Index

Create an instance: `const index = client.Index()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `post` | ``$ARRAY`` |  |

#### Example: List

```ts
const indexs = await client.Index().list()
```


### Thread

Create an instance: `const thread = client.Thread()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```ts
const threads = await client.Thread().list()
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
error is returned to the caller as the second element in the return tuple.

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
moon = client.Moon()
moon.load({"planet_id": "earth", "id": "luna"})

# moon.data_get() now returns the loaded moon data
# moon.match_get() returns the last match criteria
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
