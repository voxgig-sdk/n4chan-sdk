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
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "archive.json",
									},
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
								"parts": []any{
									"{board}",
									"archive.json",
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
								"segments": []any{
									map[string]any{
										"lit": "boards.json",
									},
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
								"parts": []any{
									"boards.json",
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
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "catalog.json",
									},
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
								"parts": []any{
									"{board}",
									"catalog.json",
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
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "{page}.json",
									},
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
								"parts": []any{
									"{board}",
									"{page}.json",
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
						"short": "Page number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "threads",
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
								"parts": []any{
									"{board}",
									"thread",
									"{threadId}.json",
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
								"segments": []any{
									map[string]any{
										"var": "board",
									},
									map[string]any{
										"lit": "threads.json",
									},
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
								"parts": []any{
									"{board}",
									"threads.json",
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
