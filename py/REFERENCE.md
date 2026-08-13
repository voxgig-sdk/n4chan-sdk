# N4chan Python SDK Reference

Complete API reference for the N4chan Python SDK.


## N4chanSDK

### Constructor

```python
from n4chan_sdk import N4chanSDK

client = N4chanSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `N4chanSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = N4chanSDK.test()
```


### Instance Methods

#### `Archive(data=None)`

Create a new `ArchiveEntity` instance. Pass `None` for no initial data.

#### `Board(data=None)`

Create a new `BoardEntity` instance. Pass `None` for no initial data.

#### `Catalog(data=None)`

Create a new `CatalogEntity` instance. Pass `None` for no initial data.

#### `Index(data=None)`

Create a new `IndexEntity` instance. Pass `None` for no initial data.

#### `Thread(data=None)`

Create a new `ThreadEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ArchiveEntity

```python
archive = client.Archive()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Archive().list({"board": "example"})
for archive in results:
    print(archive)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArchiveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BoardEntity

```python
board = client.Board()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `str` | No |  |
| `board_flags` | `dict` | No |  |
| `bump_limit` | `int` | No |  |
| `cooldowns` | `dict` | No |  |
| `custom_spoilers` | `int` | No |  |
| `image_limit` | `int` | No |  |
| `is_archived` | `int` | No |  |
| `max_comment_chars` | `int` | No |  |
| `max_filesize` | `int` | No |  |
| `max_webm_duration` | `int` | No |  |
| `max_webm_filesize` | `int` | No |  |
| `meta_description` | `str` | No |  |
| `pages` | `int` | No |  |
| `per_page` | `int` | No |  |
| `spoilers` | `int` | No |  |
| `title` | `str` | No |  |
| `ws_board` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Board().list()
for board in results:
    print(board)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CatalogEntity

```python
catalog = client.Catalog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | `int` | No |  |
| `threads` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Catalog().list({"board": "example"})
for catalog in results:
    print(catalog)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IndexEntity

```python
index = client.Index()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Index().list({"board": "example", "page": 1})
for index in results:
    print(index)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndexEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ThreadEntity

```python
thread = client.Thread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `int` | No |  |
| `archived_on` | `int` | No |  |
| `bumplimit` | `int` | No |  |
| `capcode` | `str` | No |  |
| `closed` | `int` | No |  |
| `com` | `str` | No |  |
| `country` | `str` | No |  |
| `country_name` | `str` | No |  |
| `custom_spoiler` | `int` | No |  |
| `ext` | `str` | No |  |
| `filedeleted` | `int` | No |  |
| `filename` | `str` | No |  |
| `fsize` | `int` | No |  |
| `h` | `int` | No |  |
| `id` | `str` | No |  |
| `imagelimit` | `int` | No |  |
| `images` | `int` | No |  |
| `last_modified` | `int` | No |  |
| `m_img` | `int` | No |  |
| `md5` | `str` | No |  |
| `name` | `str` | No |  |
| `no` | `int` | Yes |  |
| `now` | `str` | Yes |  |
| `omitted_images` | `int` | No |  |
| `omitted_posts` | `int` | No |  |
| `page` | `int` | No |  |
| `replies` | `int` | No |  |
| `resto` | `int` | No |  |
| `semantic_url` | `str` | No |  |
| `since4pass` | `int` | No |  |
| `spoiler` | `int` | No |  |
| `sticky` | `int` | No |  |
| `sub` | `str` | No |  |
| `tag` | `str` | No |  |
| `threads` | `list` | No |  |
| `tim` | `int` | No |  |
| `time` | `int` | Yes |  |
| `tn_h` | `int` | No |  |
| `tn_w` | `int` | No |  |
| `trip` | `str` | No |  |
| `unique_ips` | `int` | No |  |
| `w` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Thread().list({"board": "example"})
for thread in results:
    print(thread)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = N4chanSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

