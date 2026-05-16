<?php
declare(strict_types=1);

// N4chan SDK exists test

require_once __DIR__ . '/../n4chan_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = N4chanSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
