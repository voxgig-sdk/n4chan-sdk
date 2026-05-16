# N4chan SDK exists test

require "minitest/autorun"
require_relative "../N4chan_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = N4chanSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
