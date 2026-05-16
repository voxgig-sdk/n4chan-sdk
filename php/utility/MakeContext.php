<?php
declare(strict_types=1);

// N4chan SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class N4chanMakeContext
{
    public static function call(array $ctxmap, ?N4chanContext $basectx): N4chanContext
    {
        return new N4chanContext($ctxmap, $basectx);
    }
}
