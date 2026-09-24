
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'N4chan',
        slug: "n4chan",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
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
 retry:     {
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
 test:     {
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
 timeout:     {
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

  }


  options = {
    base: "https://a.4cdn.org",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        archive: {
        },
  
        board: {
        },
  
        catalog: {
        },
  
        index: {
        },
  
        thread: {
        },
  
        thread_id: {
        },
  
    }
  }


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
              "parts": [
                "{board}",
                "archive.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "if_modified_since",
                    "orig": "if_modified_since",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "board",
                    "orig": "board",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "board",
                  "if_modified_since"
                ]
              }
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
          "title": "Board",
          "type": "`$STRING`",
          "short": "Board identifier"
        },
        {
          "name": "board_flags",
          "title": "Board Flags",
          "type": "`$OBJECT`",
          "short": "Board flags configuration"
        },
        {
          "name": "bump_limit",
          "title": "Bump Limit",
          "type": "`$INTEGER`",
          "short": "Bump limit for threads"
        },
        {
          "name": "cooldowns",
          "title": "Cooldowns",
          "type": "`$OBJECT`",
          "short": "Cooldown periods for posting"
        },
        {
          "name": "custom_spoilers",
          "title": "Custom Spoilers",
          "type": "`$INTEGER`",
          "short": "Number of custom spoiler images"
        },
        {
          "name": "image_limit",
          "title": "Image Limit",
          "type": "`$INTEGER`",
          "short": "Image limit for threads"
        },
        {
          "name": "is_archived",
          "title": "Is Archived",
          "type": "`$INTEGER`",
          "short": "Archive enabled flag"
        },
        {
          "name": "max_comment_chars",
          "title": "Max Comment Chars",
          "type": "`$INTEGER`",
          "short": "Maximum comment length"
        },
        {
          "name": "max_filesize",
          "title": "Max Filesize",
          "type": "`$INTEGER`",
          "short": "Maximum filesize in bytes"
        },
        {
          "name": "max_webm_duration",
          "title": "Max Webm Duration",
          "type": "`$INTEGER`",
          "short": "Maximum WebM duration in seconds"
        },
        {
          "name": "max_webm_filesize",
          "title": "Max Webm Filesize",
          "type": "`$INTEGER`",
          "short": "Maximum WebM filesize in bytes"
        },
        {
          "name": "meta_description",
          "title": "Meta Description",
          "type": "`$STRING`",
          "short": "Board meta description"
        },
        {
          "name": "pages",
          "title": "Pages",
          "type": "`$INTEGER`",
          "short": "Number of pages"
        },
        {
          "name": "per_page",
          "title": "Per Page",
          "type": "`$INTEGER`",
          "short": "Threads per page"
        },
        {
          "name": "spoilers",
          "title": "Spoilers",
          "type": "`$INTEGER`",
          "short": "Custom spoilers enabled flag"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "short": "Board title"
        },
        {
          "name": "ws_board",
          "title": "Ws Board",
          "type": "`$INTEGER`",
          "short": "Worksafe board flag (1 for worksafe, 0 for NSFW)"
        }
      ],
      "name": "board",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/boards.json",
              "segments": [
                {
                  "lit": "boards.json"
                }
              ],
              "parts": [
                "boards.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.boards`"
              },
              "args": {
                "header": [
                  {
                    "name": "if_modified_since",
                    "orig": "if_modified_since",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "if_modified_since"
                ]
              }
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
          "title": "Page",
          "type": "`$INTEGER`",
          "short": "Page number"
        },
        {
          "name": "threads",
          "title": "Threads",
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
              "parts": [
                "{board}",
                "catalog.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "if_modified_since",
                    "orig": "if_modified_since",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "board",
                    "orig": "board",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "board",
                  "if_modified_since"
                ]
              }
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
          "title": "Posts",
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
              "parts": [
                "{board}",
                "{page}.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.threads`"
              },
              "args": {
                "header": [
                  {
                    "name": "if_modified_since",
                    "orig": "if_modified_since",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "board",
                    "orig": "board",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "board",
                  "if_modified_since",
                  "page"
                ]
              }
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
          "title": "Page",
          "type": "`$INTEGER`",
          "short": "Page number"
        },
        {
          "name": "threads",
          "title": "Threads",
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
              "parts": [
                "{board}",
                "threads.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "if_modified_since",
                    "orig": "if_modified_since",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "board",
                    "orig": "board",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "board",
                  "if_modified_since"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "thread_id": {
      "fields": [
        {
          "name": "archived",
          "title": "Archived",
          "type": "`$INTEGER`",
          "short": "Archived flag"
        },
        {
          "name": "archived_on",
          "title": "Archived On",
          "type": "`$INTEGER`",
          "short": "Unix timestamp when archived"
        },
        {
          "name": "bumplimit",
          "title": "Bumplimit",
          "type": "`$INTEGER`",
          "short": "Bump limit reached flag"
        },
        {
          "name": "capcode",
          "title": "Capcode",
          "type": "`$STRING`",
          "short": "Capcode (mod, admin, etc.)"
        },
        {
          "name": "closed",
          "title": "Closed",
          "type": "`$INTEGER`",
          "short": "Closed flag"
        },
        {
          "name": "com",
          "title": "Com",
          "type": "`$STRING`",
          "short": "Comment (HTML escaped)"
        },
        {
          "name": "country",
          "title": "Country",
          "type": "`$STRING`",
          "short": "Country code"
        },
        {
          "name": "country_name",
          "title": "Country Name",
          "type": "`$STRING`",
          "short": "Country name"
        },
        {
          "name": "custom_spoiler",
          "title": "Custom Spoiler",
          "type": "`$INTEGER`",
          "short": "Custom spoiler ID"
        },
        {
          "name": "ext",
          "title": "Ext",
          "type": "`$STRING`",
          "short": "File extension"
        },
        {
          "name": "filedeleted",
          "title": "Filedeleted",
          "type": "`$INTEGER`",
          "short": "File deleted flag"
        },
        {
          "name": "filename",
          "title": "Filename",
          "type": "`$STRING`",
          "short": "Original filename"
        },
        {
          "name": "fsize",
          "title": "Fsize",
          "type": "`$INTEGER`",
          "short": "File size in bytes"
        },
        {
          "name": "h",
          "title": "H",
          "type": "`$INTEGER`",
          "short": "Image height"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Poster ID"
        },
        {
          "name": "imagelimit",
          "title": "Imagelimit",
          "type": "`$INTEGER`",
          "short": "Image limit reached flag"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$INTEGER`",
          "short": "Number of images"
        },
        {
          "name": "last_modified",
          "title": "Last Modified",
          "type": "`$INTEGER`",
          "short": "Unix timestamp of last modification"
        },
        {
          "name": "m_img",
          "title": "M Img",
          "type": "`$INTEGER`",
          "short": "Mobile optimized image flag"
        },
        {
          "name": "md5",
          "title": "Md5",
          "type": "`$STRING`",
          "short": "MD5 hash in base64"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Poster name"
        },
        {
          "name": "no",
          "title": "No",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Post number"
        },
        {
          "name": "now",
          "title": "Now",
          "type": "`$STRING`",
          "req": true,
          "short": "Formatted date and time"
        },
        {
          "name": "omitted_images",
          "title": "Omitted Images",
          "type": "`$INTEGER`",
          "short": "Number of omitted images"
        },
        {
          "name": "omitted_posts",
          "title": "Omitted Posts",
          "type": "`$INTEGER`",
          "short": "Number of omitted posts"
        },
        {
          "name": "replies",
          "title": "Replies",
          "type": "`$INTEGER`",
          "short": "Number of replies"
        },
        {
          "name": "resto",
          "title": "Resto",
          "type": "`$INTEGER`",
          "short": "Reply to thread ID (0 for OP)"
        },
        {
          "name": "semantic_url",
          "title": "Semantic Url",
          "type": "`$STRING`",
          "short": "SEO-friendly URL slug"
        },
        {
          "name": "since4pass",
          "title": "Since4pass",
          "type": "`$INTEGER`",
          "short": "Year 4chan pass purchased"
        },
        {
          "name": "spoiler",
          "title": "Spoiler",
          "type": "`$INTEGER`",
          "short": "Spoiler flag"
        },
        {
          "name": "sticky",
          "title": "Sticky",
          "type": "`$INTEGER`",
          "short": "Sticky flag"
        },
        {
          "name": "sub",
          "title": "Sub",
          "type": "`$STRING`",
          "short": "Subject"
        },
        {
          "name": "tag",
          "title": "Tag",
          "type": "`$STRING`",
          "short": "Tag"
        },
        {
          "name": "tim",
          "title": "Tim",
          "type": "`$INTEGER`",
          "short": "Unix timestamp for image"
        },
        {
          "name": "time",
          "title": "Time",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Unix timestamp"
        },
        {
          "name": "tn_h",
          "title": "Tn H",
          "type": "`$INTEGER`",
          "short": "Thumbnail height"
        },
        {
          "name": "tn_w",
          "title": "Tn W",
          "type": "`$INTEGER`",
          "short": "Thumbnail width"
        },
        {
          "name": "trip",
          "title": "Trip",
          "type": "`$STRING`",
          "short": "Tripcode"
        },
        {
          "name": "unique_ips",
          "title": "Unique Ips",
          "type": "`$INTEGER`",
          "short": "Number of unique poster IPs"
        },
        {
          "name": "w",
          "title": "W",
          "type": "`$INTEGER`",
          "short": "Image width"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "thread_id",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
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
              "parts": [
                "{board}",
                "thread",
                "{threadId}.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.posts`"
              },
              "args": {
                "header": [
                  {
                    "name": "if_modified_since",
                    "orig": "if_modified_since",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "board",
                    "orig": "board",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "thread_id",
                    "orig": "thread_id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "board",
                  "if_modified_since",
                  "thread_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

