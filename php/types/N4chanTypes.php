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
    public ?int $archived = null;
    public ?int $archived_on = null;
    public ?int $bumplimit = null;
    public ?string $capcode = null;
    public ?int $closed = null;
    public ?string $com = null;
    public ?string $country = null;
    public ?string $country_name = null;
    public ?int $custom_spoiler = null;
    public ?string $ext = null;
    public ?int $filedeleted = null;
    public ?string $filename = null;
    public ?int $fsize = null;
    public ?int $h = null;
    public ?string $id = null;
    public ?int $imagelimit = null;
    public ?int $images = null;
    public ?int $last_modified = null;
    public ?int $m_img = null;
    public ?string $md5 = null;
    public ?string $name = null;
    public int $no;
    public string $now;
    public ?int $omitted_images = null;
    public ?int $omitted_posts = null;
    public ?int $page = null;
    public ?int $replies = null;
    public ?int $resto = null;
    public ?string $semantic_url = null;
    public ?int $since4pass = null;
    public ?int $spoiler = null;
    public ?int $sticky = null;
    public ?string $sub = null;
    public ?string $tag = null;
    public ?array $threads = null;
    public ?int $tim = null;
    public int $time;
    public ?int $tn_h = null;
    public ?int $tn_w = null;
    public ?string $trip = null;
    public ?int $unique_ips = null;
    public ?int $w = null;
}

/** Request payload for Thread#list. */
class ThreadListMatch
{
    public string $board;
}

