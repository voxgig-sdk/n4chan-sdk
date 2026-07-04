// Typed models for the N4chan SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Archive {
}

export interface ArchiveListMatch {
  board: string
}

export interface Board {
  board?: string
  board_flag?: Record<string, any>
  bump_limit?: number
  cooldown?: Record<string, any>
  custom_spoiler?: number
  image_limit?: number
  is_archived?: number
  max_comment_char?: number
  max_filesize?: number
  max_webm_duration?: number
  max_webm_filesize?: number
  meta_description?: string
  page?: number
  per_page?: number
  spoiler?: number
  title?: string
  ws_board?: number
}

export type BoardListMatch = Partial<Board>

export interface Catalog {
  page?: number
  thread?: any[]
}

export interface CatalogListMatch {
  board: string
}

export interface Index {
  post?: any[]
}

export interface IndexListMatch {
  board: string
  page: number
}

export interface Thread {
  archived?: number
  archived_on?: number
  bumplimit?: number
  capcode?: string
  closed?: number
  com?: string
  country?: string
  country_name?: string
  custom_spoiler?: number
  ext?: string
  filedeleted?: number
  filename?: string
  fsize?: number
  h?: number
  id?: string
  image?: number
  imagelimit?: number
  last_modified?: number
  m_img?: number
  md5?: string
  name?: string
  no: number
  now: string
  omitted_image?: number
  omitted_post?: number
  page?: number
  reply?: number
  resto?: number
  semantic_url?: string
  since4pass?: number
  spoiler?: number
  sticky?: number
  sub?: string
  tag?: string
  thread?: any[]
  tim?: number
  time: number
  tn_h?: number
  tn_w?: number
  trip?: string
  unique_ip?: number
  w?: number
}

export interface ThreadListMatch {
  board: string
  thread_id: number
}

