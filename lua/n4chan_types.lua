-- Typed models for the N4chan SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Archive

---@class ArchiveListMatch
---@field board string

---@class Board
---@field board? string
---@field board_flag? table
---@field bump_limit? number
---@field cooldown? table
---@field custom_spoiler? number
---@field image_limit? number
---@field is_archived? number
---@field max_comment_char? number
---@field max_filesize? number
---@field max_webm_duration? number
---@field max_webm_filesize? number
---@field meta_description? string
---@field page? number
---@field per_page? number
---@field spoiler? number
---@field title? string
---@field ws_board? number

---@class BoardListMatch
---@field board? string
---@field board_flag? table
---@field bump_limit? number
---@field cooldown? table
---@field custom_spoiler? number
---@field image_limit? number
---@field is_archived? number
---@field max_comment_char? number
---@field max_filesize? number
---@field max_webm_duration? number
---@field max_webm_filesize? number
---@field meta_description? string
---@field page? number
---@field per_page? number
---@field spoiler? number
---@field title? string
---@field ws_board? number

---@class Catalog
---@field page? number
---@field thread? table

---@class CatalogListMatch
---@field board string

---@class Index
---@field post? table

---@class IndexListMatch
---@field board string
---@field page number

---@class Thread
---@field archived? number
---@field archived_on? number
---@field bumplimit? number
---@field capcode? string
---@field closed? number
---@field com? string
---@field country? string
---@field country_name? string
---@field custom_spoiler? number
---@field ext? string
---@field filedeleted? number
---@field filename? string
---@field fsize? number
---@field h? number
---@field id? string
---@field image? number
---@field imagelimit? number
---@field last_modified? number
---@field m_img? number
---@field md5? string
---@field name? string
---@field no number
---@field now string
---@field omitted_image? number
---@field omitted_post? number
---@field page? number
---@field reply? number
---@field resto? number
---@field semantic_url? string
---@field since4pass? number
---@field spoiler? number
---@field sticky? number
---@field sub? string
---@field tag? string
---@field thread? table
---@field tim? number
---@field time number
---@field tn_h? number
---@field tn_w? number
---@field trip? string
---@field unique_ip? number
---@field w? number

---@class ThreadListMatch
---@field board string

local M = {}

return M
