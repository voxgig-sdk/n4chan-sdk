

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


describe('ThreadIdEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when N4CHAN_TEST_LIVE=TRUE.
  afterEach(liveDelay('N4CHAN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = N4chanSDK.test()
    const ent = testsdk.ThreadId()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.N4CHAN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'thread_id.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"Archived flag","t":"`$INTEGER`","key$":"archived","index$":0},"archived_on":{"a":true,"h":"Archived On","n":"archived_on","r":false,"sh":"Unix timestamp when archived","t":"`$INTEGER`","key$":"archived_on","index$":1},"bumplimit":{"a":true,"h":"Bumplimit","n":"bumplimit","r":false,"sh":"Bump limit reached flag","t":"`$INTEGER`","key$":"bumplimit","index$":2},"capcode":{"a":true,"h":"Capcode","n":"capcode","r":false,"sh":"Capcode (mod, admin, etc.)","t":"`$STRING`","key$":"capcode","index$":3},"closed":{"a":true,"h":"Closed","n":"closed","r":false,"sh":"Closed flag","t":"`$INTEGER`","key$":"closed","index$":4},"com":{"a":true,"h":"Com","n":"com","r":false,"sh":"Comment (HTML escaped)","t":"`$STRING`","key$":"com","index$":5},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country code","t":"`$STRING`","key$":"country","index$":6},"country_name":{"a":true,"h":"Country Name","n":"country_name","r":false,"sh":"Country name","t":"`$STRING`","key$":"country_name","index$":7},"custom_spoiler":{"a":true,"h":"Custom Spoiler","n":"custom_spoiler","r":false,"sh":"Custom spoiler ID","t":"`$INTEGER`","key$":"custom_spoiler","index$":8},"ext":{"a":true,"h":"Ext","n":"ext","r":false,"sh":"File extension","t":"`$STRING`","key$":"ext","index$":9},"filedeleted":{"a":true,"h":"Filedeleted","n":"filedeleted","r":false,"sh":"File deleted flag","t":"`$INTEGER`","key$":"filedeleted","index$":10},"filename":{"a":true,"h":"Filename","n":"filename","r":false,"sh":"Original filename","t":"`$STRING`","key$":"filename","index$":11},"fsize":{"a":true,"h":"Fsize","n":"fsize","r":false,"sh":"File size in bytes","t":"`$INTEGER`","key$":"fsize","index$":12},"h":{"a":true,"h":"H","n":"h","r":false,"sh":"Image height","t":"`$INTEGER`","key$":"h","index$":13},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Poster ID","t":"`$STRING`","key$":"id","index$":14},"imagelimit":{"a":true,"h":"Imagelimit","n":"imagelimit","r":false,"sh":"Image limit reached flag","t":"`$INTEGER`","key$":"imagelimit","index$":15},"images":{"a":true,"h":"Images","n":"images","r":false,"sh":"Number of images","t":"`$INTEGER`","key$":"images","index$":16},"last_modified":{"a":true,"h":"Last Modified","n":"last_modified","r":false,"sh":"Unix timestamp of last modification","t":"`$INTEGER`","key$":"last_modified","index$":17},"m_img":{"a":true,"h":"M Img","n":"m_img","r":false,"sh":"Mobile optimized image flag","t":"`$INTEGER`","key$":"m_img","index$":18},"md5":{"a":true,"h":"Md5","n":"md5","r":false,"sh":"MD5 hash in base64","t":"`$STRING`","key$":"md5","index$":19},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Poster name","t":"`$STRING`","key$":"name","index$":20},"no":{"a":true,"h":"No","n":"no","r":true,"sh":"Post number","t":"`$INTEGER`","key$":"no","index$":21},"now":{"a":true,"h":"Now","n":"now","r":true,"sh":"Formatted date and time","t":"`$STRING`","key$":"now","index$":22},"omitted_images":{"a":true,"h":"Omitted Images","n":"omitted_images","r":false,"sh":"Number of omitted images","t":"`$INTEGER`","key$":"omitted_images","index$":23},"omitted_posts":{"a":true,"h":"Omitted Posts","n":"omitted_posts","r":false,"sh":"Number of omitted posts","t":"`$INTEGER`","key$":"omitted_posts","index$":24},"replies":{"a":true,"h":"Replies","n":"replies","r":false,"sh":"Number of replies","t":"`$INTEGER`","key$":"replies","index$":25},"resto":{"a":true,"h":"Resto","n":"resto","r":false,"sh":"Reply to thread ID (0 for OP)","t":"`$INTEGER`","key$":"resto","index$":26},"semantic_url":{"a":true,"h":"Semantic Url","n":"semantic_url","r":false,"sh":"SEO-friendly URL slug","t":"`$STRING`","key$":"semantic_url","index$":27},"since4pass":{"a":true,"h":"Since4pass","n":"since4pass","r":false,"sh":"Year 4chan pass purchased","t":"`$INTEGER`","key$":"since4pass","index$":28},"spoiler":{"a":true,"h":"Spoiler","n":"spoiler","r":false,"sh":"Spoiler flag","t":"`$INTEGER`","key$":"spoiler","index$":29},"sticky":{"a":true,"h":"Sticky","n":"sticky","r":false,"sh":"Sticky flag","t":"`$INTEGER`","key$":"sticky","index$":30},"sub":{"a":true,"h":"Sub","n":"sub","r":false,"sh":"Subject","t":"`$STRING`","key$":"sub","index$":31},"tag":{"a":true,"h":"Tag","n":"tag","r":false,"sh":"Tag","t":"`$STRING`","key$":"tag","index$":32},"tim":{"a":true,"h":"Tim","n":"tim","r":false,"sh":"Unix timestamp for image","t":"`$INTEGER`","key$":"tim","index$":33},"time":{"a":true,"h":"Time","n":"time","r":true,"sh":"Unix timestamp","t":"`$INTEGER`","key$":"time","index$":34},"tn_h":{"a":true,"h":"Tn H","n":"tn_h","r":false,"sh":"Thumbnail height","t":"`$INTEGER`","key$":"tn_h","index$":35},"tn_w":{"a":true,"h":"Tn W","n":"tn_w","r":false,"sh":"Thumbnail width","t":"`$INTEGER`","key$":"tn_w","index$":36},"trip":{"a":true,"h":"Trip","n":"trip","r":false,"sh":"Tripcode","t":"`$STRING`","key$":"trip","index$":37},"unique_ips":{"a":true,"h":"Unique Ips","n":"unique_ips","r":false,"sh":"Number of unique poster IPs","t":"`$INTEGER`","key$":"unique_ips","index$":38},"w":{"a":true,"h":"W","n":"w","r":false,"sh":"Image width","t":"`$INTEGER`","key$":"w","index$":39}},"id":{"field":"id","name":"id"},"name":"thread_id","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /{board}/thread/{threadId}.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"if_modified_since","or":"if_modified_since","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"board","or":"board","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/{board}/thread/{threadId}.json","q":{"exist":["board","if_modified_since","thread_id"]},"r":{},"s":[{"var":"board"},{"lit":"thread"},{"lit":"{threadId}.json"}],"t":{"req":"`reqdata`","res":"`body.posts`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"thread_id","name__orig":"thread_id","Name":"ThreadId","name_":"thread_id","name-":"thread-id","NAME":"THREAD_ID","index$":5}, {"active":true,"entity":"thread_id","key$":"BasicThreadIdFlow","kind":"basic","name":"BasicThreadIdFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"board":"board01","thread_id":"thread01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"thread_id_ref01"}}],"index$":0}]}, 'ThreadId', {"GET /{board}/thread/{threadId}.json":{"protocol":"http","operationId":"getThread","responses":{"200":{"description":"Successful response with thread data","content":{"application/json":{"schema":{"type":"object","properties":{"posts":{"items":{"properties":{"archived":{"description":"Archived flag","type":"integer","key$":"archived"},"archived_on":{"description":"Unix timestamp when archived","type":"integer","key$":"archived_on"},"bumplimit":{"description":"Bump limit reached flag","type":"integer","key$":"bumplimit"},"capcode":{"description":"Capcode (mod, admin, etc.)","type":"string","key$":"capcode"},"closed":{"description":"Closed flag","type":"integer","key$":"closed"},"com":{"description":"Comment (HTML escaped)","type":"string","key$":"com"},"country":{"description":"Country code","type":"string","key$":"country"},"country_name":{"description":"Country name","type":"string","key$":"country_name"},"custom_spoiler":{"description":"Custom spoiler ID","type":"integer","key$":"custom_spoiler"},"ext":{"description":"File extension","type":"string","key$":"ext"},"filedeleted":{"description":"File deleted flag","type":"integer","key$":"filedeleted"},"filename":{"description":"Original filename","type":"string","key$":"filename"},"fsize":{"description":"File size in bytes","type":"integer","key$":"fsize"},"h":{"description":"Image height","type":"integer","key$":"h"},"id":{"description":"Poster ID","type":"string","key$":"id"},"imagelimit":{"description":"Image limit reached flag","type":"integer","key$":"imagelimit"},"images":{"description":"Number of images","type":"integer","key$":"images"},"last_modified":{"description":"Unix timestamp of last modification","type":"integer","key$":"last_modified"},"m_img":{"description":"Mobile optimized image flag","type":"integer","key$":"m_img"},"md5":{"description":"MD5 hash in base64","type":"string","key$":"md5"},"name":{"description":"Poster name","type":"string","key$":"name"},"no":{"description":"Post number","type":"integer","key$":"no"},"now":{"description":"Formatted date and time","type":"string","key$":"now"},"omitted_images":{"description":"Number of omitted images","type":"integer","key$":"omitted_images"},"omitted_posts":{"description":"Number of omitted posts","type":"integer","key$":"omitted_posts"},"replies":{"description":"Number of replies","type":"integer","key$":"replies"},"resto":{"description":"Reply to thread ID (0 for OP)","type":"integer","key$":"resto"},"semantic_url":{"description":"SEO-friendly URL slug","type":"string","key$":"semantic_url"},"since4pass":{"description":"Year 4chan pass purchased","type":"integer","key$":"since4pass"},"spoiler":{"description":"Spoiler flag","type":"integer","key$":"spoiler"},"sticky":{"description":"Sticky flag","type":"integer","key$":"sticky"},"sub":{"description":"Subject","type":"string","key$":"sub"},"tag":{"description":"Tag","type":"string","key$":"tag"},"tim":{"description":"Unix timestamp for image","type":"integer","key$":"tim"},"time":{"description":"Unix timestamp","type":"integer","key$":"time"},"tn_h":{"description":"Thumbnail height","type":"integer","key$":"tn_h"},"tn_w":{"description":"Thumbnail width","type":"integer","key$":"tn_w"},"trip":{"description":"Tripcode","type":"string","key$":"trip"},"unique_ips":{"description":"Number of unique poster IPs","type":"integer","key$":"unique_ips"},"w":{"description":"Image width","type":"integer","key$":"w"}},"required":["no","time","now"],"type":"object","x-ref":"#/components/schemas/Post","index$":0},"key$":"posts","type":"array"}},"x-ref":"#/components/schemas/ThreadResponse"}}}},"304":{"description":"Not Modified - Content has not changed since last request"},"404":{"description":"Thread not found or has been deleted"},"429":{"description":"Too Many Requests - Rate limit exceeded"}},"parameters":[{"name":"board","in":"path","description":"Board identifier (e.g., 'g' for technology, 'a' for anime)","required":true,"schema":{"type":"string","pattern":"^[a-z0-9]+$"},"x-ref":"#/components/parameters/BoardParameter","index$":0},{"name":"threadId","in":"path","description":"Thread ID (post number of the opening post)","required":true,"schema":{"type":"integer"},"index$":1},{"name":"If-Modified-Since","in":"header","description":"HTTP date for conditional requests. Returns 304 if content hasn't been modified.","required":false,"schema":{"type":"string","format":"date-time"},"x-ref":"#/components/parameters/IfModifiedSince","index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let thread_id_ref01_data = Object.values(setup.data.existing.thread_id)[0] as any

    // LIST
    const thread_id_ref01_ent = client.ThreadId()
    const thread_id_ref01_match: any = {}
    thread_id_ref01_match['board'] = setup.idmap['board01']
    thread_id_ref01_match['thread_id'] = setup.idmap['thread01']

    const thread_id_ref01_list = (await thread_id_ref01_ent.list(thread_id_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/thread_id/ThreadIdTestData.json')

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
    ['thread_id01','thread_id02','thread_id03','board01','thread01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'N4CHAN_TEST_THREAD_ID_ENTID': idmap,
    'N4CHAN_TEST_LIVE': 'FALSE',
    'N4CHAN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['N4CHAN_TEST_THREAD_ID_ENTID']

  const live = 'TRUE' === env.N4CHAN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['N4CHAN_TEST_THREAD_ID_ENTID']
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
  
