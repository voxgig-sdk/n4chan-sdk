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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Archive().list({})
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Board().list({})
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
| `page` | ``$INTEGER`` | No |  |
| `thread` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Catalog().list({})
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
| `post` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Index().list({})
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Thread().list({})
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

