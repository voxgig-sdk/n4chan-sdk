# N4chan SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

N4chanUtility.registrar = ->(u) {
  u.clean = N4chanUtilities::Clean
  u.done = N4chanUtilities::Done
  u.make_error = N4chanUtilities::MakeError
  u.feature_add = N4chanUtilities::FeatureAdd
  u.feature_hook = N4chanUtilities::FeatureHook
  u.feature_init = N4chanUtilities::FeatureInit
  u.fetcher = N4chanUtilities::Fetcher
  u.make_fetch_def = N4chanUtilities::MakeFetchDef
  u.make_context = N4chanUtilities::MakeContext
  u.make_options = N4chanUtilities::MakeOptions
  u.make_request = N4chanUtilities::MakeRequest
  u.make_response = N4chanUtilities::MakeResponse
  u.make_result = N4chanUtilities::MakeResult
  u.make_point = N4chanUtilities::MakePoint
  u.make_spec = N4chanUtilities::MakeSpec
  u.make_url = N4chanUtilities::MakeUrl
  u.param = N4chanUtilities::Param
  u.prepare_auth = N4chanUtilities::PrepareAuth
  u.prepare_body = N4chanUtilities::PrepareBody
  u.prepare_headers = N4chanUtilities::PrepareHeaders
  u.prepare_method = N4chanUtilities::PrepareMethod
  u.prepare_params = N4chanUtilities::PrepareParams
  u.prepare_path = N4chanUtilities::PreparePath
  u.prepare_query = N4chanUtilities::PrepareQuery
  u.graphql_body = N4chanUtilities::GraphqlBody
  u.graphql_errors = N4chanUtilities::GraphqlErrors
  u.result_basic = N4chanUtilities::ResultBasic
  u.result_body = N4chanUtilities::ResultBody
  u.result_headers = N4chanUtilities::ResultHeaders
  u.transform_request = N4chanUtilities::TransformRequest
  u.transform_response = N4chanUtilities::TransformResponse
}
