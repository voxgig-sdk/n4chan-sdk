package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "N4chan",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://a.4cdn.org",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"archive": map[string]any{},
				"board": map[string]any{},
				"catalog": map[string]any{},
				"index": map[string]any{},
				"thread": map[string]any{},
			},
		},
		"entity": map[string]any{
			"archive": map[string]any{
				"fields": []any{},
				"name": "archive",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/archive.json",
								"parts": []any{
									"{board}",
									"archive.json",
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"board": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "board",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "board_flags",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bump_limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "cooldowns",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "custom_spoilers",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image_limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_archived",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_comment_chars",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_filesize",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_webm_duration",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_webm_filesize",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "meta_description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pages",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "per_page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "spoilers",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ws_board",
						"type": "`$INTEGER`",
					},
				},
				"name": "board",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards.json",
								"parts": []any{
									"boards.json",
								},
								"select": map[string]any{
									"exist": []any{
										"if_modified_since",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.boards`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"catalog": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "threads",
						"type": "`$ARRAY`",
					},
				},
				"name": "catalog",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/catalog.json",
								"parts": []any{
									"{board}",
									"catalog.json",
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"index": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "posts",
						"type": "`$ARRAY`",
					},
				},
				"name": "index",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "page",
											"orig": "page",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/{page}.json",
								"parts": []any{
									"{board}",
									"{page}.json",
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threads`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"thread": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "archived_on",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "bumplimit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "capcode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "closed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "com",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_spoiler",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ext",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "filedeleted",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "filename",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fsize",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imagelimit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "images",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "last_modified",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "m_img",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "md5",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "no",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "now",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "omitted_images",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "omitted_posts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "replies",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "resto",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "semantic_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "since4pass",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "spoiler",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sticky",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sub",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tag",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "threads",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tim",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "time",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tn_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tn_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "trip",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unique_ips",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "w",
						"type": "`$INTEGER`",
					},
				},
				"name": "thread",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/thread/{threadId}.json",
								"parts": []any{
									"{board}",
									"thread",
									"{threadId}.json",
								},
								"select": map[string]any{
									"$action": "thread_id",
									"exist": []any{
										"board",
										"if_modified_since",
										"thread_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.posts`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/threads.json",
								"parts": []any{
									"{board}",
									"threads.json",
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"thread",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
