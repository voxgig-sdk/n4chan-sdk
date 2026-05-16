<?php
declare(strict_types=1);

// N4chan SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class N4chanFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new N4chanBaseFeature();
            case "test":
                return new N4chanTestFeature();
            default:
                return new N4chanBaseFeature();
        }
    }
}
