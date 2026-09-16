# N4chan SDK feature factory

from n4chan_sdk.feature.base_feature import N4chanBaseFeature
from n4chan_sdk.feature.ratelimit_feature import N4chanRatelimitFeature
from n4chan_sdk.feature.retry_feature import N4chanRetryFeature
from n4chan_sdk.feature.test_feature import N4chanTestFeature
from n4chan_sdk.feature.timeout_feature import N4chanTimeoutFeature


_FEATURES = {
    "base": lambda: N4chanBaseFeature(),
    "ratelimit": lambda: N4chanRatelimitFeature(),
    "retry": lambda: N4chanRetryFeature(),
    "test": lambda: N4chanTestFeature(),
    "timeout": lambda: N4chanTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
