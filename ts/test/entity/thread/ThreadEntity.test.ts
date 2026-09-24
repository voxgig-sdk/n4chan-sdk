

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


describe('ThreadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when N4CHAN_TEST_LIVE=TRUE.
  afterEach(liveDelay('N4CHAN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = N4chanSDK.test()
    const ent = testsdk.Thread()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.N4CHAN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'thread.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"page":{"a":true,"h":"Page","n":"page","r":false,"sh":"Page number","t":"`$INTEGER`","key$":"page","index$":0},"threads":{"a":true,"h":"Threads","n":"threads","r":false,"t":"`$ARRAY`","key$":"threads","index$":1}},"name":"thread","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /{board}/threads.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"if_modified_since","or":"if_modified_since","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"board","or":"board","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{board}/threads.json","q":{"exist":["board","if_modified_since"]},"r":{},"s":[{"var":"board"},{"lit":"threads.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"thread","name__orig":"thread","Name":"Thread","name_":"thread","name-":"thread","NAME":"THREAD","index$":4}, {"active":true,"entity":"thread","key$":"BasicThreadFlow","kind":"basic","name":"BasicThreadFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"board":"board01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"thread_ref01"}}],"index$":0}]}, 'Thread', {"GET /{board}/threads.json":{"protocol":"http","operationId":"getThreadList","responses":{"200":{"description":"Successful response with thread list","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"page":{"type":"integer","description":"Page number","key$":"page"},"threads":{"type":"array","items":{"type":"object","properties":{"no":{"type":"integer","description":"Thread ID (OP post number)"},"last_modified":{"type":"integer","description":"Unix timestamp of last modification"},"replies":{"type":"integer","description":"Number of replies"}},"x-ref":"#/components/schemas/ThreadListItem"},"key$":"threads"}},"index$":0},"x-ref":"#/components/schemas/ThreadListResponse"}}}},"304":{"description":"Not Modified - Content has not changed since last request"},"404":{"description":"Board not found"},"429":{"description":"Too Many Requests - Rate limit exceeded"}},"parameters":[{"name":"board","in":"path","description":"Board identifier (e.g., 'g' for technology, 'a' for anime)","required":true,"schema":{"type":"string","pattern":"^[a-z0-9]+$"},"x-ref":"#/components/parameters/BoardParameter","index$":0},{"name":"If-Modified-Since","in":"header","description":"HTTP date for conditional requests. Returns 304 if content hasn't been modified.","required":false,"schema":{"type":"string","format":"date-time"},"x-ref":"#/components/parameters/IfModifiedSince","index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let thread_ref01_data = Object.values(setup.data.existing.thread)[0] as any

    // LIST
    const thread_ref01_ent = client.Thread()
    const thread_ref01_match: any = {}
    thread_ref01_match['board'] = setup.idmap['board01']

    const thread_ref01_list = (await thread_ref01_ent.list(thread_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/thread/ThreadTestData.json')

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
    ['thread01','thread02','thread03','board01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'N4CHAN_TEST_THREAD_ENTID': idmap,
    'N4CHAN_TEST_LIVE': 'FALSE',
    'N4CHAN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['N4CHAN_TEST_THREAD_ENTID']

  const live = 'TRUE' === env.N4CHAN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['N4CHAN_TEST_THREAD_ENTID']
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
  
