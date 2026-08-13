# N4chan SDK utility: make_context

from n4chan_sdk.core.context import N4chanContext


def make_context_util(ctxmap, basectx):
    return N4chanContext(ctxmap, basectx)
