<?php
declare(strict_types=1);

// N4chan SDK base feature

class N4chanBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(N4chanContext $ctx, array $options): void {}
    public function PostConstruct(N4chanContext $ctx): void {}
    public function PostConstructEntity(N4chanContext $ctx): void {}
    public function SetData(N4chanContext $ctx): void {}
    public function GetData(N4chanContext $ctx): void {}
    public function GetMatch(N4chanContext $ctx): void {}
    public function SetMatch(N4chanContext $ctx): void {}
    public function PrePoint(N4chanContext $ctx): void {}
    public function PreSpec(N4chanContext $ctx): void {}
    public function PreRequest(N4chanContext $ctx): void {}
    public function PreResponse(N4chanContext $ctx): void {}
    public function PreResult(N4chanContext $ctx): void {}
    public function PreDone(N4chanContext $ctx): void {}
    public function PreUnexpected(N4chanContext $ctx): void {}
}
