import { N4chanEntityBase } from '../N4chanEntityBase';
import type { N4chanSDK } from '../N4chanSDK';
import type { Control } from '../types';
import type { Index, IndexListMatch } from '../N4chanTypes';
declare class IndexEntity extends N4chanEntityBase<Index> {
    constructor(client: N4chanSDK, entopts: any);
    make(this: IndexEntity): IndexEntity;
    list(this: any, reqmatch?: IndexListMatch, ctrl?: Control): Promise<IndexEntity[]>;
}
export { IndexEntity };
