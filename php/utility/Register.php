<?php
declare(strict_types=1);

// N4chan SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

N4chanUtility::setRegistrar(function (N4chanUtility $u): void {
    $u->clean = [N4chanClean::class, 'call'];
    $u->done = [N4chanDone::class, 'call'];
    $u->make_error = [N4chanMakeError::class, 'call'];
    $u->feature_add = [N4chanFeatureAdd::class, 'call'];
    $u->feature_hook = [N4chanFeatureHook::class, 'call'];
    $u->feature_init = [N4chanFeatureInit::class, 'call'];
    $u->fetcher = [N4chanFetcher::class, 'call'];
    $u->make_fetch_def = [N4chanMakeFetchDef::class, 'call'];
    $u->make_context = [N4chanMakeContext::class, 'call'];
    $u->make_options = [N4chanMakeOptions::class, 'call'];
    $u->make_request = [N4chanMakeRequest::class, 'call'];
    $u->make_response = [N4chanMakeResponse::class, 'call'];
    $u->make_result = [N4chanMakeResult::class, 'call'];
    $u->make_point = [N4chanMakePoint::class, 'call'];
    $u->make_spec = [N4chanMakeSpec::class, 'call'];
    $u->make_url = [N4chanMakeUrl::class, 'call'];
    $u->param = [N4chanParam::class, 'call'];
    $u->prepare_auth = [N4chanPrepareAuth::class, 'call'];
    $u->prepare_body = [N4chanPrepareBody::class, 'call'];
    $u->prepare_headers = [N4chanPrepareHeaders::class, 'call'];
    $u->prepare_method = [N4chanPrepareMethod::class, 'call'];
    $u->prepare_params = [N4chanPrepareParams::class, 'call'];
    $u->prepare_path = [N4chanPreparePath::class, 'call'];
    $u->prepare_query = [N4chanPrepareQuery::class, 'call'];
    $u->result_basic = [N4chanResultBasic::class, 'call'];
    $u->result_body = [N4chanResultBody::class, 'call'];
    $u->result_headers = [N4chanResultHeaders::class, 'call'];
    $u->transform_request = [N4chanTransformRequest::class, 'call'];
    $u->transform_response = [N4chanTransformResponse::class, 'call'];
});
