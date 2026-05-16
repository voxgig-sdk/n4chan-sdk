
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { N4chanSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await N4chanSDK.test()
    equal(null !== testsdk, true)
  })

})
