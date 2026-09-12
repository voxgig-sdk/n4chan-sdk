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
    archived?: number;
    archived_on?: number;
    bumplimit?: number;
    capcode?: string;
    closed?: number;
    com?: string;
    country?: string;
    country_name?: string;
    custom_spoiler?: number;
    ext?: string;
    filedeleted?: number;
    filename?: string;
    fsize?: number;
    h?: number;
    id?: string;
    imagelimit?: number;
    images?: number;
    last_modified?: number;
    m_img?: number;
    md5?: string;
    name?: string;
    no: number;
    now: string;
    omitted_images?: number;
    omitted_posts?: number;
    page?: number;
    replies?: number;
    resto?: number;
    semantic_url?: string;
    since4pass?: number;
    spoiler?: number;
    sticky?: number;
    sub?: string;
    tag?: string;
    threads?: any[];
    tim?: number;
    time: number;
    tn_h?: number;
    tn_w?: number;
    trip?: string;
    unique_ips?: number;
    w?: number;
}
export interface ThreadListMatch {
    board: string;
    $action?: string;
    [action: string]: any;
}
