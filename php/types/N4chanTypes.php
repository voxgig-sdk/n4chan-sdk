<?php
declare(strict_types=1);

// Typed models for the N4chan SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Archive entity data model. */
class Archive
{
}

/** Request payload for Archive#list. */
class ArchiveListMatch
{
    public string $board;
}

/** Board entity data model. */
class Board
{
    public ?string $board = null;
    public ?array $board_flags = null;
    public ?int $bump_limit = null;
    public ?array $cooldowns = null;
    public ?int $custom_spoilers = null;
    public ?int $image_limit = null;
    public ?int $is_archived = null;
    public ?int $max_comment_chars = null;
    public ?int $max_filesize = null;
    public ?int $max_webm_duration = null;
    public ?int $max_webm_filesize = null;
    public ?string $meta_description = null;
    public ?int $pages = null;
    public ?int $per_page = null;
    public ?int $spoilers = null;
    public ?string $title = null;
    public ?int $ws_board = null;
}

/** Request payload for Board#list. */
class BoardListMatch
{
    public ?string $board = null;
    public ?array $board_flags = null;
    public ?int $bump_limit = null;
    public ?array $cooldowns = null;
    public ?int $custom_spoilers = null;
    public ?int $image_limit = null;
    public ?int $is_archived = null;
    public ?int $max_comment_chars = null;
    public ?int $max_filesize = null;
    public ?int $max_webm_duration = null;
    public ?int $max_webm_filesize = null;
    public ?string $meta_description = null;
    public ?int $pages = null;
    public ?int $per_page = null;
    public ?int $spoilers = null;
    public ?string $title = null;
    public ?int $ws_board = null;
}

/** Catalog entity data model. */
class Catalog
{
    public ?int $page = null;
    public ?array $threads = null;
}

/** Request payload for Catalog#list. */
class CatalogListMatch
{
    public string $board;
}

/** Index entity data model. */
class Index
{
    public ?array $posts = null;
}

/** Request payload for Index#list. */
class IndexListMatch
{
    public string $board;
    public int $page;
}

/** Thread entity data model. */
class Thread
{
    public ?int $page = null;
    public ?array $threads = null;
}

/** Request payload for Thread#list. */
class ThreadListMatch
{
    public string $board;
}

