# N4chan SDK feature factory

from feature.base_feature import N4chanBaseFeature
from feature.test_feature import N4chanTestFeature


def _make_feature(name):
    features = {
        "base": lambda: N4chanBaseFeature(),
        "test": lambda: N4chanTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
