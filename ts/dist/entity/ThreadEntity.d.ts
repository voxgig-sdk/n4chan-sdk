import { N4chanEntityBase } from '../N4chanEntityBase';
import type { N4chanSDK } from '../N4chanSDK';
import type { Control } from '../types';
import type { Thread, ThreadListMatch } from '../N4chanTypes';
declare class ThreadEntity extends N4chanEntityBase<Thread> {
    constructor(client: N4chanSDK, entopts: any);
    make(this: ThreadEntity): ThreadEntity;
    list(this: any, reqmatch?: ThreadListMatch, ctrl?: Control): Promise<ThreadEntity[]>;
}
export { ThreadEntity };
