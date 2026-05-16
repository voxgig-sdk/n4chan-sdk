<?php
declare(strict_types=1);

// N4chan SDK utility: result_body

class N4chanResultBody
{
    public static function call(N4chanContext $ctx): ?N4chanResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
