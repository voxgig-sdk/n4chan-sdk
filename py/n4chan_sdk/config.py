# N4chan SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
                "parts": [
                  "{board}",
                  "archive.json",
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
            "type": "`$STRING`",
          },
          {
            "name": "board_flags",
            "type": "`$OBJECT`",
          },
          {
            "name": "bump_limit",
            "type": "`$INTEGER`",
          },
          {
            "name": "cooldowns",
            "type": "`$OBJECT`",
          },
          {
            "name": "custom_spoilers",
            "type": "`$INTEGER`",
          },
          {
            "name": "image_limit",
            "type": "`$INTEGER`",
          },
          {
            "name": "is_archived",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_comment_chars",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_filesize",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_webm_duration",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_webm_filesize",
            "type": "`$INTEGER`",
          },
          {
            "name": "meta_description",
            "type": "`$STRING`",
          },
          {
            "name": "pages",
            "type": "`$INTEGER`",
          },
          {
            "name": "per_page",
            "type": "`$INTEGER`",
          },
          {
            "name": "spoilers",
            "type": "`$INTEGER`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "ws_board",
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
                "parts": [
                  "boards.json",
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
                "parts": [
                  "{board}",
                  "catalog.json",
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
                "parts": [
                  "{board}",
                  "{page}.json",
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
            "name": "archived",
            "type": "`$INTEGER`",
          },
          {
            "name": "archived_on",
            "type": "`$INTEGER`",
          },
          {
            "name": "bumplimit",
            "type": "`$INTEGER`",
          },
          {
            "name": "capcode",
            "type": "`$STRING`",
          },
          {
            "name": "closed",
            "type": "`$INTEGER`",
          },
          {
            "name": "com",
            "type": "`$STRING`",
          },
          {
            "name": "country",
            "type": "`$STRING`",
          },
          {
            "name": "country_name",
            "type": "`$STRING`",
          },
          {
            "name": "custom_spoiler",
            "type": "`$INTEGER`",
          },
          {
            "name": "ext",
            "type": "`$STRING`",
          },
          {
            "name": "filedeleted",
            "type": "`$INTEGER`",
          },
          {
            "name": "filename",
            "type": "`$STRING`",
          },
          {
            "name": "fsize",
            "type": "`$INTEGER`",
          },
          {
            "name": "h",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "imagelimit",
            "type": "`$INTEGER`",
          },
          {
            "name": "images",
            "type": "`$INTEGER`",
          },
          {
            "name": "last_modified",
            "type": "`$INTEGER`",
          },
          {
            "name": "m_img",
            "type": "`$INTEGER`",
          },
          {
            "name": "md5",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "no",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "now",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "omitted_images",
            "type": "`$INTEGER`",
          },
          {
            "name": "omitted_posts",
            "type": "`$INTEGER`",
          },
          {
            "name": "page",
            "type": "`$INTEGER`",
          },
          {
            "name": "replies",
            "type": "`$INTEGER`",
          },
          {
            "name": "resto",
            "type": "`$INTEGER`",
          },
          {
            "name": "semantic_url",
            "type": "`$STRING`",
          },
          {
            "name": "since4pass",
            "type": "`$INTEGER`",
          },
          {
            "name": "spoiler",
            "type": "`$INTEGER`",
          },
          {
            "name": "sticky",
            "type": "`$INTEGER`",
          },
          {
            "name": "sub",
            "type": "`$STRING`",
          },
          {
            "name": "tag",
            "type": "`$STRING`",
          },
          {
            "name": "threads",
            "type": "`$ARRAY`",
          },
          {
            "name": "tim",
            "type": "`$INTEGER`",
          },
          {
            "name": "time",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "tn_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "tn_w",
            "type": "`$INTEGER`",
          },
          {
            "name": "trip",
            "type": "`$STRING`",
          },
          {
            "name": "unique_ips",
            "type": "`$INTEGER`",
          },
          {
            "name": "w",
            "type": "`$INTEGER`",
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
                "parts": [
                  "{board}",
                  "thread",
                  "{threadId}.json",
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
                "parts": [
                  "{board}",
                  "threads.json",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "thread",
            ],
          ],
        },
      },
    },
    }
