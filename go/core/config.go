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
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "board",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "board_flag",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "bump_limit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "cooldown",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "custom_spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "image_limit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "is_archived",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "max_comment_char",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "max_filesize",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "max_webm_duration",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "max_webm_filesize",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "meta_description",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "page",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "per_page",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "ws_board",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 16,
					},
				},
				"name": "board",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "page",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "thread",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "catalog",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "post",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
				},
				"name": "index",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "page",
											"orig": "page",
											"reqd": true,
											"type": "`$INTEGER`",
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "archived",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "archived_on",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "bumplimit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "capcode",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "closed",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "com",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "country",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "country_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "custom_spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "ext",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "filedeleted",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "filename",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "fsize",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "h",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "image",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "imagelimit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "last_modified",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "m_img",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "md5",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "no",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "now",
						"req": true,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "omitted_image",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "omitted_post",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "page",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "reply",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "resto",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "semantic_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "since4pass",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "spoiler",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "sticky",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "sub",
						"req": false,
						"type": "`$STRING`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "tag",
						"req": false,
						"type": "`$STRING`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "thread",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "tim",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "time",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "tn_h",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "tn_w",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "trip",
						"req": false,
						"type": "`$STRING`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "unique_ip",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "w",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 41,
					},
				},
				"name": "thread",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "thread_id",
											"orig": "thread_id",
											"reqd": true,
											"type": "`$INTEGER`",
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "if_modified_since",
											"orig": "if_modified_since",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "board",
											"orig": "board",
											"reqd": true,
											"type": "`$STRING`",
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
								"index$": 1,
							},
						},
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
