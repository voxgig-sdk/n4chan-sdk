import { N4chanEntityBase } from '../N4chanEntityBase';
import type { N4chanSDK } from '../N4chanSDK';
import type { Control } from '../types';
import type { Catalog, CatalogListMatch } from '../N4chanTypes';
declare class CatalogEntity extends N4chanEntityBase<Catalog> {
    constructor(client: N4chanSDK, entopts: any);
    make(this: CatalogEntity): CatalogEntity;
    list(this: any, reqmatch?: CatalogListMatch, ctrl?: Control): Promise<CatalogEntity[]>;
}
export { CatalogEntity };
