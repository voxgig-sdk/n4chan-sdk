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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Archive()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ArchiveEntity`

Create a new `ArchiveEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## BoardEntity

```php
$board = $client->Board();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Board()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BoardEntity`

Create a new `BoardEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CatalogEntity

```php
$catalog = $client->Catalog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | ``$INTEGER`` | No |  |
| `thread` | ``$ARRAY`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Catalog()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CatalogEntity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## IndexEntity

```php
$index = $client->Index();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `post` | ``$ARRAY`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Index()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): IndexEntity`

Create a new `IndexEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ThreadEntity

```php
$thread = $client->Thread();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Thread()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ThreadEntity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `getName(): string`

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

