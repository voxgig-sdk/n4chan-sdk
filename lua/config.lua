-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "N4chan",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://a.4cdn.org",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["archive"] = {},
        ["board"] = {},
        ["catalog"] = {},
        ["index"] = {},
        ["thread"] = {},
      },
    },
    entity = {
      ["archive"] = {
        ["fields"] = {},
        ["name"] = "archive",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["header"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "header",
                      ["name"] = "if_modified_since",
                      ["orig"] = "if_modified_since",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{board}/archive.json",
                ["parts"] = {
                  "{board}",
                  "archive.json",
                },
                ["select"] = {
                  ["exist"] = {
                    "board",
                    "if_modified_since",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["board"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "board",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "board_flag",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "bump_limit",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "cooldown",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "custom_spoiler",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "image_limit",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "is_archived",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "max_comment_char",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "max_filesize",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "max_webm_duration",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "max_webm_filesize",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "meta_description",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "page",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "per_page",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "spoiler",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "ws_board",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 16,
          },
        },
        ["name"] = "board",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["header"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "header",
                      ["name"] = "if_modified_since",
                      ["orig"] = "if_modified_since",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/boards.json",
                ["parts"] = {
                  "boards.json",
                },
                ["select"] = {
                  ["exist"] = {
                    "if_modified_since",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["catalog"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "page",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "thread",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
        },
        ["name"] = "catalog",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["header"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "header",
                      ["name"] = "if_modified_since",
                      ["orig"] = "if_modified_since",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{board}/catalog.json",
                ["parts"] = {
                  "{board}",
                  "catalog.json",
                },
                ["select"] = {
                  ["exist"] = {
                    "board",
                    "if_modified_since",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["index"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "post",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
        },
        ["name"] = "index",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["header"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "header",
                      ["name"] = "if_modified_since",
                      ["orig"] = "if_modified_since",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["index$"] = 1,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{board}/{page}.json",
                ["parts"] = {
                  "{board}",
                  "{page}.json",
                },
                ["select"] = {
                  ["exist"] = {
                    "board",
                    "if_modified_since",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["thread"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "archived",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "archived_on",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "bumplimit",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "capcode",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "closed",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "com",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "country",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "country_name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "custom_spoiler",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "ext",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "filedeleted",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "filename",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "fsize",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "h",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "image",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "imagelimit",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "last_modified",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "m_img",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 18,
          },
          {
            ["active"] = true,
            ["name"] = "md5",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 19,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 20,
          },
          {
            ["active"] = true,
            ["name"] = "no",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["index$"] = 21,
          },
          {
            ["active"] = true,
            ["name"] = "now",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 22,
          },
          {
            ["active"] = true,
            ["name"] = "omitted_image",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 23,
          },
          {
            ["active"] = true,
            ["name"] = "omitted_post",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 24,
          },
          {
            ["active"] = true,
            ["name"] = "page",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 25,
          },
          {
            ["active"] = true,
            ["name"] = "reply",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 26,
          },
          {
            ["active"] = true,
            ["name"] = "resto",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 27,
          },
          {
            ["active"] = true,
            ["name"] = "semantic_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 28,
          },
          {
            ["active"] = true,
            ["name"] = "since4pass",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 29,
          },
          {
            ["active"] = true,
            ["name"] = "spoiler",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 30,
          },
          {
            ["active"] = true,
            ["name"] = "sticky",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 31,
          },
          {
            ["active"] = true,
            ["name"] = "sub",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 32,
          },
          {
            ["active"] = true,
            ["name"] = "tag",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 33,
          },
          {
            ["active"] = true,
            ["name"] = "thread",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 34,
          },
          {
            ["active"] = true,
            ["name"] = "tim",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 35,
          },
          {
            ["active"] = true,
            ["name"] = "time",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
            ["index$"] = 36,
          },
          {
            ["active"] = true,
            ["name"] = "tn_h",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 37,
          },
          {
            ["active"] = true,
            ["name"] = "tn_w",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 38,
          },
          {
            ["active"] = true,
            ["name"] = "trip",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 39,
          },
          {
            ["active"] = true,
            ["name"] = "unique_ip",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 40,
          },
          {
            ["active"] = true,
            ["name"] = "w",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 41,
          },
        },
        ["name"] = "thread",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["header"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "header",
                      ["name"] = "if_modified_since",
                      ["orig"] = "if_modified_since",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "thread_id",
                      ["orig"] = "thread_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{board}/thread/{threadId}.json",
                ["parts"] = {
                  "{board}",
                  "thread",
                  "{threadId}.json",
                },
                ["select"] = {
                  ["$action"] = "thread_id",
                  ["exist"] = {
                    "board",
                    "if_modified_since",
                    "thread_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["header"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "header",
                      ["name"] = "if_modified_since",
                      ["orig"] = "if_modified_since",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{board}/threads.json",
                ["parts"] = {
                  "{board}",
                  "threads.json",
                },
                ["select"] = {
                  ["exist"] = {
                    "board",
                    "if_modified_since",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "thread",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
