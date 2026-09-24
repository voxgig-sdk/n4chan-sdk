
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { N4chanSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = N4chanSDK.test()
    equal(testsdk instanceof N4chanSDK, true,
      'N4chanSDK.test() must return a client synchronously')
  })

})
