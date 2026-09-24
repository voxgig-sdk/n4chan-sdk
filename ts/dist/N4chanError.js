"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.N4chanError = void 0;
class N4chanError extends Error {
    isN4chanError = true;
    sdk = 'N4chan';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.N4chanError = N4chanError;
//# sourceMappingURL=N4chanError.js.map