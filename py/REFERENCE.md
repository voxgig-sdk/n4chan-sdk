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
| `board` | `str` | No | Board identifier |
| `board_flags` | `dict` | No | Board flags configuration |
| `bump_limit` | `int` | No | Bump limit for threads |
| `cooldowns` | `dict` | No | Cooldown periods for posting |
| `custom_spoilers` | `int` | No | Number of custom spoiler images |
| `image_limit` | `int` | No | Image limit for threads |
| `is_archived` | `int` | No | Archive enabled flag |
| `max_comment_chars` | `int` | No | Maximum comment length |
| `max_filesize` | `int` | No | Maximum filesize in bytes |
| `max_webm_duration` | `int` | No | Maximum WebM duration in seconds |
| `max_webm_filesize` | `int` | No | Maximum WebM filesize in bytes |
| `meta_description` | `str` | No | Board meta description |
| `pages` | `int` | No | Number of pages |
| `per_page` | `int` | No | Threads per page |
| `spoilers` | `int` | No | Custom spoilers enabled flag |
| `title` | `str` | No | Board title |
| `ws_board` | `int` | No | Worksafe board flag (1 for worksafe, 0 for NSFW) |

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
| `page` | `int` | No | Page number |
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
| `archived` | `int` | No | Archived flag |
| `archived_on` | `int` | No | Unix timestamp when archived |
| `bumplimit` | `int` | No | Bump limit reached flag |
| `capcode` | `str` | No | Capcode (mod, admin, etc.) |
| `closed` | `int` | No | Closed flag |
| `com` | `str` | No | Comment (HTML escaped) |
| `country` | `str` | No | Country code |
| `country_name` | `str` | No | Country name |
| `custom_spoiler` | `int` | No | Custom spoiler ID |
| `ext` | `str` | No | File extension |
| `filedeleted` | `int` | No | File deleted flag |
| `filename` | `str` | No | Original filename |
| `fsize` | `int` | No | File size in bytes |
| `h` | `int` | No | Image height |
| `id` | `str` | No | Poster ID |
| `imagelimit` | `int` | No | Image limit reached flag |
| `images` | `int` | No | Number of images |
| `last_modified` | `int` | No | Unix timestamp of last modification |
| `m_img` | `int` | No | Mobile optimized image flag |
| `md5` | `str` | No | MD5 hash in base64 |
| `name` | `str` | No | Poster name |
| `no` | `int` | Yes | Post number |
| `now` | `str` | Yes | Formatted date and time |
| `omitted_images` | `int` | No | Number of omitted images |
| `omitted_posts` | `int` | No | Number of omitted posts |
| `page` | `int` | No | Page number |
| `replies` | `int` | No | Number of replies |
| `resto` | `int` | No | Reply to thread ID (0 for OP) |
| `semantic_url` | `str` | No | SEO-friendly URL slug |
| `since4pass` | `int` | No | Year 4chan pass purchased |
| `spoiler` | `int` | No | Spoiler flag |
| `sticky` | `int` | No | Sticky flag |
| `sub` | `str` | No | Subject |
| `tag` | `str` | No | Tag |
| `threads` | `list` | No |  |
| `tim` | `int` | No | Unix timestamp for image |
| `time` | `int` | Yes | Unix timestamp |
| `tn_h` | `int` | No | Thumbnail height |
| `tn_w` | `int` | No | Thumbnail width |
| `trip` | `str` | No | Tripcode |
| `unique_ips` | `int` | No | Number of unique poster IPs |
| `w` | `int` | No | Image width |

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

