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
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] threads
#   @return [Array, nil]
ThreadType = Struct.new(
  :page,
  :threads,
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

