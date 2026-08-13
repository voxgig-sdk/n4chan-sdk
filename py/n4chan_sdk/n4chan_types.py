# Typed models for the N4chan SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Archive(TypedDict):
    pass


class ArchiveListMatch(TypedDict):
    board: str


class Board(TypedDict, total=False):
    board: str
    board_flags: dict
    bump_limit: int
    cooldowns: dict
    custom_spoilers: int
    image_limit: int
    is_archived: int
    max_comment_chars: int
    max_filesize: int
    max_webm_duration: int
    max_webm_filesize: int
    meta_description: str
    pages: int
    per_page: int
    spoilers: int
    title: str
    ws_board: int


class BoardListMatch(TypedDict, total=False):
    board: str
    board_flags: dict
    bump_limit: int
    cooldowns: dict
    custom_spoilers: int
    image_limit: int
    is_archived: int
    max_comment_chars: int
    max_filesize: int
    max_webm_duration: int
    max_webm_filesize: int
    meta_description: str
    pages: int
    per_page: int
    spoilers: int
    title: str
    ws_board: int


class Catalog(TypedDict, total=False):
    page: int
    threads: list


class CatalogListMatch(TypedDict):
    board: str


class Index(TypedDict, total=False):
    posts: list


class IndexListMatch(TypedDict):
    board: str
    page: int


class ThreadRequired(TypedDict):
    no: int
    now: str
    time: int


class Thread(ThreadRequired, total=False):
    archived: int
    archived_on: int
    bumplimit: int
    capcode: str
    closed: int
    com: str
    country: str
    country_name: str
    custom_spoiler: int
    ext: str
    filedeleted: int
    filename: str
    fsize: int
    h: int
    id: str
    imagelimit: int
    images: int
    last_modified: int
    m_img: int
    md5: str
    name: str
    omitted_images: int
    omitted_posts: int
    page: int
    replies: int
    resto: int
    semantic_url: str
    since4pass: int
    spoiler: int
    sticky: int
    sub: str
    tag: str
    threads: list
    tim: int
    tn_h: int
    tn_w: int
    trip: str
    unique_ips: int
    w: int


class ThreadListMatch(TypedDict):
    board: str
