

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


describe('CatalogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when N4CHAN_TEST_LIVE=TRUE.
  afterEach(liveDelay('N4CHAN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = N4chanSDK.test()
    const ent = testsdk.Catalog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.N4CHAN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'catalog.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"page":{"a":true,"h":"Page","n":"page","r":false,"sh":"Page number","t":"`$INTEGER`","key$":"page","index$":0},"threads":{"a":true,"h":"Threads","n":"threads","r":false,"t":"`$ARRAY`","key$":"threads","index$":1}},"name":"catalog","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /{board}/catalog.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"if_modified_since","or":"if_modified_since","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"board","or":"board","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{board}/catalog.json","q":{"exist":["board","if_modified_since"]},"r":{},"s":[{"var":"board"},{"lit":"catalog.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"catalog","name__orig":"catalog","Name":"Catalog","name_":"catalog","name-":"catalog","NAME":"CATALOG","index$":2}, {"active":true,"entity":"catalog","key$":"BasicCatalogFlow","kind":"basic","name":"BasicCatalogFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"board":"board01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"catalog_ref01"}}],"index$":0}]}, 'Catalog', {"GET /{board}/catalog.json":{"protocol":"http","operationId":"getBoardCatalog","responses":{"200":{"description":"Successful response with catalog data","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"page":{"type":"integer","description":"Page number","key$":"page"},"threads":{"type":"array","items":{"type":"object","properties":{"no":{"description":"Post number","type":"integer"},"resto":{"description":"Reply to thread ID (0 for OP)","type":"integer"},"sticky":{"description":"Sticky flag","type":"integer"},"closed":{"description":"Closed flag","type":"integer"},"now":{"description":"Formatted date and time","type":"string"},"time":{"description":"Unix timestamp","type":"integer"},"name":{"description":"Poster name","type":"string"},"trip":{"description":"Tripcode","type":"string"},"id":{"description":"Poster ID","type":"string"},"capcode":{"description":"Capcode (mod, admin, etc.)","type":"string"},"country":{"description":"Country code","type":"string"},"country_name":{"description":"Country name","type":"string"},"sub":{"description":"Subject","type":"string"},"com":{"description":"Comment (HTML escaped)","type":"string"},"tim":{"description":"Unix timestamp for image","type":"integer"},"filename":{"description":"Original filename","type":"string"},"ext":{"description":"File extension","type":"string"},"fsize":{"description":"File size in bytes","type":"integer"},"md5":{"description":"MD5 hash in base64","type":"string"},"w":{"description":"Image width","type":"integer"},"h":{"description":"Image height","type":"integer"},"tn_w":{"description":"Thumbnail width","type":"integer"},"tn_h":{"description":"Thumbnail height","type":"integer"},"filedeleted":{"description":"File deleted flag","type":"integer"},"spoiler":{"description":"Spoiler flag","type":"integer"},"custom_spoiler":{"description":"Custom spoiler ID","type":"integer"},"omitted_posts":{"description":"Number of omitted posts","type":"integer"},"omitted_images":{"description":"Number of omitted images","type":"integer"},"replies":{"description":"Number of replies","type":"integer"},"images":{"description":"Number of images","type":"integer"},"bumplimit":{"description":"Bump limit reached flag","type":"integer"},"imagelimit":{"description":"Image limit reached flag","type":"integer"},"last_modified":{"description":"Unix timestamp of last modification","type":"integer"},"tag":{"description":"Tag","type":"string"},"semantic_url":{"description":"SEO-friendly URL slug","type":"string"},"since4pass":{"description":"Year 4chan pass purchased","type":"integer"},"unique_ips":{"description":"Number of unique poster IPs","type":"integer"},"m_img":{"description":"Mobile optimized image flag","type":"integer"},"archived":{"description":"Archived flag","type":"integer"},"archived_on":{"description":"Unix timestamp when archived","type":"integer"}},"required":["no","time","now"],"x-ref":"#/components/schemas/Post"},"key$":"threads"}},"index$":0},"x-ref":"#/components/schemas/CatalogResponse"}}}},"304":{"description":"Not Modified - Content has not changed since last request"},"404":{"description":"Board not found"},"429":{"description":"Too Many Requests - Rate limit exceeded"}},"parameters":[{"name":"board","in":"path","description":"Board identifier (e.g., 'g' for technology, 'a' for anime)","required":true,"schema":{"type":"string","pattern":"^[a-z0-9]+$"},"x-ref":"#/components/parameters/BoardParameter","index$":0},{"name":"If-Modified-Since","in":"header","description":"HTTP date for conditional requests. Returns 304 if content hasn't been modified.","required":false,"schema":{"type":"string","format":"date-time"},"x-ref":"#/components/parameters/IfModifiedSince","index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let catalog_ref01_data = Object.values(setup.data.existing.catalog)[0] as any

    // LIST
    const catalog_ref01_ent = client.Catalog()
    const catalog_ref01_match: any = {}
    catalog_ref01_match['board'] = setup.idmap['board01']

    const catalog_ref01_list = (await catalog_ref01_ent.list(catalog_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/catalog/CatalogTestData.json')

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
    ['catalog01','catalog02','catalog03','board01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'N4CHAN_TEST_CATALOG_ENTID': idmap,
    'N4CHAN_TEST_LIVE': 'FALSE',
    'N4CHAN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['N4CHAN_TEST_CATALOG_ENTID']

  const live = 'TRUE' === env.N4CHAN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['N4CHAN_TEST_CATALOG_ENTID']
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
  
