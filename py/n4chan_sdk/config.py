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
            "slug": "n4chan",
            "version": "0.0.1",
            "target": "py",
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
            "short": "Archived flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "archived_on",
            "short": "Unix timestamp when archived",
            "type": "`$INTEGER`",
          },
          {
            "name": "bumplimit",
            "short": "Bump limit reached flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "capcode",
            "short": "Capcode (mod, admin, etc.)",
            "type": "`$STRING`",
          },
          {
            "name": "closed",
            "short": "Closed flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "com",
            "short": "Comment (HTML escaped)",
            "type": "`$STRING`",
          },
          {
            "name": "country",
            "short": "Country code",
            "type": "`$STRING`",
          },
          {
            "name": "country_name",
            "short": "Country name",
            "type": "`$STRING`",
          },
          {
            "name": "custom_spoiler",
            "short": "Custom spoiler ID",
            "type": "`$INTEGER`",
          },
          {
            "name": "ext",
            "short": "File extension",
            "type": "`$STRING`",
          },
          {
            "name": "filedeleted",
            "short": "File deleted flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "filename",
            "short": "Original filename",
            "type": "`$STRING`",
          },
          {
            "name": "fsize",
            "short": "File size in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "h",
            "short": "Image height",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "short": "Poster ID",
            "type": "`$STRING`",
          },
          {
            "name": "imagelimit",
            "short": "Image limit reached flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "images",
            "short": "Number of images",
            "type": "`$INTEGER`",
          },
          {
            "name": "last_modified",
            "short": "Unix timestamp of last modification",
            "type": "`$INTEGER`",
          },
          {
            "name": "m_img",
            "short": "Mobile optimized image flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "md5",
            "short": "MD5 hash in base64",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Poster name",
            "type": "`$STRING`",
          },
          {
            "name": "no",
            "req": True,
            "short": "Post number",
            "type": "`$INTEGER`",
          },
          {
            "name": "now",
            "req": True,
            "short": "Formatted date and time",
            "type": "`$STRING`",
          },
          {
            "name": "omitted_images",
            "short": "Number of omitted images",
            "type": "`$INTEGER`",
          },
          {
            "name": "omitted_posts",
            "short": "Number of omitted posts",
            "type": "`$INTEGER`",
          },
          {
            "name": "page",
            "short": "Page number",
            "type": "`$INTEGER`",
          },
          {
            "name": "replies",
            "short": "Number of replies",
            "type": "`$INTEGER`",
          },
          {
            "name": "resto",
            "short": "Reply to thread ID (0 for OP)",
            "type": "`$INTEGER`",
          },
          {
            "name": "semantic_url",
            "short": "SEO-friendly URL slug",
            "type": "`$STRING`",
          },
          {
            "name": "since4pass",
            "short": "Year 4chan pass purchased",
            "type": "`$INTEGER`",
          },
          {
            "name": "spoiler",
            "short": "Spoiler flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "sticky",
            "short": "Sticky flag",
            "type": "`$INTEGER`",
          },
          {
            "name": "sub",
            "short": "Subject",
            "type": "`$STRING`",
          },
          {
            "name": "tag",
            "short": "Tag",
            "type": "`$STRING`",
          },
          {
            "name": "threads",
            "type": "`$ARRAY`",
          },
          {
            "name": "tim",
            "short": "Unix timestamp for image",
            "type": "`$INTEGER`",
          },
          {
            "name": "time",
            "req": True,
            "short": "Unix timestamp",
            "type": "`$INTEGER`",
          },
          {
            "name": "tn_h",
            "short": "Thumbnail height",
            "type": "`$INTEGER`",
          },
          {
            "name": "tn_w",
            "short": "Thumbnail width",
            "type": "`$INTEGER`",
          },
          {
            "name": "trip",
            "short": "Tripcode",
            "type": "`$STRING`",
          },
          {
            "name": "unique_ips",
            "short": "Number of unique poster IPs",
            "type": "`$INTEGER`",
          },
          {
            "name": "w",
            "short": "Image width",
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
