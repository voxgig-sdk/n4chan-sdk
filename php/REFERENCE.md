# N4chan PHP SDK Reference

Complete API reference for the N4chan PHP SDK.


## N4chanSDK

### Constructor

```php
require_once __DIR__ . '/n4chan_sdk.php';

$client = new N4chanSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `N4chanSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = N4chanSDK::test();
```


### Instance Methods

#### `Archive($data = null)`

Create a new `ArchiveEntity` instance. Pass `null` for no initial data.

#### `Board($data = null)`

Create a new `BoardEntity` instance. Pass `null` for no initial data.

#### `Catalog($data = null)`

Create a new `CatalogEntity` instance. Pass `null` for no initial data.

#### `Index($data = null)`

Create a new `IndexEntity` instance. Pass `null` for no initial data.

#### `Thread($data = null)`

Create a new `ThreadEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): N4chanUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ArchiveEntity

```php
$archive = $client->Archive();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Archive()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArchiveEntity`

Create a new `ArchiveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BoardEntity

```php
$board = $client->Board();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `string` | No | Board identifier |
| `board_flags` | `array` | No | Board flags configuration |
| `bump_limit` | `int` | No | Bump limit for threads |
| `cooldowns` | `array` | No | Cooldown periods for posting |
| `custom_spoilers` | `int` | No | Number of custom spoiler images |
| `image_limit` | `int` | No | Image limit for threads |
| `is_archived` | `int` | No | Archive enabled flag |
| `max_comment_chars` | `int` | No | Maximum comment length |
| `max_filesize` | `int` | No | Maximum filesize in bytes |
| `max_webm_duration` | `int` | No | Maximum WebM duration in seconds |
| `max_webm_filesize` | `int` | No | Maximum WebM filesize in bytes |
| `meta_description` | `string` | No | Board meta description |
| `pages` | `int` | No | Number of pages |
| `per_page` | `int` | No | Threads per page |
| `spoilers` | `int` | No | Custom spoilers enabled flag |
| `title` | `string` | No | Board title |
| `ws_board` | `int` | No | Worksafe board flag (1 for worksafe, 0 for NSFW) |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Board()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BoardEntity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CatalogEntity

```php
$catalog = $client->Catalog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | `int` | No | Page number |
| `threads` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Catalog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogEntity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IndexEntity

```php
$index = $client->Index();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posts` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Index()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IndexEntity`

Create a new `IndexEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ThreadEntity

```php
$thread = $client->Thread();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `int` | No | Archived flag |
| `archived_on` | `int` | No | Unix timestamp when archived |
| `bumplimit` | `int` | No | Bump limit reached flag |
| `capcode` | `string` | No | Capcode (mod, admin, etc.) |
| `closed` | `int` | No | Closed flag |
| `com` | `string` | No | Comment (HTML escaped) |
| `country` | `string` | No | Country code |
| `country_name` | `string` | No | Country name |
| `custom_spoiler` | `int` | No | Custom spoiler ID |
| `ext` | `string` | No | File extension |
| `filedeleted` | `int` | No | File deleted flag |
| `filename` | `string` | No | Original filename |
| `fsize` | `int` | No | File size in bytes |
| `h` | `int` | No | Image height |
| `id` | `string` | No | Poster ID |
| `imagelimit` | `int` | No | Image limit reached flag |
| `images` | `int` | No | Number of images |
| `last_modified` | `int` | No | Unix timestamp of last modification |
| `m_img` | `int` | No | Mobile optimized image flag |
| `md5` | `string` | No | MD5 hash in base64 |
| `name` | `string` | No | Poster name |
| `no` | `int` | Yes | Post number |
| `now` | `string` | Yes | Formatted date and time |
| `omitted_images` | `int` | No | Number of omitted images |
| `omitted_posts` | `int` | No | Number of omitted posts |
| `page` | `int` | No | Page number |
| `replies` | `int` | No | Number of replies |
| `resto` | `int` | No | Reply to thread ID (0 for OP) |
| `semantic_url` | `string` | No | SEO-friendly URL slug |
| `since4pass` | `int` | No | Year 4chan pass purchased |
| `spoiler` | `int` | No | Spoiler flag |
| `sticky` | `int` | No | Sticky flag |
| `sub` | `string` | No | Subject |
| `tag` | `string` | No | Tag |
| `threads` | `array` | No |  |
| `tim` | `int` | No | Unix timestamp for image |
| `time` | `int` | Yes | Unix timestamp |
| `tn_h` | `int` | No | Thumbnail height |
| `tn_w` | `int` | No | Thumbnail width |
| `trip` | `string` | No | Tripcode |
| `unique_ips` | `int` | No | Number of unique poster IPs |
| `w` | `int` | No | Image width |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Thread()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ThreadEntity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new N4chanSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

