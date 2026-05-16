package = "voxgig-sdk-n4chan"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/n4chan-sdk.git"
}
description = {
  summary = "N4chan SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["n4chan_sdk"] = "n4chan_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
