# N4chan SDK exists test

import pytest
from n4chan_sdk import N4chanSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = N4chanSDK.test(None, None)
        assert testsdk is not None
