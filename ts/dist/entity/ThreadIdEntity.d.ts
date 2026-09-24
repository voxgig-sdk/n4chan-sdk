import { N4chanEntityBase } from '../N4chanEntityBase';
import type { N4chanSDK } from '../N4chanSDK';
import type { Control } from '../types';
import type { ThreadId, ThreadIdListMatch } from '../N4chanTypes';
declare class ThreadIdEntity extends N4chanEntityBase<ThreadId> {
    constructor(client: N4chanSDK, entopts: any);
    make(this: ThreadIdEntity): ThreadIdEntity;
    list(this: any, reqmatch?: ThreadIdListMatch, ctrl?: Control): Promise<ThreadIdEntity[]>;
}
export { ThreadIdEntity };
