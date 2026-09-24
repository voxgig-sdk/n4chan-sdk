

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


describe('ArchiveEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when N4CHAN_TEST_LIVE=TRUE.
  afterEach(liveDelay('N4CHAN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = N4chanSDK.test()
    const ent = testsdk.Archive()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.N4CHAN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'archive.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"archive","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /{board}/archive.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"if_modified_since","or":"if_modified_since","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"board","or":"board","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{board}/archive.json","q":{"exist":["board","if_modified_since"]},"r":{},"s":[{"var":"board"},{"lit":"archive.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"archive","name__orig":"archive","Name":"Archive","name_":"archive","name-":"archive","NAME":"ARCHIVE","index$":0}, {"active":true,"entity":"archive","key$":"BasicArchiveFlow","kind":"basic","name":"BasicArchiveFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"board":"board01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"archive_ref01"}}],"index$":0}]}, 'Archive', {"GET /{board}/archive.json":{"protocol":"http","operationId":"getBoardArchive","responses":{"200":{"description":"Successful response with archived thread IDs","content":{"application/json":{"schema":{"type":"array","items":{"type":"integer","description":"Archived thread ID","key$":"items"},"x-ref":"#/components/schemas/ArchiveResponse"}}}},"304":{"description":"Not Modified - Content has not changed since last request"},"404":{"description":"Board not found or archive not available"},"429":{"description":"Too Many Requests - Rate limit exceeded"}},"parameters":[{"name":"board","in":"path","description":"Board identifier (e.g., 'g' for technology, 'a' for anime)","required":true,"schema":{"type":"string","pattern":"^[a-z0-9]+$"},"x-ref":"#/components/parameters/BoardParameter","index$":0},{"name":"If-Modified-Since","in":"header","description":"HTTP date for conditional requests. Returns 304 if content hasn't been modified.","required":false,"schema":{"type":"string","format":"date-time"},"x-ref":"#/components/parameters/IfModifiedSince","index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let archive_ref01_data = Object.values(setup.data.existing.archive)[0] as any

    // LIST
    const archive_ref01_ent = client.Archive()
    const archive_ref01_match: any = {}
    archive_ref01_match['board'] = setup.idmap['board01']

    const archive_ref01_list = (await archive_ref01_ent.list(archive_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/archive/ArchiveTestData.json')

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
    ['archive01','archive02','archive03','board01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'N4CHAN_TEST_ARCHIVE_ENTID': idmap,
    'N4CHAN_TEST_LIVE': 'FALSE',
    'N4CHAN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['N4CHAN_TEST_ARCHIVE_ENTID']

  const live = 'TRUE' === env.N4CHAN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['N4CHAN_TEST_ARCHIVE_ENTID']
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
  
