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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
				"thread_id": map[string]any{},
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
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/archive.json",
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "archive.json",
									},
								},
								"parts": []any{
									"{board}",
									"archive.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
									},
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
						"title": "Board",
						"type": "`$STRING`",
						"short": "Board identifier",
					},
					map[string]any{
						"name": "board_flags",
						"title": "Board Flags",
						"type": "`$OBJECT`",
						"short": "Board flags configuration",
					},
					map[string]any{
						"name": "bump_limit",
						"title": "Bump Limit",
						"type": "`$INTEGER`",
						"short": "Bump limit for threads",
					},
					map[string]any{
						"name": "cooldowns",
						"title": "Cooldowns",
						"type": "`$OBJECT`",
						"short": "Cooldown periods for posting",
					},
					map[string]any{
						"name": "custom_spoilers",
						"title": "Custom Spoilers",
						"type": "`$INTEGER`",
						"short": "Number of custom spoiler images",
					},
					map[string]any{
						"name": "image_limit",
						"title": "Image Limit",
						"type": "`$INTEGER`",
						"short": "Image limit for threads",
					},
					map[string]any{
						"name": "is_archived",
						"title": "Is Archived",
						"type": "`$INTEGER`",
						"short": "Archive enabled flag",
					},
					map[string]any{
						"name": "max_comment_chars",
						"title": "Max Comment Chars",
						"type": "`$INTEGER`",
						"short": "Maximum comment length",
					},
					map[string]any{
						"name": "max_filesize",
						"title": "Max Filesize",
						"type": "`$INTEGER`",
						"short": "Maximum filesize in bytes",
					},
					map[string]any{
						"name": "max_webm_duration",
						"title": "Max Webm Duration",
						"type": "`$INTEGER`",
						"short": "Maximum WebM duration in seconds",
					},
					map[string]any{
						"name": "max_webm_filesize",
						"title": "Max Webm Filesize",
						"type": "`$INTEGER`",
						"short": "Maximum WebM filesize in bytes",
					},
					map[string]any{
						"name": "meta_description",
						"title": "Meta Description",
						"type": "`$STRING`",
						"short": "Board meta description",
					},
					map[string]any{
						"name": "pages",
						"title": "Pages",
						"type": "`$INTEGER`",
						"short": "Number of pages",
					},
					map[string]any{
						"name": "per_page",
						"title": "Per Page",
						"type": "`$INTEGER`",
						"short": "Threads per page",
					},
					map[string]any{
						"name": "spoilers",
						"title": "Spoilers",
						"type": "`$INTEGER`",
						"short": "Custom spoilers enabled flag",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Board title",
					},
					map[string]any{
						"name": "ws_board",
						"title": "Ws Board",
						"type": "`$INTEGER`",
						"short": "Worksafe board flag (1 for worksafe, 0 for NSFW)",
					},
				},
				"name": "board",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards.json",
								"segments": []any{
									map[string]any{
										"lit": "boards.json",
									},
								},
								"parts": []any{
									"boards.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.boards`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"if_modified_since",
									},
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
						"title": "Page",
						"type": "`$INTEGER`",
						"short": "Page number",
					},
					map[string]any{
						"name": "threads",
						"title": "Threads",
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
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/catalog.json",
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "catalog.json",
									},
								},
								"parts": []any{
									"{board}",
									"catalog.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
									},
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
						"title": "Posts",
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
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/{page}.json",
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "{page}.json",
									},
								},
								"parts": []any{
									"{board}",
									"{page}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.threads`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
										"page",
									},
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
						"name": "page",
						"title": "Page",
						"type": "`$INTEGER`",
						"short": "Page number",
					},
					map[string]any{
						"name": "threads",
						"title": "Threads",
						"type": "`$ARRAY`",
					},
				},
				"name": "thread",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/threads.json",
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "threads.json",
									},
								},
								"parts": []any{
									"{board}",
									"threads.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"thread_id": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$INTEGER`",
						"short": "Archived flag",
					},
					map[string]any{
						"name": "archived_on",
						"title": "Archived On",
						"type": "`$INTEGER`",
						"short": "Unix timestamp when archived",
					},
					map[string]any{
						"name": "bumplimit",
						"title": "Bumplimit",
						"type": "`$INTEGER`",
						"short": "Bump limit reached flag",
					},
					map[string]any{
						"name": "capcode",
						"title": "Capcode",
						"type": "`$STRING`",
						"short": "Capcode (mod, admin, etc.)",
					},
					map[string]any{
						"name": "closed",
						"title": "Closed",
						"type": "`$INTEGER`",
						"short": "Closed flag",
					},
					map[string]any{
						"name": "com",
						"title": "Com",
						"type": "`$STRING`",
						"short": "Comment (HTML escaped)",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"short": "Country code",
					},
					map[string]any{
						"name": "country_name",
						"title": "Country Name",
						"type": "`$STRING`",
						"short": "Country name",
					},
					map[string]any{
						"name": "custom_spoiler",
						"title": "Custom Spoiler",
						"type": "`$INTEGER`",
						"short": "Custom spoiler ID",
					},
					map[string]any{
						"name": "ext",
						"title": "Ext",
						"type": "`$STRING`",
						"short": "File extension",
					},
					map[string]any{
						"name": "filedeleted",
						"title": "Filedeleted",
						"type": "`$INTEGER`",
						"short": "File deleted flag",
					},
					map[string]any{
						"name": "filename",
						"title": "Filename",
						"type": "`$STRING`",
						"short": "Original filename",
					},
					map[string]any{
						"name": "fsize",
						"title": "Fsize",
						"type": "`$INTEGER`",
						"short": "File size in bytes",
					},
					map[string]any{
						"name": "h",
						"title": "H",
						"type": "`$INTEGER`",
						"short": "Image height",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Poster ID",
					},
					map[string]any{
						"name": "imagelimit",
						"title": "Imagelimit",
						"type": "`$INTEGER`",
						"short": "Image limit reached flag",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$INTEGER`",
						"short": "Number of images",
					},
					map[string]any{
						"name": "last_modified",
						"title": "Last Modified",
						"type": "`$INTEGER`",
						"short": "Unix timestamp of last modification",
					},
					map[string]any{
						"name": "m_img",
						"title": "M Img",
						"type": "`$INTEGER`",
						"short": "Mobile optimized image flag",
					},
					map[string]any{
						"name": "md5",
						"title": "Md5",
						"type": "`$STRING`",
						"short": "MD5 hash in base64",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Poster name",
					},
					map[string]any{
						"name": "no",
						"title": "No",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Post number",
					},
					map[string]any{
						"name": "now",
						"title": "Now",
						"type": "`$STRING`",
						"req": true,
						"short": "Formatted date and time",
					},
					map[string]any{
						"name": "omitted_images",
						"title": "Omitted Images",
						"type": "`$INTEGER`",
						"short": "Number of omitted images",
					},
					map[string]any{
						"name": "omitted_posts",
						"title": "Omitted Posts",
						"type": "`$INTEGER`",
						"short": "Number of omitted posts",
					},
					map[string]any{
						"name": "replies",
						"title": "Replies",
						"type": "`$INTEGER`",
						"short": "Number of replies",
					},
					map[string]any{
						"name": "resto",
						"title": "Resto",
						"type": "`$INTEGER`",
						"short": "Reply to thread ID (0 for OP)",
					},
					map[string]any{
						"name": "semantic_url",
						"title": "Semantic Url",
						"type": "`$STRING`",
						"short": "SEO-friendly URL slug",
					},
					map[string]any{
						"name": "since4pass",
						"title": "Since4pass",
						"type": "`$INTEGER`",
						"short": "Year 4chan pass purchased",
					},
					map[string]any{
						"name": "spoiler",
						"title": "Spoiler",
						"type": "`$INTEGER`",
						"short": "Spoiler flag",
					},
					map[string]any{
						"name": "sticky",
						"title": "Sticky",
						"type": "`$INTEGER`",
						"short": "Sticky flag",
					},
					map[string]any{
						"name": "sub",
						"title": "Sub",
						"type": "`$STRING`",
						"short": "Subject",
					},
					map[string]any{
						"name": "tag",
						"title": "Tag",
						"type": "`$STRING`",
						"short": "Tag",
					},
					map[string]any{
						"name": "tim",
						"title": "Tim",
						"type": "`$INTEGER`",
						"short": "Unix timestamp for image",
					},
					map[string]any{
						"name": "time",
						"title": "Time",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp",
					},
					map[string]any{
						"name": "tn_h",
						"title": "Tn H",
						"type": "`$INTEGER`",
						"short": "Thumbnail height",
					},
					map[string]any{
						"name": "tn_w",
						"title": "Tn W",
						"type": "`$INTEGER`",
						"short": "Thumbnail width",
					},
					map[string]any{
						"name": "trip",
						"title": "Trip",
						"type": "`$STRING`",
						"short": "Tripcode",
					},
					map[string]any{
						"name": "unique_ips",
						"title": "Unique Ips",
						"type": "`$INTEGER`",
						"short": "Number of unique poster IPs",
					},
					map[string]any{
						"name": "w",
						"title": "W",
						"type": "`$INTEGER`",
						"short": "Image width",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "thread_id",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{board}/thread/{threadId}.json",
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "thread",
									},
									map[string]any{
										"lit": "{threadId}.json",
									},
								},
								"parts": []any{
									"{board}",
									"thread",
									"{threadId}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.posts`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "thread_id",
											"orig": "thread_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board",
										"if_modified_since",
										"thread_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
