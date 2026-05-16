
import { Context } from './Context'


class N4chanError extends Error {

  isN4chanError = true

  sdk = 'N4chan'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  N4chanError
}

