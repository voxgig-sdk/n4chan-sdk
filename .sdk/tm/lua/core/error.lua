-- N4chan SDK error

local N4chanError = {}
N4chanError.__index = N4chanError


function N4chanError.new(code, msg, ctx)
  local self = setmetatable({}, N4chanError)
  self.is_sdk_error = true
  self.sdk = "N4chan"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function N4chanError:error()
  return self.msg
end


function N4chanError:__tostring()
  return self.msg
end


return N4chanError
