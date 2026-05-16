<?php
declare(strict_types=1);

// N4chan SDK utility: prepare_body

class N4chanPrepareBody
{
    public static function call(N4chanContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
