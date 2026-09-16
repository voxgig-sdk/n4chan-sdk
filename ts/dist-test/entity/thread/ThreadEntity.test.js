"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ThreadEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when N4CHAN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('N4CHAN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.N4chanSDK.test();
        const ent = testsdk.Thread();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.N4CHAN_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'thread.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archived", "req": false, "short": "Archived flag", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "archived_on", "req": false, "short": "Unix timestamp when archived", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "bumplimit", "req": false, "short": "Bump limit reached flag", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "capcode", "req": false, "short": "Capcode (mod, admin, etc.)", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "closed", "req": false, "short": "Closed flag", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "com", "req": false, "short": "Comment (HTML escaped)", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "country", "req": false, "short": "Country code", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "country_name", "req": false, "short": "Country name", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "custom_spoiler", "req": false, "short": "Custom spoiler ID", "type": "`$INTEGER`", "index$": 8 }, { "active": true, "name": "ext", "req": false, "short": "File extension", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "filedeleted", "req": false, "short": "File deleted flag", "type": "`$INTEGER`", "index$": 10 }, { "active": true, "name": "filename", "req": false, "short": "Original filename", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "fsize", "req": false, "short": "File size in bytes", "type": "`$INTEGER`", "index$": 12 }, { "active": true, "name": "h", "req": false, "short": "Image height", "type": "`$INTEGER`", "index$": 13 }, { "active": true, "name": "id", "req": false, "short": "Poster ID", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "imagelimit", "req": false, "short": "Image limit reached flag", "type": "`$INTEGER`", "index$": 15 }, { "active": true, "name": "images", "req": false, "short": "Number of images", "type": "`$INTEGER`", "index$": 16 }, { "active": true, "name": "last_modified", "req": false, "short": "Unix timestamp of last modification", "type": "`$INTEGER`", "index$": 17 }, { "active": true, "name": "m_img", "req": false, "short": "Mobile optimized image flag", "type": "`$INTEGER`", "index$": 18 }, { "active": true, "name": "md5", "req": false, "short": "MD5 hash in base64", "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "name", "req": false, "short": "Poster name", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "no", "req": true, "short": "Post number", "type": "`$INTEGER`", "index$": 21 }, { "active": true, "name": "now", "req": true, "short": "Formatted date and time", "type": "`$STRING`", "index$": 22 }, { "active": true, "name": "omitted_images", "req": false, "short": "Number of omitted images", "type": "`$INTEGER`", "index$": 23 }, { "active": true, "name": "omitted_posts", "req": false, "short": "Number of omitted posts", "type": "`$INTEGER`", "index$": 24 }, { "active": true, "name": "page", "req": false, "short": "Page number", "type": "`$INTEGER`", "index$": 25 }, { "active": true, "name": "replies", "req": false, "short": "Number of replies", "type": "`$INTEGER`", "index$": 26 }, { "active": true, "name": "resto", "req": false, "short": "Reply to thread ID (0 for OP)", "type": "`$INTEGER`", "index$": 27 }, { "active": true, "name": "semantic_url", "req": false, "short": "SEO-friendly URL slug", "type": "`$STRING`", "index$": 28 }, { "active": true, "name": "since4pass", "req": false, "short": "Year 4chan pass purchased", "type": "`$INTEGER`", "index$": 29 }, { "active": true, "name": "spoiler", "req": false, "short": "Spoiler flag", "type": "`$INTEGER`", "index$": 30 }, { "active": true, "name": "sticky", "req": false, "short": "Sticky flag", "type": "`$INTEGER`", "index$": 31 }, { "active": true, "name": "sub", "req": false, "short": "Subject", "type": "`$STRING`", "index$": 32 }, { "active": true, "name": "tag", "req": false, "short": "Tag", "type": "`$STRING`", "index$": 33 }, { "active": true, "name": "threads", "req": false, "type": "`$ARRAY`", "index$": 34 }, { "active": true, "name": "tim", "req": false, "short": "Unix timestamp for image", "type": "`$INTEGER`", "index$": 35 }, { "active": true, "name": "time", "req": true, "short": "Unix timestamp", "type": "`$INTEGER`", "index$": 36 }, { "active": true, "name": "tn_h", "req": false, "short": "Thumbnail height", "type": "`$INTEGER`", "index$": 37 }, { "active": true, "name": "tn_w", "req": false, "short": "Thumbnail width", "type": "`$INTEGER`", "index$": 38 }, { "active": true, "name": "trip", "req": false, "short": "Tripcode", "type": "`$STRING`", "index$": 39 }, { "active": true, "name": "unique_ips", "req": false, "short": "Number of unique poster IPs", "type": "`$INTEGER`", "index$": 40 }, { "active": true, "name": "w", "req": false, "short": "Image width", "type": "`$INTEGER`", "index$": 41 }], "id": { "field": "id", "name": "id" }, "name": "thread", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "if_modified_since", "orig": "if_modified_since", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "board", "orig": "board", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "param", "name": "thread_id", "orig": "thread_id", "reqd": true, "type": "`$INTEGER`" }] }, "contract": { "id": "GET /{board}/thread/{threadId}.json", "json": "{\"operationId\":\"getThread\",\"parameters\":[{\"description\":\"Board identifier (e.g., 'g' for technology, 'a' for anime)\",\"in\":\"path\",\"name\":\"board\",\"required\":true,\"schema\":{\"pattern\":\"^[a-z0-9]+$\",\"type\":\"string\"}},{\"description\":\"Thread ID (post number of the opening post)\",\"in\":\"path\",\"name\":\"threadId\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"HTTP date for conditional requests. Returns 304 if content hasn't been modified.\",\"in\":\"header\",\"name\":\"If-Modified-Since\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"posts\":{\"items\":{\"properties\":{\"archived\":{\"description\":\"Archived flag\",\"type\":\"integer\"},\"archived_on\":{\"description\":\"Unix timestamp when archived\",\"type\":\"integer\"},\"bumplimit\":{\"description\":\"Bump limit reached flag\",\"type\":\"integer\"},\"capcode\":{\"description\":\"Capcode (mod, admin, etc.)\",\"type\":\"string\"},\"closed\":{\"description\":\"Closed flag\",\"type\":\"integer\"},\"com\":{\"description\":\"Comment (HTML escaped)\",\"type\":\"string\"},\"country\":{\"description\":\"Country code\",\"type\":\"string\"},\"country_name\":{\"description\":\"Country name\",\"type\":\"string\"},\"custom_spoiler\":{\"description\":\"Custom spoiler ID\",\"type\":\"integer\"},\"ext\":{\"description\":\"File extension\",\"type\":\"string\"},\"filedeleted\":{\"description\":\"File deleted flag\",\"type\":\"integer\"},\"filename\":{\"description\":\"Original filename\",\"type\":\"string\"},\"fsize\":{\"description\":\"File size in bytes\",\"type\":\"integer\"},\"h\":{\"description\":\"Image height\",\"type\":\"integer\"},\"id\":{\"description\":\"Poster ID\",\"type\":\"string\"},\"imagelimit\":{\"description\":\"Image limit reached flag\",\"type\":\"integer\"},\"images\":{\"description\":\"Number of images\",\"type\":\"integer\"},\"last_modified\":{\"description\":\"Unix timestamp of last modification\",\"type\":\"integer\"},\"m_img\":{\"description\":\"Mobile optimized image flag\",\"type\":\"integer\"},\"md5\":{\"description\":\"MD5 hash in base64\",\"type\":\"string\"},\"name\":{\"description\":\"Poster name\",\"type\":\"string\"},\"no\":{\"description\":\"Post number\",\"type\":\"integer\"},\"now\":{\"description\":\"Formatted date and time\",\"type\":\"string\"},\"omitted_images\":{\"description\":\"Number of omitted images\",\"type\":\"integer\"},\"omitted_posts\":{\"description\":\"Number of omitted posts\",\"type\":\"integer\"},\"replies\":{\"description\":\"Number of replies\",\"type\":\"integer\"},\"resto\":{\"description\":\"Reply to thread ID (0 for OP)\",\"type\":\"integer\"},\"semantic_url\":{\"description\":\"SEO-friendly URL slug\",\"type\":\"string\"},\"since4pass\":{\"description\":\"Year 4chan pass purchased\",\"type\":\"integer\"},\"spoiler\":{\"description\":\"Spoiler flag\",\"type\":\"integer\"},\"sticky\":{\"description\":\"Sticky flag\",\"type\":\"integer\"},\"sub\":{\"description\":\"Subject\",\"type\":\"string\"},\"tag\":{\"description\":\"Tag\",\"type\":\"string\"},\"tim\":{\"description\":\"Unix timestamp for image\",\"type\":\"integer\"},\"time\":{\"description\":\"Unix timestamp\",\"type\":\"integer\"},\"tn_h\":{\"description\":\"Thumbnail height\",\"type\":\"integer\"},\"tn_w\":{\"description\":\"Thumbnail width\",\"type\":\"integer\"},\"trip\":{\"description\":\"Tripcode\",\"type\":\"string\"},\"unique_ips\":{\"description\":\"Number of unique poster IPs\",\"type\":\"integer\"},\"w\":{\"description\":\"Image width\",\"type\":\"integer\"}},\"required\":[\"no\",\"time\",\"now\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with thread data\"},\"304\":{\"description\":\"Not Modified - Content has not changed since last request\"},\"404\":{\"description\":\"Thread not found or has been deleted\"},\"429\":{\"description\":\"Too Many Requests - Rate limit exceeded\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/{board}/thread/{threadId}.json", "segments": [{ "var": "board" }, { "lit": "thread" }, { "lit": "{threadId}.json" }], "select": { "$action": "thread_id", "exist": ["board", "if_modified_since", "thread_id"] }, "transform": { "req": "`reqdata`", "res": "`body.posts`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "if_modified_since", "orig": "if_modified_since", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "board", "orig": "board", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /{board}/threads.json", "json": "{\"operationId\":\"getThreadList\",\"parameters\":[{\"description\":\"Board identifier (e.g., 'g' for technology, 'a' for anime)\",\"in\":\"path\",\"name\":\"board\",\"required\":true,\"schema\":{\"pattern\":\"^[a-z0-9]+$\",\"type\":\"string\"}},{\"description\":\"HTTP date for conditional requests. Returns 304 if content hasn't been modified.\",\"in\":\"header\",\"name\":\"If-Modified-Since\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"page\":{\"description\":\"Page number\",\"type\":\"integer\"},\"threads\":{\"items\":{\"properties\":{\"last_modified\":{\"description\":\"Unix timestamp of last modification\",\"type\":\"integer\"},\"no\":{\"description\":\"Thread ID (OP post number)\",\"type\":\"integer\"},\"replies\":{\"description\":\"Number of replies\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with thread list\"},\"304\":{\"description\":\"Not Modified - Content has not changed since last request\"},\"404\":{\"description\":\"Board not found\"},\"429\":{\"description\":\"Too Many Requests - Rate limit exceeded\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/{board}/threads.json", "segments": [{ "var": "board" }, { "lit": "threads.json" }], "select": { "exist": ["board", "if_modified_since"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "thread", "name__orig": "thread", "Name": "Thread", "name_": "thread", "name-": "thread", "NAME": "THREAD", "index$": 4 }, { "active": true, "entity": "thread", "key$": "BasicThreadFlow", "kind": "basic", "name": "BasicThreadFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "board": "board01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "thread_ref01" } }], "index$": 0 }] }, 'Thread');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let thread_ref01_data = Object.values(setup.data.existing.thread)[0];
        // LIST
        const thread_ref01_ent = client.Thread();
        const thread_ref01_match = {};
        thread_ref01_match['board'] = setup.idmap['board01'];
        const thread_ref01_list = (await thread_ref01_ent.list(thread_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/thread/ThreadTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.N4chanSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['thread01', 'thread02', 'thread03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'N4CHAN_TEST_THREAD_ENTID': idmap,
        'N4CHAN_TEST_LIVE': 'FALSE',
        'N4CHAN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['N4CHAN_TEST_THREAD_ENTID'];
    const live = 'TRUE' === env.N4CHAN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['N4CHAN_TEST_THREAD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.N4chanSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.N4CHAN_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ThreadEntity.test.js.map