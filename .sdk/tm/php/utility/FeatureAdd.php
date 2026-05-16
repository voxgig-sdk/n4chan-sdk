<?php
declare(strict_types=1);

// N4chan SDK utility: feature_add

class N4chanFeatureAdd
{
    public static function call(N4chanContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
