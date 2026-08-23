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

    /**
     * Does a generated feature class back this name? False for a name only
     * an options extend instance can supply (the station adopt path) - the
     * constructor uses this to skip make_feature for such names instead of
     * adding a stray BaseFeature.
     */
    public static function has_feature(string $name): bool
    {
        switch ($name) {
            case "base":
            case "test":
                return true;
            default:
                return false;
        }
    }
}
