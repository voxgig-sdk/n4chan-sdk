# Typed models for the N4chan SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Archive:
    pass


@dataclass
class ArchiveListMatch:
    board: str


@dataclass
class Board:
    board: Optional[str] = None
    board_flag: Optional[dict] = None
    bump_limit: Optional[int] = None
    cooldown: Optional[dict] = None
    custom_spoiler: Optional[int] = None
    image_limit: Optional[int] = None
    is_archived: Optional[int] = None
    max_comment_char: Optional[int] = None
    max_filesize: Optional[int] = None
    max_webm_duration: Optional[int] = None
    max_webm_filesize: Optional[int] = None
    meta_description: Optional[str] = None
    page: Optional[int] = None
    per_page: Optional[int] = None
    spoiler: Optional[int] = None
    title: Optional[str] = None
    ws_board: Optional[int] = None


@dataclass
class BoardListMatch:
    board: Optional[str] = None
    board_flag: Optional[dict] = None
    bump_limit: Optional[int] = None
    cooldown: Optional[dict] = None
    custom_spoiler: Optional[int] = None
    image_limit: Optional[int] = None
    is_archived: Optional[int] = None
    max_comment_char: Optional[int] = None
    max_filesize: Optional[int] = None
    max_webm_duration: Optional[int] = None
    max_webm_filesize: Optional[int] = None
    meta_description: Optional[str] = None
    page: Optional[int] = None
    per_page: Optional[int] = None
    spoiler: Optional[int] = None
    title: Optional[str] = None
    ws_board: Optional[int] = None


@dataclass
class Catalog:
    page: Optional[int] = None
    thread: Optional[list] = None


@dataclass
class CatalogListMatch:
    board: str


@dataclass
class Index:
    post: Optional[list] = None


@dataclass
class IndexListMatch:
    board: str
    page: int


@dataclass
class Thread:
    no: int
    now: str
    time: int
    archived: Optional[int] = None
    archived_on: Optional[int] = None
    bumplimit: Optional[int] = None
    capcode: Optional[str] = None
    closed: Optional[int] = None
    com: Optional[str] = None
    country: Optional[str] = None
    country_name: Optional[str] = None
    custom_spoiler: Optional[int] = None
    ext: Optional[str] = None
    filedeleted: Optional[int] = None
    filename: Optional[str] = None
    fsize: Optional[int] = None
    h: Optional[int] = None
    id: Optional[str] = None
    image: Optional[int] = None
    imagelimit: Optional[int] = None
    last_modified: Optional[int] = None
    m_img: Optional[int] = None
    md5: Optional[str] = None
    name: Optional[str] = None
    omitted_image: Optional[int] = None
    omitted_post: Optional[int] = None
    page: Optional[int] = None
    reply: Optional[int] = None
    resto: Optional[int] = None
    semantic_url: Optional[str] = None
    since4pass: Optional[int] = None
    spoiler: Optional[int] = None
    sticky: Optional[int] = None
    sub: Optional[str] = None
    tag: Optional[str] = None
    thread: Optional[list] = None
    tim: Optional[int] = None
    tn_h: Optional[int] = None
    tn_w: Optional[int] = None
    trip: Optional[str] = None
    unique_ip: Optional[int] = None
    w: Optional[int] = None


@dataclass
class ThreadListMatch:
    board: str
    thread_id: int

