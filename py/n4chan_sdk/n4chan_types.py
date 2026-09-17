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


class Thread(TypedDict, total=False):
    page: int
    threads: list


class ThreadListMatch(TypedDict):
    board: str
