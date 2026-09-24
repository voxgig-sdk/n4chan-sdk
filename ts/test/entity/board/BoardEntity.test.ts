

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { N4chanSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('BoardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when N4CHAN_TEST_LIVE=TRUE.
  afterEach(liveDelay('N4CHAN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = N4chanSDK.test()
    const ent = testsdk.Board()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.N4CHAN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'board.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"board":{"a":true,"h":"Board","n":"board","r":false,"sh":"Board identifier","t":"`$STRING`","key$":"board","index$":0},"board_flags":{"a":true,"h":"Board Flags","n":"board_flags","r":false,"sh":"Board flags configuration","t":"`$OBJECT`","key$":"board_flags","index$":1},"bump_limit":{"a":true,"h":"Bump Limit","n":"bump_limit","r":false,"sh":"Bump limit for threads","t":"`$INTEGER`","key$":"bump_limit","index$":2},"cooldowns":{"a":true,"h":"Cooldowns","n":"cooldowns","r":false,"sh":"Cooldown periods for posting","t":"`$OBJECT`","key$":"cooldowns","index$":3},"custom_spoilers":{"a":true,"h":"Custom Spoilers","n":"custom_spoilers","r":false,"sh":"Number of custom spoiler images","t":"`$INTEGER`","key$":"custom_spoilers","index$":4},"image_limit":{"a":true,"h":"Image Limit","n":"image_limit","r":false,"sh":"Image limit for threads","t":"`$INTEGER`","key$":"image_limit","index$":5},"is_archived":{"a":true,"h":"Is Archived","n":"is_archived","r":false,"sh":"Archive enabled flag","t":"`$INTEGER`","key$":"is_archived","index$":6},"max_comment_chars":{"a":true,"h":"Max Comment Chars","n":"max_comment_chars","r":false,"sh":"Maximum comment length","t":"`$INTEGER`","key$":"max_comment_chars","index$":7},"max_filesize":{"a":true,"h":"Max Filesize","n":"max_filesize","r":false,"sh":"Maximum filesize in bytes","t":"`$INTEGER`","key$":"max_filesize","index$":8},"max_webm_duration":{"a":true,"h":"Max Webm Duration","n":"max_webm_duration","r":false,"sh":"Maximum WebM duration in seconds","t":"`$INTEGER`","key$":"max_webm_duration","index$":9},"max_webm_filesize":{"a":true,"h":"Max Webm Filesize","n":"max_webm_filesize","r":false,"sh":"Maximum WebM filesize in bytes","t":"`$INTEGER`","key$":"max_webm_filesize","index$":10},"meta_description":{"a":true,"h":"Meta Description","n":"meta_description","r":false,"sh":"Board meta description","t":"`$STRING`","key$":"meta_description","index$":11},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"Number of pages","t":"`$INTEGER`","key$":"pages","index$":12},"per_page":{"a":true,"h":"Per Page","n":"per_page","r":false,"sh":"Threads per page","t":"`$INTEGER`","key$":"per_page","index$":13},"spoilers":{"a":true,"h":"Spoilers","n":"spoilers","r":false,"sh":"Custom spoilers enabled flag","t":"`$INTEGER`","key$":"spoilers","index$":14},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Board title","t":"`$STRING`","key$":"title","index$":15},"ws_board":{"a":true,"h":"Ws Board","n":"ws_board","r":false,"sh":"Worksafe board flag (1 for worksafe, 0 for NSFW)","t":"`$INTEGER`","key$":"ws_board","index$":16}},"name":"board","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /boards.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"if_modified_since","or":"if_modified_since","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/boards.json","q":{"exist":["if_modified_since"]},"r":{},"s":[{"lit":"boards.json"}],"t":{"req":"`reqdata`","res":"`body.boards`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"board","name__orig":"board","Name":"Board","name_":"board","name-":"board","NAME":"BOARD","index$":1}, {"active":true,"entity":"board","key$":"BasicBoardFlow","kind":"basic","name":"BasicBoardFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"board_ref01"}}],"index$":0}]}, 'Board', {"GET /boards.json":{"protocol":"http","operationId":"getBoards","responses":{"200":{"description":"Successful response with board list","content":{"application/json":{"schema":{"type":"object","properties":{"boards":{"items":{"properties":{"board":{"description":"Board identifier","type":"string","key$":"board"},"board_flags":{"description":"Board flags configuration","type":"object","key$":"board_flags"},"bump_limit":{"description":"Bump limit for threads","type":"integer","key$":"bump_limit"},"cooldowns":{"description":"Cooldown periods for posting","type":"object","key$":"cooldowns"},"custom_spoilers":{"description":"Number of custom spoiler images","type":"integer","key$":"custom_spoilers"},"image_limit":{"description":"Image limit for threads","type":"integer","key$":"image_limit"},"is_archived":{"description":"Archive enabled flag","type":"integer","key$":"is_archived"},"max_comment_chars":{"description":"Maximum comment length","type":"integer","key$":"max_comment_chars"},"max_filesize":{"description":"Maximum filesize in bytes","type":"integer","key$":"max_filesize"},"max_webm_duration":{"description":"Maximum WebM duration in seconds","type":"integer","key$":"max_webm_duration"},"max_webm_filesize":{"description":"Maximum WebM filesize in bytes","type":"integer","key$":"max_webm_filesize"},"meta_description":{"description":"Board meta description","type":"string","key$":"meta_description"},"pages":{"description":"Number of pages","type":"integer","key$":"pages"},"per_page":{"description":"Threads per page","type":"integer","key$":"per_page"},"spoilers":{"description":"Custom spoilers enabled flag","type":"integer","key$":"spoilers"},"title":{"description":"Board title","type":"string","key$":"title"},"ws_board":{"description":"Worksafe board flag (1 for worksafe, 0 for NSFW)","type":"integer","key$":"ws_board"}},"type":"object","x-ref":"#/components/schemas/Board","index$":0},"key$":"boards","type":"array"}},"x-ref":"#/components/schemas/BoardsResponse"}}}},"304":{"description":"Not Modified - Content has not changed since last request"},"429":{"description":"Too Many Requests - Rate limit exceeded"}},"parameters":[{"name":"If-Modified-Since","in":"header","description":"HTTP date for conditional requests. Returns 304 if content hasn't been modified.","required":false,"schema":{"type":"string","format":"date-time"},"x-ref":"#/components/parameters/IfModifiedSince","index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let board_ref01_data = Object.values(setup.data.existing.board)[0] as any

    // LIST
    const board_ref01_ent = client.Board()
    const board_ref01_match: any = {}

    const board_ref01_list = (await board_ref01_ent.list(board_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/board/BoardTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = N4chanSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'N4CHAN_TEST_BOARD_ENTID': idmap,
    'N4CHAN_TEST_LIVE': 'FALSE',
    'N4CHAN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['N4CHAN_TEST_BOARD_ENTID']

  const live = 'TRUE' === env.N4CHAN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['N4CHAN_TEST_BOARD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new N4chanSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.N4CHAN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
