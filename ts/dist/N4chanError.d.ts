import { Context } from './Context';
declare class N4chanError extends Error {
    isN4chanError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { N4chanError };
