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
                "slug" => "n4chan",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
                  'segments' => [
                    [
                      'var' => 'board',
                    ],
                    [
                      'lit' => 'archive.json',
                    ],
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
                  'parts' => [
                    '{board}',
                    'archive.json',
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
              'short' => 'Board identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'board_flags',
              'short' => 'Board flags configuration',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'bump_limit',
              'short' => 'Bump limit for threads',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'cooldowns',
              'short' => 'Cooldown periods for posting',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'custom_spoilers',
              'short' => 'Number of custom spoiler images',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image_limit',
              'short' => 'Image limit for threads',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'is_archived',
              'short' => 'Archive enabled flag',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_comment_chars',
              'short' => 'Maximum comment length',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_filesize',
              'short' => 'Maximum filesize in bytes',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_webm_duration',
              'short' => 'Maximum WebM duration in seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_webm_filesize',
              'short' => 'Maximum WebM filesize in bytes',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'meta_description',
              'short' => 'Board meta description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pages',
              'short' => 'Number of pages',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'per_page',
              'short' => 'Threads per page',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'spoilers',
              'short' => 'Custom spoilers enabled flag',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'title',
              'short' => 'Board title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ws_board',
              'short' => 'Worksafe board flag (1 for worksafe, 0 for NSFW)',
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
                  'segments' => [
                    [
                      'lit' => 'boards.json',
                    ],
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
                  'parts' => [
                    'boards.json',
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
              'short' => 'Page number',
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
                  'segments' => [
                    [
                      'var' => 'board',
                    ],
                    [
                      'lit' => 'catalog.json',
                    ],
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
                  'parts' => [
                    '{board}',
                    'catalog.json',
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
                  'segments' => [
                    [
                      'var' => 'board',
                    ],
                    [
                      'lit' => '{page}.json',
                    ],
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
                  'parts' => [
                    '{board}',
                    '{page}.json',
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
              'name' => 'page',
              'short' => 'Page number',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'threads',
              'type' => '`$ARRAY`',
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
                  'segments' => [
                    [
                      'var' => 'board',
                    ],
                    [
                      'lit' => 'thread',
                    ],
                    [
                      'lit' => '{threadId}.json',
                    ],
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
                  'parts' => [
                    '{board}',
                    'thread',
                    '{threadId}.json',
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
                  'segments' => [
                    [
                      'var' => 'board',
                    ],
                    [
                      'lit' => 'threads.json',
                    ],
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
                  'parts' => [
                    '{board}',
                    'threads.json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
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
