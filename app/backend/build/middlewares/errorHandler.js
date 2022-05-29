"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _req, res, _next) => {
    const [code, error] = err.message.split('|');
    if (code && error)
        return res.status(Number(code)).json({ error });
    return res.status(500).json({ error: `Error ${err.message}` });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map