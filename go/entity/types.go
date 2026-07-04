// Typed models for the N4chan SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Archive is the typed data model for the archive entity.
type Archive struct {
}

// ArchiveListMatch is the typed request payload for Archive.ListTyped.
type ArchiveListMatch struct {
	Board string `json:"board"`
}

// Board is the typed data model for the board entity.
type Board struct {
	Board *string `json:"board,omitempty"`
	BoardFlag *map[string]any `json:"board_flag,omitempty"`
	BumpLimit *int `json:"bump_limit,omitempty"`
	Cooldown *map[string]any `json:"cooldown,omitempty"`
	CustomSpoiler *int `json:"custom_spoiler,omitempty"`
	ImageLimit *int `json:"image_limit,omitempty"`
	IsArchived *int `json:"is_archived,omitempty"`
	MaxCommentChar *int `json:"max_comment_char,omitempty"`
	MaxFilesize *int `json:"max_filesize,omitempty"`
	MaxWebmDuration *int `json:"max_webm_duration,omitempty"`
	MaxWebmFilesize *int `json:"max_webm_filesize,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Spoiler *int `json:"spoiler,omitempty"`
	Title *string `json:"title,omitempty"`
	WsBoard *int `json:"ws_board,omitempty"`
}

// BoardListMatch mirrors the board fields as an all-optional match
// filter (Go analog of Partial<Board>).
type BoardListMatch struct {
	Board *string `json:"board,omitempty"`
	BoardFlag *map[string]any `json:"board_flag,omitempty"`
	BumpLimit *int `json:"bump_limit,omitempty"`
	Cooldown *map[string]any `json:"cooldown,omitempty"`
	CustomSpoiler *int `json:"custom_spoiler,omitempty"`
	ImageLimit *int `json:"image_limit,omitempty"`
	IsArchived *int `json:"is_archived,omitempty"`
	MaxCommentChar *int `json:"max_comment_char,omitempty"`
	MaxFilesize *int `json:"max_filesize,omitempty"`
	MaxWebmDuration *int `json:"max_webm_duration,omitempty"`
	MaxWebmFilesize *int `json:"max_webm_filesize,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Spoiler *int `json:"spoiler,omitempty"`
	Title *string `json:"title,omitempty"`
	WsBoard *int `json:"ws_board,omitempty"`
}

// Catalog is the typed data model for the catalog entity.
type Catalog struct {
	Page *int `json:"page,omitempty"`
	Thread *[]any `json:"thread,omitempty"`
}

// CatalogListMatch is the typed request payload for Catalog.ListTyped.
type CatalogListMatch struct {
	Board string `json:"board"`
}

// Index is the typed data model for the index entity.
type Index struct {
	Post *[]any `json:"post,omitempty"`
}

// IndexListMatch is the typed request payload for Index.ListTyped.
type IndexListMatch struct {
	Board string `json:"board"`
	Page int `json:"page"`
}

// Thread is the typed data model for the thread entity.
type Thread struct {
	Archived *int `json:"archived,omitempty"`
	ArchivedOn *int `json:"archived_on,omitempty"`
	Bumplimit *int `json:"bumplimit,omitempty"`
	Capcode *string `json:"capcode,omitempty"`
	Closed *int `json:"closed,omitempty"`
	Com *string `json:"com,omitempty"`
	Country *string `json:"country,omitempty"`
	CountryName *string `json:"country_name,omitempty"`
	CustomSpoiler *int `json:"custom_spoiler,omitempty"`
	Ext *string `json:"ext,omitempty"`
	Filedeleted *int `json:"filedeleted,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Fsize *int `json:"fsize,omitempty"`
	H *int `json:"h,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *int `json:"image,omitempty"`
	Imagelimit *int `json:"imagelimit,omitempty"`
	LastModified *int `json:"last_modified,omitempty"`
	MImg *int `json:"m_img,omitempty"`
	Md5 *string `json:"md5,omitempty"`
	Name *string `json:"name,omitempty"`
	No int `json:"no"`
	Now string `json:"now"`
	OmittedImage *int `json:"omitted_image,omitempty"`
	OmittedPost *int `json:"omitted_post,omitempty"`
	Page *int `json:"page,omitempty"`
	Reply *int `json:"reply,omitempty"`
	Resto *int `json:"resto,omitempty"`
	SemanticUrl *string `json:"semantic_url,omitempty"`
	Since4pass *int `json:"since4pass,omitempty"`
	Spoiler *int `json:"spoiler,omitempty"`
	Sticky *int `json:"sticky,omitempty"`
	Sub *string `json:"sub,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Thread *[]any `json:"thread,omitempty"`
	Tim *int `json:"tim,omitempty"`
	Time int `json:"time"`
	TnH *int `json:"tn_h,omitempty"`
	TnW *int `json:"tn_w,omitempty"`
	Trip *string `json:"trip,omitempty"`
	UniqueIp *int `json:"unique_ip,omitempty"`
	W *int `json:"w,omitempty"`
}

// ThreadListMatch is the typed request payload for Thread.ListTyped.
type ThreadListMatch struct {
	Board string `json:"board"`
	ThreadId int `json:"thread_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
