# N4chan SDK

Read-only JSON access to 4chan boards, threads, catalogs, and archives

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About 4chan API

The [4chan JSON API](https://github.com/4chan/4chan-API) is a public, read-only interface to posts, threads, and boards on [4chan.org](https://www.4chan.org) and 4channel.org, served from `https://a.4cdn.org`. It was launched in September 2012 and is maintained by 4chan.

What you get from the API:

- Board listings and per-board metadata via `/boards.json`
- Catalog views of a board's active threads via `/{board}/catalog.json`
- Full thread contents (OP plus replies) via `/{board}/thread/{threadid}.json`
- Board index pages and thread lists via `/{board}/threads.json`
- Archived (closed) thread IDs via `/{board}/archive.json`
- Static media paths for spoilers, country flags, capcodes, and user-uploaded files

The service is anonymous (no API key), supports both HTTP and HTTPS, and enables CORS for `boards.4chan.org` and `boards.4channel.org` origins. Clients are expected to keep within one request per second and use conditional requests when polling.

## Try it

**TypeScript**
```bash
npm install n4chan
```

**Python**
```bash
pip install n4chan-sdk
```

**PHP**
```bash
composer require voxgig/n4chan-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/n4chan-sdk/go
```

**Ruby**
```bash
gem install n4chan-sdk
```

**Lua**
```bash
luarocks install n4chan-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { N4chanSDK } from 'n4chan'

const client = new N4chanSDK({})

// List all archives
const archives = await client.Archive().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o n4chan-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "n4chan": {
      "command": "/abs/path/to/n4chan-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Archive** | List of archived (closed) thread IDs for a board, served from `/{board}/archive.json`. | `/{board}/archive.json` |
| **Board** | Catalogue of all boards with their attributes and configuration, served from `/boards.json`. | `/boards.json` |
| **Catalog** | Native catalog representation of a board's active threads grouped by page, served from `/{board}/catalog.json`. | `/{board}/catalog.json` |
| **Index** | Board index/main page listing threads with their preview posts, served from `/{board}/{page}.json`. | `/{board}/{page}.json` |
| **Thread** | Full contents of a single thread (OP plus all replies), served from `/{board}/thread/{threadid}.json`; bulk thread metadata is at `/{board}/threads.json`. | `/{board}/thread/{threadId}.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from n4chan_sdk import N4chanSDK

client = N4chanSDK({})

# List all archives
archives, err = client.Archive(None).list(None, None)
```

### PHP

```php
<?php
require_once 'n4chan_sdk.php';

$client = new N4chanSDK([]);

// List all archives
[$archives, $err] = $client->Archive(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/n4chan-sdk/go"

client := sdk.NewN4chanSDK(map[string]any{})

// List all archives
archives, err := client.Archive(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "N4chan_sdk"

client = N4chanSDK.new({})

# List all archives
archives, err = client.Archive(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("n4chan_sdk")

local client = sdk.new({})

-- List all archives
local archives, err = client:Archive(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = N4chanSDK.test()
const result = await client.Archive().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = N4chanSDK.test(None, None)
result, err = client.Archive(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = N4chanSDK::test(null, null);
[$result, $err] = $client->Archive(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Archive(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = N4chanSDK.test(nil, nil)
result, err = client.Archive(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Archive(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the 4chan API

- Upstream: [https://a.4cdn.org](https://a.4cdn.org)
- API docs: [https://github.com/4chan/4chan-API](https://github.com/4chan/4chan-API)

- No authentication required; the API is publicly accessible and read-only.
- Applications must disclose 4chan as the data source and link back to it.
- The name "4chan" may not be used in application titles or branding, and apps must not claim official status.
- Do not exceed one request per second; thread polling should use a 10-second minimum interval and respect the `If-Modified-Since` header.

---

Generated from the 4chan API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
