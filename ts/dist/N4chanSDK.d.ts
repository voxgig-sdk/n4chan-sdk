import { ArchiveEntity } from './entity/ArchiveEntity';
import { BoardEntity } from './entity/BoardEntity';
import { CatalogEntity } from './entity/CatalogEntity';
import { IndexEntity } from './entity/IndexEntity';
import { ThreadEntity } from './entity/ThreadEntity';
export type * from './N4chanTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { N4chanEntityBase } from './N4chanEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class N4chanSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Archive(entopts?: Record<string, any>): ArchiveEntity;
    Board(entopts?: Record<string, any>): BoardEntity;
    Catalog(entopts?: Record<string, any>): CatalogEntity;
    Index(entopts?: Record<string, any>): IndexEntity;
    Thread(entopts?: Record<string, any>): ThreadEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): N4chanSDK;
    tester(testopts?: any, sdkopts?: any): N4chanSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof N4chanSDK;
export { stdutil, config, BaseFeature, N4chanEntityBase, N4chanSDK, SDK, };
