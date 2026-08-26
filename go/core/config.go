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
			"slug": "n4chan",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"short": "Board identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "board_flags",
						"short": "Board flags configuration",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bump_limit",
						"short": "Bump limit for threads",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "cooldowns",
						"short": "Cooldown periods for posting",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "custom_spoilers",
						"short": "Number of custom spoiler images",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image_limit",
						"short": "Image limit for threads",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_archived",
						"short": "Archive enabled flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_comment_chars",
						"short": "Maximum comment length",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_filesize",
						"short": "Maximum filesize in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_webm_duration",
						"short": "Maximum WebM duration in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_webm_filesize",
						"short": "Maximum WebM filesize in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "meta_description",
						"short": "Board meta description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pages",
						"short": "Number of pages",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "per_page",
						"short": "Threads per page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "spoilers",
						"short": "Custom spoilers enabled flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"short": "Board title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ws_board",
						"short": "Worksafe board flag (1 for worksafe, 0 for NSFW)",
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
						"short": "Page number",
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
						"short": "Archived flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "archived_on",
						"short": "Unix timestamp when archived",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "bumplimit",
						"short": "Bump limit reached flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "capcode",
						"short": "Capcode (mod, admin, etc.)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "closed",
						"short": "Closed flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "com",
						"short": "Comment (HTML escaped)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country",
						"short": "Country code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country_name",
						"short": "Country name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_spoiler",
						"short": "Custom spoiler ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ext",
						"short": "File extension",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "filedeleted",
						"short": "File deleted flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "filename",
						"short": "Original filename",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fsize",
						"short": "File size in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "h",
						"short": "Image height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "Poster ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imagelimit",
						"short": "Image limit reached flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "images",
						"short": "Number of images",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "last_modified",
						"short": "Unix timestamp of last modification",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "m_img",
						"short": "Mobile optimized image flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "md5",
						"short": "MD5 hash in base64",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Poster name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "no",
						"req": true,
						"short": "Post number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "now",
						"req": true,
						"short": "Formatted date and time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "omitted_images",
						"short": "Number of omitted images",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "omitted_posts",
						"short": "Number of omitted posts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "page",
						"short": "Page number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "replies",
						"short": "Number of replies",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "resto",
						"short": "Reply to thread ID (0 for OP)",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "semantic_url",
						"short": "SEO-friendly URL slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "since4pass",
						"short": "Year 4chan pass purchased",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "spoiler",
						"short": "Spoiler flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sticky",
						"short": "Sticky flag",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sub",
						"short": "Subject",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tag",
						"short": "Tag",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "threads",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tim",
						"short": "Unix timestamp for image",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "time",
						"req": true,
						"short": "Unix timestamp",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tn_h",
						"short": "Thumbnail height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tn_w",
						"short": "Thumbnail width",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "trip",
						"short": "Tripcode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unique_ips",
						"short": "Number of unique poster IPs",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "w",
						"short": "Image width",
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
