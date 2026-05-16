<?php
declare(strict_types=1);

// N4chan SDK utility: result_headers

class N4chanResultHeaders
{
    public static function call(N4chanContext $ctx): ?N4chanResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
