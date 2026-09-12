import { N4chanEntityBase } from '../N4chanEntityBase';
import type { N4chanSDK } from '../N4chanSDK';
import type { Control } from '../types';
import type { Archive, ArchiveListMatch } from '../N4chanTypes';
declare class ArchiveEntity extends N4chanEntityBase<Archive> {
    constructor(client: N4chanSDK, entopts: any);
    make(this: ArchiveEntity): ArchiveEntity;
    list(this: any, reqmatch?: ArchiveListMatch, ctrl?: Control): Promise<ArchiveEntity[]>;
}
export { ArchiveEntity };
