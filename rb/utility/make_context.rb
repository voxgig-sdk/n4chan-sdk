# N4chan SDK utility: make_context
require_relative '../core/context'
module N4chanUtilities
  MakeContext = ->(ctxmap, basectx) {
    N4chanContext.new(ctxmap, basectx)
  }
end
