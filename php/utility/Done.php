<?php
declare(strict_types=1);

// N4chan SDK utility: done

class N4chanDone
{
    public static function call(N4chanContext $ctx): mixed
    {
        if ($ctx->ctrl->explain) {
            $ctx->ctrl->explain = ($ctx->utility->clean)($ctx, $ctx->ctrl->explain);
            $er = $ctx->ctrl->explain['result'] ?? null;
            if (is_array($er)) {
                unset($ctx->ctrl->explain['result']['err']);
            }
        }
        if ($ctx->result && $ctx->result->ok) {
            $resdata = $ctx->result->resdata;
            if (is_object($resdata)) {
                $resdata = (array)$resdata;
            }
            return $resdata;
        }
        return ($ctx->utility->make_error)($ctx, null);
    }
}
