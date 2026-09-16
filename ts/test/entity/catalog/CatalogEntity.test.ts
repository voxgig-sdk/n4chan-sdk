

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"page","req":false,"short":"Page number","type":"`$INTEGER`","index$":0},{"active":true,"name":"threads","req":false,"type":"`$ARRAY`","index$":1}],"name":"catalog","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"if_modified_since","orig":"if_modified_since","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"board","orig":"board","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{board}/catalog.json","json":"{\"operationId\":\"getBoardCatalog\",\"parameters\":[{\"description\":\"Board identifier (e.g., 'g' for technology, 'a' for anime)\",\"in\":\"path\",\"name\":\"board\",\"required\":true,\"schema\":{\"pattern\":\"^[a-z0-9]+$\",\"type\":\"string\"}},{\"description\":\"HTTP date for conditional requests. Returns 304 if content hasn't been modified.\",\"in\":\"header\",\"name\":\"If-Modified-Since\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"page\":{\"description\":\"Page number\",\"type\":\"integer\"},\"threads\":{\"items\":{\"properties\":{\"archived\":{\"description\":\"Archived flag\",\"type\":\"integer\"},\"archived_on\":{\"description\":\"Unix timestamp when archived\",\"type\":\"integer\"},\"bumplimit\":{\"description\":\"Bump limit reached flag\",\"type\":\"integer\"},\"capcode\":{\"description\":\"Capcode (mod, admin, etc.)\",\"type\":\"string\"},\"closed\":{\"description\":\"Closed flag\",\"type\":\"integer\"},\"com\":{\"description\":\"Comment (HTML escaped)\",\"type\":\"string\"},\"country\":{\"description\":\"Country code\",\"type\":\"string\"},\"country_name\":{\"description\":\"Country name\",\"type\":\"string\"},\"custom_spoiler\":{\"description\":\"Custom spoiler ID\",\"type\":\"integer\"},\"ext\":{\"description\":\"File extension\",\"type\":\"string\"},\"filedeleted\":{\"description\":\"File deleted flag\",\"type\":\"integer\"},\"filename\":{\"description\":\"Original filename\",\"type\":\"string\"},\"fsize\":{\"description\":\"File size in bytes\",\"type\":\"integer\"},\"h\":{\"description\":\"Image height\",\"type\":\"integer\"},\"id\":{\"description\":\"Poster ID\",\"type\":\"string\"},\"imagelimit\":{\"description\":\"Image limit reached flag\",\"type\":\"integer\"},\"images\":{\"description\":\"Number of images\",\"type\":\"integer\"},\"last_modified\":{\"description\":\"Unix timestamp of last modification\",\"type\":\"integer\"},\"m_img\":{\"description\":\"Mobile optimized image flag\",\"type\":\"integer\"},\"md5\":{\"description\":\"MD5 hash in base64\",\"type\":\"string\"},\"name\":{\"description\":\"Poster name\",\"type\":\"string\"},\"no\":{\"description\":\"Post number\",\"type\":\"integer\"},\"now\":{\"description\":\"Formatted date and time\",\"type\":\"string\"},\"omitted_images\":{\"description\":\"Number of omitted images\",\"type\":\"integer\"},\"omitted_posts\":{\"description\":\"Number of omitted posts\",\"type\":\"integer\"},\"replies\":{\"description\":\"Number of replies\",\"type\":\"integer\"},\"resto\":{\"description\":\"Reply to thread ID (0 for OP)\",\"type\":\"integer\"},\"semantic_url\":{\"description\":\"SEO-friendly URL slug\",\"type\":\"string\"},\"since4pass\":{\"description\":\"Year 4chan pass purchased\",\"type\":\"integer\"},\"spoiler\":{\"description\":\"Spoiler flag\",\"type\":\"integer\"},\"sticky\":{\"description\":\"Sticky flag\",\"type\":\"integer\"},\"sub\":{\"description\":\"Subject\",\"type\":\"string\"},\"tag\":{\"description\":\"Tag\",\"type\":\"string\"},\"tim\":{\"description\":\"Unix timestamp for image\",\"type\":\"integer\"},\"time\":{\"description\":\"Unix timestamp\",\"type\":\"integer\"},\"tn_h\":{\"description\":\"Thumbnail height\",\"type\":\"integer\"},\"tn_w\":{\"description\":\"Thumbnail width\",\"type\":\"integer\"},\"trip\":{\"description\":\"Tripcode\",\"type\":\"string\"},\"unique_ips\":{\"description\":\"Number of unique poster IPs\",\"type\":\"integer\"},\"w\":{\"description\":\"Image width\",\"type\":\"integer\"}},\"required\":[\"no\",\"time\",\"now\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with catalog data\"},\"304\":{\"description\":\"Not Modified - Content has not changed since last request\"},\"404\":{\"description\":\"Board not found\"},\"429\":{\"description\":\"Too Many Requests - Rate limit exceeded\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{board}/catalog.json","segments":[{"var":"board"},{"lit":"catalog.json"}],"select":{"exist":["board","if_modified_since"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"catalog","name__orig":"catalog","Name":"Catalog","name_":"catalog","name-":"catalog","NAME":"CATALOG","index$":2}, {"active":true,"entity":"catalog","key$":"BasicCatalogFlow","kind":"basic","name":"BasicCatalogFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"board":"board01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"catalog_ref01"}}],"index$":0}]}, 'Catalog')
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
    ['catalog01','catalog02','catalog03'],
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
  
