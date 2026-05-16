package core

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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "board_flag",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "bump_limit",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "cooldown",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "custom_spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "image_limit",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "is_archived",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "max_comment_char",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "max_filesize",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "max_webm_duration",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "max_webm_filesize",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "meta_description",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "page",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "per_page",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "ws_board",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 16,
					},
				},
				"name": "board",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "thread",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "catalog",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"index": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "post",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 0,
					},
				},
				"name": "index",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "page",
											"orig": "page",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "archived_on",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "bumplimit",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "capcode",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "closed",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "com",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "country",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "country_name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "custom_spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "ext",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "filedeleted",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "filename",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "fsize",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "h",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "image",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "imagelimit",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "last_modified",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "m_img",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "md5",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 19,
					},
					map[string]any{
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 20,
					},
					map[string]any{
						"name": "no",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 21,
					},
					map[string]any{
						"name": "now",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 22,
					},
					map[string]any{
						"name": "omitted_image",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 23,
					},
					map[string]any{
						"name": "omitted_post",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 24,
					},
					map[string]any{
						"name": "page",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 25,
					},
					map[string]any{
						"name": "reply",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 26,
					},
					map[string]any{
						"name": "resto",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 27,
					},
					map[string]any{
						"name": "semantic_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 28,
					},
					map[string]any{
						"name": "since4pass",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 29,
					},
					map[string]any{
						"name": "spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 30,
					},
					map[string]any{
						"name": "sticky",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 31,
					},
					map[string]any{
						"name": "sub",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 32,
					},
					map[string]any{
						"name": "tag",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 33,
					},
					map[string]any{
						"name": "thread",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 34,
					},
					map[string]any{
						"name": "tim",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 35,
					},
					map[string]any{
						"name": "time",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 36,
					},
					map[string]any{
						"name": "tn_h",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 37,
					},
					map[string]any{
						"name": "tn_w",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 38,
					},
					map[string]any{
						"name": "trip",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 39,
					},
					map[string]any{
						"name": "unique_ip",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 40,
					},
					map[string]any{
						"name": "w",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 41,
					},
				},
				"name": "thread",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "list",
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
