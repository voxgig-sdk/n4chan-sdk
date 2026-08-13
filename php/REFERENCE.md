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
| `board` | `string` | No |  |
| `board_flags` | `array` | No |  |
| `bump_limit` | `int` | No |  |
| `cooldowns` | `array` | No |  |
| `custom_spoilers` | `int` | No |  |
| `image_limit` | `int` | No |  |
| `is_archived` | `int` | No |  |
| `max_comment_chars` | `int` | No |  |
| `max_filesize` | `int` | No |  |
| `max_webm_duration` | `int` | No |  |
| `max_webm_filesize` | `int` | No |  |
| `meta_description` | `string` | No |  |
| `pages` | `int` | No |  |
| `per_page` | `int` | No |  |
| `spoilers` | `int` | No |  |
| `title` | `string` | No |  |
| `ws_board` | `int` | No |  |

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
| `page` | `int` | No |  |
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
| `archived` | `int` | No |  |
| `archived_on` | `int` | No |  |
| `bumplimit` | `int` | No |  |
| `capcode` | `string` | No |  |
| `closed` | `int` | No |  |
| `com` | `string` | No |  |
| `country` | `string` | No |  |
| `country_name` | `string` | No |  |
| `custom_spoiler` | `int` | No |  |
| `ext` | `string` | No |  |
| `filedeleted` | `int` | No |  |
| `filename` | `string` | No |  |
| `fsize` | `int` | No |  |
| `h` | `int` | No |  |
| `id` | `string` | No |  |
| `imagelimit` | `int` | No |  |
| `images` | `int` | No |  |
| `last_modified` | `int` | No |  |
| `m_img` | `int` | No |  |
| `md5` | `string` | No |  |
| `name` | `string` | No |  |
| `no` | `int` | Yes |  |
| `now` | `string` | Yes |  |
| `omitted_images` | `int` | No |  |
| `omitted_posts` | `int` | No |  |
| `page` | `int` | No |  |
| `replies` | `int` | No |  |
| `resto` | `int` | No |  |
| `semantic_url` | `string` | No |  |
| `since4pass` | `int` | No |  |
| `spoiler` | `int` | No |  |
| `sticky` | `int` | No |  |
| `sub` | `string` | No |  |
| `tag` | `string` | No |  |
| `threads` | `array` | No |  |
| `tim` | `int` | No |  |
| `time` | `int` | Yes |  |
| `tn_h` | `int` | No |  |
| `tn_w` | `int` | No |  |
| `trip` | `string` | No |  |
| `unique_ips` | `int` | No |  |
| `w` | `int` | No |  |

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

