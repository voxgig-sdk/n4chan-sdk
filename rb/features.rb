# N4chan SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module N4chanFeatures
  def self.make_feature(name)
    case name
    when "base"
      N4chanBaseFeature.new
    when "ratelimit"
      N4chanRatelimitFeature.new
    when "retry"
      N4chanRetryFeature.new
    when "test"
      N4chanTestFeature.new
    when "timeout"
      N4chanTimeoutFeature.new
    else
      N4chanBaseFeature.new
    end
  end
end
