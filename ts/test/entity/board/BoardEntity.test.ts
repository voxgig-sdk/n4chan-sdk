

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"board","req":false,"short":"Board identifier","type":"`$STRING`","index$":0},{"active":true,"name":"board_flags","req":false,"short":"Board flags configuration","type":"`$OBJECT`","index$":1},{"active":true,"name":"bump_limit","req":false,"short":"Bump limit for threads","type":"`$INTEGER`","index$":2},{"active":true,"name":"cooldowns","req":false,"short":"Cooldown periods for posting","type":"`$OBJECT`","index$":3},{"active":true,"name":"custom_spoilers","req":false,"short":"Number of custom spoiler images","type":"`$INTEGER`","index$":4},{"active":true,"name":"image_limit","req":false,"short":"Image limit for threads","type":"`$INTEGER`","index$":5},{"active":true,"name":"is_archived","req":false,"short":"Archive enabled flag","type":"`$INTEGER`","index$":6},{"active":true,"name":"max_comment_chars","req":false,"short":"Maximum comment length","type":"`$INTEGER`","index$":7},{"active":true,"name":"max_filesize","req":false,"short":"Maximum filesize in bytes","type":"`$INTEGER`","index$":8},{"active":true,"name":"max_webm_duration","req":false,"short":"Maximum WebM duration in seconds","type":"`$INTEGER`","index$":9},{"active":true,"name":"max_webm_filesize","req":false,"short":"Maximum WebM filesize in bytes","type":"`$INTEGER`","index$":10},{"active":true,"name":"meta_description","req":false,"short":"Board meta description","type":"`$STRING`","index$":11},{"active":true,"name":"pages","req":false,"short":"Number of pages","type":"`$INTEGER`","index$":12},{"active":true,"name":"per_page","req":false,"short":"Threads per page","type":"`$INTEGER`","index$":13},{"active":true,"name":"spoilers","req":false,"short":"Custom spoilers enabled flag","type":"`$INTEGER`","index$":14},{"active":true,"name":"title","req":false,"short":"Board title","type":"`$STRING`","index$":15},{"active":true,"name":"ws_board","req":false,"short":"Worksafe board flag (1 for worksafe, 0 for NSFW)","type":"`$INTEGER`","index$":16}],"name":"board","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"if_modified_since","orig":"if_modified_since","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /boards.json","json":"{\"operationId\":\"getBoards\",\"parameters\":[{\"description\":\"HTTP date for conditional requests. Returns 304 if content hasn't been modified.\",\"in\":\"header\",\"name\":\"If-Modified-Since\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"boards\":{\"items\":{\"properties\":{\"board\":{\"description\":\"Board identifier\",\"type\":\"string\"},\"board_flags\":{\"description\":\"Board flags configuration\",\"type\":\"object\"},\"bump_limit\":{\"description\":\"Bump limit for threads\",\"type\":\"integer\"},\"cooldowns\":{\"description\":\"Cooldown periods for posting\",\"type\":\"object\"},\"custom_spoilers\":{\"description\":\"Number of custom spoiler images\",\"type\":\"integer\"},\"image_limit\":{\"description\":\"Image limit for threads\",\"type\":\"integer\"},\"is_archived\":{\"description\":\"Archive enabled flag\",\"type\":\"integer\"},\"max_comment_chars\":{\"description\":\"Maximum comment length\",\"type\":\"integer\"},\"max_filesize\":{\"description\":\"Maximum filesize in bytes\",\"type\":\"integer\"},\"max_webm_duration\":{\"description\":\"Maximum WebM duration in seconds\",\"type\":\"integer\"},\"max_webm_filesize\":{\"description\":\"Maximum WebM filesize in bytes\",\"type\":\"integer\"},\"meta_description\":{\"description\":\"Board meta description\",\"type\":\"string\"},\"pages\":{\"description\":\"Number of pages\",\"type\":\"integer\"},\"per_page\":{\"description\":\"Threads per page\",\"type\":\"integer\"},\"spoilers\":{\"description\":\"Custom spoilers enabled flag\",\"type\":\"integer\"},\"title\":{\"description\":\"Board title\",\"type\":\"string\"},\"ws_board\":{\"description\":\"Worksafe board flag (1 for worksafe, 0 for NSFW)\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with board list\"},\"304\":{\"description\":\"Not Modified - Content has not changed since last request\"},\"429\":{\"description\":\"Too Many Requests - Rate limit exceeded\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/boards.json","segments":[{"lit":"boards.json"}],"select":{"exist":["if_modified_since"]},"transform":{"req":"`reqdata`","res":"`body.boards`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"board","name__orig":"board","Name":"Board","name_":"board","name-":"board","NAME":"BOARD","index$":1}, {"active":true,"entity":"board","key$":"BasicBoardFlow","kind":"basic","name":"BasicBoardFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"board_ref01"}}],"index$":0}]}, 'Board')
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
  
