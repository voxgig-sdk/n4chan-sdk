"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'N4chan',
        slug: "n4chan",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://a.4cdn.org",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            archive: {},
            board: {},
            catalog: {},
            index: {},
            thread: {},
        }
    };
    entity = {
        "archive": {
            "fields": [],
            "name": "archive",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "kind": "header",
                                        "name": "if_modified_since",
                                        "orig": "if_modified_since",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board",
                                        "orig": "board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{board}/archive.json",
                            "segments": [
                                {
                                    "var": "board"
                                },
                                {
                                    "lit": "archive.json"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "board",
                                    "if_modified_since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "{board}",
                                "archive.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "board": {
            "fields": [
                {
                    "name": "board",
                    "short": "Board identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "board_flags",
                    "short": "Board flags configuration",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bump_limit",
                    "short": "Bump limit for threads",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "cooldowns",
                    "short": "Cooldown periods for posting",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "custom_spoilers",
                    "short": "Number of custom spoiler images",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "image_limit",
                    "short": "Image limit for threads",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "is_archived",
                    "short": "Archive enabled flag",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "max_comment_chars",
                    "short": "Maximum comment length",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "max_filesize",
                    "short": "Maximum filesize in bytes",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "max_webm_duration",
                    "short": "Maximum WebM duration in seconds",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "max_webm_filesize",
                    "short": "Maximum WebM filesize in bytes",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "meta_description",
                    "short": "Board meta description",
                    "type": "`$STRING`"
                },
                {
                    "name": "pages",
                    "short": "Number of pages",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "per_page",
                    "short": "Threads per page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "spoilers",
                    "short": "Custom spoilers enabled flag",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "title",
                    "short": "Board title",
                    "type": "`$STRING`"
                },
                {
                    "name": "ws_board",
                    "short": "Worksafe board flag (1 for worksafe, 0 for NSFW)",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "board",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "kind": "header",
                                        "name": "if_modified_since",
                                        "orig": "if_modified_since",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards.json",
                            "segments": [
                                {
                                    "lit": "boards.json"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "if_modified_since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.boards`"
                            },
                            "parts": [
                                "boards.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "catalog": {
            "fields": [
                {
                    "name": "page",
                    "short": "Page number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "threads",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "catalog",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "kind": "header",
                                        "name": "if_modified_since",
                                        "orig": "if_modified_since",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board",
                                        "orig": "board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{board}/catalog.json",
                            "segments": [
                                {
                                    "var": "board"
                                },
                                {
                                    "lit": "catalog.json"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "board",
                                    "if_modified_since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "{board}",
                                "catalog.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "index": {
            "fields": [
                {
                    "name": "posts",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "index",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "kind": "header",
                                        "name": "if_modified_since",
                                        "orig": "if_modified_since",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board",
                                        "orig": "board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{board}/{page}.json",
                            "segments": [
                                {
                                    "var": "board"
                                },
                                {
                                    "lit": "{page}.json"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "board",
                                    "if_modified_since",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.threads`"
                            },
                            "parts": [
                                "{board}",
                                "{page}.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "thread": {
            "fields": [
                {
                    "name": "page",
                    "short": "Page number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "threads",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "thread",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "kind": "header",
                                        "name": "if_modified_since",
                                        "orig": "if_modified_since",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board",
                                        "orig": "board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "thread_id",
                                        "orig": "thread_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{board}/thread/{threadId}.json",
                            "segments": [
                                {
                                    "var": "board"
                                },
                                {
                                    "lit": "thread"
                                },
                                {
                                    "lit": "{threadId}.json"
                                }
                            ],
                            "select": {
                                "$action": "thread_id",
                                "exist": [
                                    "board",
                                    "if_modified_since",
                                    "thread_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.posts`"
                            },
                            "parts": [
                                "{board}",
                                "thread",
                                "{threadId}.json"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "kind": "header",
                                        "name": "if_modified_since",
                                        "orig": "if_modified_since",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board",
                                        "orig": "board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{board}/threads.json",
                            "segments": [
                                {
                                    "var": "board"
                                },
                                {
                                    "lit": "threads.json"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "board",
                                    "if_modified_since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "{board}",
                                "threads.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map