<?php
declare(strict_types=1);

// N4chan SDK configuration

class N4chanConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "N4chan",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://a.4cdn.org",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "archive" => [],
                    "board" => [],
                    "catalog" => [],
                    "index" => [],
                    "thread" => [],
                ],
            ],
            "entity" => [
        'archive' => [
          'fields' => [],
          'name' => 'archive',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'if_modified_since',
                        'orig' => 'if_modified_since',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'board',
                        'orig' => 'board',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{board}/archive.json',
                  'parts' => [
                    '{board}',
                    'archive.json',
                  ],
                  'select' => [
                    'exist' => [
                      'board',
                      'if_modified_since',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'board' => [
          'fields' => [
            [
              'name' => 'board',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'board_flags',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'bump_limit',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'cooldowns',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'custom_spoilers',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image_limit',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'is_archived',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_comment_chars',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_filesize',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_webm_duration',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_webm_filesize',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'meta_description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pages',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'per_page',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'spoilers',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ws_board',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'board',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'if_modified_since',
                        'orig' => 'if_modified_since',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/boards.json',
                  'parts' => [
                    'boards.json',
                  ],
                  'select' => [
                    'exist' => [
                      'if_modified_since',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.boards`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'catalog' => [
          'fields' => [
            [
              'name' => 'page',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'threads',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'catalog',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'if_modified_since',
                        'orig' => 'if_modified_since',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'board',
                        'orig' => 'board',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{board}/catalog.json',
                  'parts' => [
                    '{board}',
                    'catalog.json',
                  ],
                  'select' => [
                    'exist' => [
                      'board',
                      'if_modified_since',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'index' => [
          'fields' => [
            [
              'name' => 'posts',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'index',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'if_modified_since',
                        'orig' => 'if_modified_since',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'board',
                        'orig' => 'board',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{board}/{page}.json',
                  'parts' => [
                    '{board}',
                    '{page}.json',
                  ],
                  'select' => [
                    'exist' => [
                      'board',
                      'if_modified_since',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.threads`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'thread' => [
          'fields' => [
            [
              'name' => 'archived',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'archived_on',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'bumplimit',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'capcode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'closed',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'com',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'custom_spoiler',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'ext',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'filedeleted',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'filename',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fsize',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'h',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imagelimit',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'images',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'last_modified',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'm_img',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'md5',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'no',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'now',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'omitted_images',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'omitted_posts',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'page',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'replies',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'resto',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'semantic_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'since4pass',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'spoiler',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'sticky',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'sub',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tag',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'threads',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'tim',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'time',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'tn_h',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'tn_w',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'trip',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'unique_ips',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'w',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'thread',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'if_modified_since',
                        'orig' => 'if_modified_since',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'board',
                        'orig' => 'board',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'thread_id',
                        'orig' => 'thread_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{board}/thread/{threadId}.json',
                  'parts' => [
                    '{board}',
                    'thread',
                    '{threadId}.json',
                  ],
                  'select' => [
                    '$action' => 'thread_id',
                    'exist' => [
                      'board',
                      'if_modified_since',
                      'thread_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.posts`',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'if_modified_since',
                        'orig' => 'if_modified_since',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'board',
                        'orig' => 'board',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{board}/threads.json',
                  'parts' => [
                    '{board}',
                    'threads.json',
                  ],
                  'select' => [
                    'exist' => [
                      'board',
                      'if_modified_since',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'thread',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return N4chanFeatures::make_feature($name);
    }
}
