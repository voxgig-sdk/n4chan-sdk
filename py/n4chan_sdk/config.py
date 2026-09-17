# N4chan SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "N4chan",
            "slug": "n4chan",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://a.4cdn.org",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "archive": {},
                "board": {},
                "catalog": {},
                "index": {},
                "thread": {},
            },
        },
        "entity": {
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
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{board}/archive.json",
                "segments": [
                  {
                    "var": "board",
                  },
                  {
                    "lit": "archive.json",
                  },
                ],
                "select": {
                  "exist": [
                    "board",
                    "if_modified_since",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{board}",
                  "archive.json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "board": {
        "fields": [
          {
            "name": "board",
            "short": "Board identifier",
            "type": "`$STRING`",
          },
          {
            "name": "board_flags",
            "short": "Board flags configuration",
            "type": "`$OBJECT`",
          },
          {
            "name": "bump_limit",
            "short": "Bump limit for threads",
            "type": "`$INTEGER`",
          },
          {
            "name": "cooldowns",
            "short": "Cooldown periods for posting",
            "type": "`$OBJECT`",
          },
          {
            "name": "custom_spoilers",
            "short": "Number of custom spoiler images",
            "type": "`$INTEGER`",
          },
          {
            "name": "image_limit",
            "short": "Image limit for threads",
            "type": "`$INTEGER`",
          },
          {
            "name": "is_archived",
            "short": "Archive enabled flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_comment_chars",
            "short": "Maximum comment length",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_filesize",
            "short": "Maximum filesize in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_webm_duration",
            "short": "Maximum WebM duration in seconds",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_webm_filesize",
            "short": "Maximum WebM filesize in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "meta_description",
            "short": "Board meta description",
            "type": "`$STRING`",
          },
          {
            "name": "pages",
            "short": "Number of pages",
            "type": "`$INTEGER`",
          },
          {
            "name": "per_page",
            "short": "Threads per page",
            "type": "`$INTEGER`",
          },
          {
            "name": "spoilers",
            "short": "Custom spoilers enabled flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "title",
            "short": "Board title",
            "type": "`$STRING`",
          },
          {
            "name": "ws_board",
            "short": "Worksafe board flag (1 for worksafe, 0 for NSFW)",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/boards.json",
                "segments": [
                  {
                    "lit": "boards.json",
                  },
                ],
                "select": {
                  "exist": [
                    "if_modified_since",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.boards`",
                },
                "parts": [
                  "boards.json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "catalog": {
        "fields": [
          {
            "name": "page",
            "short": "Page number",
            "type": "`$INTEGER`",
          },
          {
            "name": "threads",
            "type": "`$ARRAY`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{board}/catalog.json",
                "segments": [
                  {
                    "var": "board",
                  },
                  {
                    "lit": "catalog.json",
                  },
                ],
                "select": {
                  "exist": [
                    "board",
                    "if_modified_since",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{board}",
                  "catalog.json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "index": {
        "fields": [
          {
            "name": "posts",
            "type": "`$ARRAY`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "page",
                      "orig": "page",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{board}/{page}.json",
                "segments": [
                  {
                    "var": "board",
                  },
                  {
                    "lit": "{page}.json",
                  },
                ],
                "select": {
                  "exist": [
                    "board",
                    "if_modified_since",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.threads`",
                },
                "parts": [
                  "{board}",
                  "{page}.json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "thread": {
        "fields": [
          {
            "name": "page",
            "short": "Page number",
            "type": "`$INTEGER`",
          },
          {
            "name": "threads",
            "type": "`$ARRAY`",
          },
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
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{board}/thread/{threadId}.json",
                "segments": [
                  {
                    "var": "board",
                  },
                  {
                    "lit": "thread",
                  },
                  {
                    "lit": "{threadId}.json",
                  },
                ],
                "select": {
                  "$action": "thread_id",
                  "exist": [
                    "board",
                    "if_modified_since",
                    "thread_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.posts`",
                },
                "parts": [
                  "{board}",
                  "thread",
                  "{threadId}.json",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{board}/threads.json",
                "segments": [
                  {
                    "var": "board",
                  },
                  {
                    "lit": "threads.json",
                  },
                ],
                "select": {
                  "exist": [
                    "board",
                    "if_modified_since",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{board}",
                  "threads.json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
