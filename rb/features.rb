# N4chan SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module N4chanFeatures
  def self.make_feature(name)
    case name
    when "base"
      N4chanBaseFeature.new
    when "test"
      N4chanTestFeature.new
    else
      N4chanBaseFeature.new
    end
  end
end
