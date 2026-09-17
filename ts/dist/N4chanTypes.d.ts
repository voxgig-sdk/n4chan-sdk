export interface Archive {
}
export interface ArchiveListMatch {
    board: string;
}
export interface Board {
    board?: string;
    board_flags?: Record<string, any>;
    bump_limit?: number;
    cooldowns?: Record<string, any>;
    custom_spoilers?: number;
    image_limit?: number;
    is_archived?: number;
    max_comment_chars?: number;
    max_filesize?: number;
    max_webm_duration?: number;
    max_webm_filesize?: number;
    meta_description?: string;
    pages?: number;
    per_page?: number;
    spoilers?: number;
    title?: string;
    ws_board?: number;
}
export interface BoardListMatch {
    board?: string;
    board_flags?: Record<string, any>;
    bump_limit?: number;
    cooldowns?: Record<string, any>;
    custom_spoilers?: number;
    image_limit?: number;
    is_archived?: number;
    max_comment_chars?: number;
    max_filesize?: number;
    max_webm_duration?: number;
    max_webm_filesize?: number;
    meta_description?: string;
    pages?: number;
    per_page?: number;
    spoilers?: number;
    title?: string;
    ws_board?: number;
}
export interface Catalog {
    page?: number;
    threads?: any[];
}
export interface CatalogListMatch {
    board: string;
}
export interface Index {
    posts?: any[];
}
export interface IndexListMatch {
    board: string;
    page: number;
}
export interface Thread {
    page?: number;
    threads?: any[];
}
export interface ThreadListMatch {
    board: string;
    $action?: string;
    [action: string]: any;
}
