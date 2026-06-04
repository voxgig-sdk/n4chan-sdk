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
            "name": "list",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "board",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "board_flag",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "bump_limit",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "cooldown",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "custom_spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "image_limit",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "is_archived",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "max_comment_char",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "max_filesize",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "max_webm_duration",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "max_webm_filesize",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "meta_description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "page",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "per_page",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "ws_board",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 16,
          },
        ],
        "name": "board",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "page",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "thread",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "catalog",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "post",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "index",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "param",
                      "name": "page",
                      "orig": "page",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "archived",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "archived_on",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "bumplimit",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "capcode",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "closed",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "com",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "country_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "custom_spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "ext",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "filedeleted",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "filename",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "fsize",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "h",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "image",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "imagelimit",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "last_modified",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "m_img",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "md5",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 20,
          },
          {
            "name": "no",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 21,
          },
          {
            "name": "now",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 22,
          },
          {
            "name": "omitted_image",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 23,
          },
          {
            "name": "omitted_post",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 24,
          },
          {
            "name": "page",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 25,
          },
          {
            "name": "reply",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 26,
          },
          {
            "name": "resto",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 27,
          },
          {
            "name": "semantic_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 28,
          },
          {
            "name": "since4pass",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 29,
          },
          {
            "name": "spoiler",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 30,
          },
          {
            "name": "sticky",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 31,
          },
          {
            "name": "sub",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 32,
          },
          {
            "name": "tag",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 33,
          },
          {
            "name": "thread",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 34,
          },
          {
            "name": "tim",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 35,
          },
          {
            "name": "time",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 36,
          },
          {
            "name": "tn_h",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 37,
          },
          {
            "name": "tn_w",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 38,
          },
          {
            "name": "trip",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 39,
          },
          {
            "name": "unique_ip",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 40,
          },
          {
            "name": "w",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 41,
          },
        ],
        "name": "thread",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "param",
                      "name": "thread_id",
                      "orig": "thread_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "if_modified_since",
                      "orig": "if_modified_since",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "board",
                      "orig": "board",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
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
