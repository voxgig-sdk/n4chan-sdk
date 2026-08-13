# frozen_string_literal: true

# Typed models for the N4chan SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Archive entity data model.
class Archive
end

# Request payload for Archive#list.
#
# @!attribute [rw] board
#   @return [String]
ArchiveListMatch = Struct.new(
  :board,
  keyword_init: true
)

# Board entity data model.
#
# @!attribute [rw] board
#   @return [String, nil]
#
# @!attribute [rw] board_flags
#   @return [Hash, nil]
#
# @!attribute [rw] bump_limit
#   @return [Integer, nil]
#
# @!attribute [rw] cooldowns
#   @return [Hash, nil]
#
# @!attribute [rw] custom_spoilers
#   @return [Integer, nil]
#
# @!attribute [rw] image_limit
#   @return [Integer, nil]
#
# @!attribute [rw] is_archived
#   @return [Integer, nil]
#
# @!attribute [rw] max_comment_chars
#   @return [Integer, nil]
#
# @!attribute [rw] max_filesize
#   @return [Integer, nil]
#
# @!attribute [rw] max_webm_duration
#   @return [Integer, nil]
#
# @!attribute [rw] max_webm_filesize
#   @return [Integer, nil]
#
# @!attribute [rw] meta_description
#   @return [String, nil]
#
# @!attribute [rw] pages
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] spoilers
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] ws_board
#   @return [Integer, nil]
Board = Struct.new(
  :board,
  :board_flags,
  :bump_limit,
  :cooldowns,
  :custom_spoilers,
  :image_limit,
  :is_archived,
  :max_comment_chars,
  :max_filesize,
  :max_webm_duration,
  :max_webm_filesize,
  :meta_description,
  :pages,
  :per_page,
  :spoilers,
  :title,
  :ws_board,
  keyword_init: true
)

# Request payload for Board#list.
#
# @!attribute [rw] board
#   @return [String, nil]
#
# @!attribute [rw] board_flags
#   @return [Hash, nil]
#
# @!attribute [rw] bump_limit
#   @return [Integer, nil]
#
# @!attribute [rw] cooldowns
#   @return [Hash, nil]
#
# @!attribute [rw] custom_spoilers
#   @return [Integer, nil]
#
# @!attribute [rw] image_limit
#   @return [Integer, nil]
#
# @!attribute [rw] is_archived
#   @return [Integer, nil]
#
# @!attribute [rw] max_comment_chars
#   @return [Integer, nil]
#
# @!attribute [rw] max_filesize
#   @return [Integer, nil]
#
# @!attribute [rw] max_webm_duration
#   @return [Integer, nil]
#
# @!attribute [rw] max_webm_filesize
#   @return [Integer, nil]
#
# @!attribute [rw] meta_description
#   @return [String, nil]
#
# @!attribute [rw] pages
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] spoilers
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] ws_board
#   @return [Integer, nil]
BoardListMatch = Struct.new(
  :board,
  :board_flags,
  :bump_limit,
  :cooldowns,
  :custom_spoilers,
  :image_limit,
  :is_archived,
  :max_comment_chars,
  :max_filesize,
  :max_webm_duration,
  :max_webm_filesize,
  :meta_description,
  :pages,
  :per_page,
  :spoilers,
  :title,
  :ws_board,
  keyword_init: true
)

# Catalog entity data model.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] threads
#   @return [Array, nil]
Catalog = Struct.new(
  :page,
  :threads,
  keyword_init: true
)

# Request payload for Catalog#list.
#
# @!attribute [rw] board
#   @return [String]
CatalogListMatch = Struct.new(
  :board,
  keyword_init: true
)

# Index entity data model.
#
# @!attribute [rw] posts
#   @return [Array, nil]
Index = Struct.new(
  :posts,
  keyword_init: true
)

# Request payload for Index#list.
#
# @!attribute [rw] board
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer]
IndexListMatch = Struct.new(
  :board,
  :page,
  keyword_init: true
)

# Thread entity data model.
#
# @!attribute [rw] archived
#   @return [Integer, nil]
#
# @!attribute [rw] archived_on
#   @return [Integer, nil]
#
# @!attribute [rw] bumplimit
#   @return [Integer, nil]
#
# @!attribute [rw] capcode
#   @return [String, nil]
#
# @!attribute [rw] closed
#   @return [Integer, nil]
#
# @!attribute [rw] com
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] country_name
#   @return [String, nil]
#
# @!attribute [rw] custom_spoiler
#   @return [Integer, nil]
#
# @!attribute [rw] ext
#   @return [String, nil]
#
# @!attribute [rw] filedeleted
#   @return [Integer, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] fsize
#   @return [Integer, nil]
#
# @!attribute [rw] h
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imagelimit
#   @return [Integer, nil]
#
# @!attribute [rw] images
#   @return [Integer, nil]
#
# @!attribute [rw] last_modified
#   @return [Integer, nil]
#
# @!attribute [rw] m_img
#   @return [Integer, nil]
#
# @!attribute [rw] md5
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] no
#   @return [Integer]
#
# @!attribute [rw] now
#   @return [String]
#
# @!attribute [rw] omitted_images
#   @return [Integer, nil]
#
# @!attribute [rw] omitted_posts
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] replies
#   @return [Integer, nil]
#
# @!attribute [rw] resto
#   @return [Integer, nil]
#
# @!attribute [rw] semantic_url
#   @return [String, nil]
#
# @!attribute [rw] since4pass
#   @return [Integer, nil]
#
# @!attribute [rw] spoiler
#   @return [Integer, nil]
#
# @!attribute [rw] sticky
#   @return [Integer, nil]
#
# @!attribute [rw] sub
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] threads
#   @return [Array, nil]
#
# @!attribute [rw] tim
#   @return [Integer, nil]
#
# @!attribute [rw] time
#   @return [Integer]
#
# @!attribute [rw] tn_h
#   @return [Integer, nil]
#
# @!attribute [rw] tn_w
#   @return [Integer, nil]
#
# @!attribute [rw] trip
#   @return [String, nil]
#
# @!attribute [rw] unique_ips
#   @return [Integer, nil]
#
# @!attribute [rw] w
#   @return [Integer, nil]
ThreadType = Struct.new(
  :archived,
  :archived_on,
  :bumplimit,
  :capcode,
  :closed,
  :com,
  :country,
  :country_name,
  :custom_spoiler,
  :ext,
  :filedeleted,
  :filename,
  :fsize,
  :h,
  :id,
  :imagelimit,
  :images,
  :last_modified,
  :m_img,
  :md5,
  :name,
  :no,
  :now,
  :omitted_images,
  :omitted_posts,
  :page,
  :replies,
  :resto,
  :semantic_url,
  :since4pass,
  :spoiler,
  :sticky,
  :sub,
  :tag,
  :threads,
  :tim,
  :time,
  :tn_h,
  :tn_w,
  :trip,
  :unique_ips,
  :w,
  keyword_init: true
)

# Request payload for Thread#list.
#
# @!attribute [rw] board
#   @return [String]
ThreadListMatch = Struct.new(
  :board,
  keyword_init: true
)

