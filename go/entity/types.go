// Typed models for the N4chan SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/n4chan-sdk/go/core"
)

// Archive is the typed data model for the archive entity.
type Archive struct {
}

// ArchiveListMatch is the typed request payload for Archive.ListTyped.
type ArchiveListMatch struct {
	Board string `json:"board"`
}

// Board is the typed data model for the board entity.
type Board struct {
}

// BoardListMatch is the typed request payload for Board.ListTyped.
type BoardListMatch struct {
	Board *string `json:"board,omitempty"`
	BoardFlags *map[string]any `json:"board_flags,omitempty"`
	BumpLimit *int `json:"bump_limit,omitempty"`
	Cooldowns *map[string]any `json:"cooldowns,omitempty"`
	CustomSpoilers *int `json:"custom_spoilers,omitempty"`
	ImageLimit *int `json:"image_limit,omitempty"`
	IsArchived *int `json:"is_archived,omitempty"`
	MaxCommentChars *int `json:"max_comment_chars,omitempty"`
	MaxFilesize *int `json:"max_filesize,omitempty"`
	MaxWebmDuration *int `json:"max_webm_duration,omitempty"`
	MaxWebmFilesize *int `json:"max_webm_filesize,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Pages *int `json:"pages,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Spoilers *int `json:"spoilers,omitempty"`
	Title *string `json:"title,omitempty"`
	WsBoard *int `json:"ws_board,omitempty"`
}

// Catalog is the typed data model for the catalog entity.
type Catalog struct {
}

// CatalogListMatch is the typed request payload for Catalog.ListTyped.
type CatalogListMatch struct {
	Board string `json:"board"`
}

// Index is the typed data model for the index entity.
type Index struct {
}

// IndexListMatch is the typed request payload for Index.ListTyped.
type IndexListMatch struct {
	Board string `json:"board"`
	Page int `json:"page"`
}

// Thread is the typed data model for the thread entity.
type Thread struct {
}

// ThreadListMatch is the typed request payload for Thread.ListTyped.
type ThreadListMatch struct {
	Board string `json:"board"`
}

// ThreadId is the typed data model for the thread_id entity.
type ThreadId struct {
}

// ThreadIdListMatch is the typed request payload for ThreadId.ListTyped.
type ThreadIdListMatch struct {
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
