# N4chan SDK configuration


def make_config():
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
            "auth": {
                "prefix": "Bearer",
            },
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
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "board": {
        "fields": [
          {
            "active": True,
            "name": "board",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "board_flag",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "bump_limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "cooldown",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "custom_spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "image_limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "is_archived",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "max_comment_char",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "max_filesize",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "max_webm_duration",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "max_webm_filesize",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "meta_description",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "page",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "per_page",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "ws_board",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
        ],
        "name": "board",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "catalog": {
        "fields": [
          {
            "active": True,
            "name": "page",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "thread",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "catalog",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "index": {
        "fields": [
          {
            "active": True,
            "name": "post",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "index",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "page",
                      "orig": "page",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "thread": {
        "fields": [
          {
            "active": True,
            "name": "archived",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "archived_on",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "bumplimit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "capcode",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "closed",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "com",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "country_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "custom_spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "ext",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "filedeleted",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "filename",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "fsize",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "h",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "image",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "imagelimit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "last_modified",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "m_img",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "md5",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "no",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "now",
            "req": True,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "omitted_image",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "omitted_post",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "page",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "reply",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "resto",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "semantic_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "since4pass",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "sticky",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "sub",
            "req": False,
            "type": "`$STRING`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "tag",
            "req": False,
            "type": "`$STRING`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "thread",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "tim",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "time",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "tn_h",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "tn_w",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "trip",
            "req": False,
            "type": "`$STRING`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "unique_ip",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "w",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 41,
          },
        ],
        "name": "thread",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 1,
              },
            ],
            "key$": "list",
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
