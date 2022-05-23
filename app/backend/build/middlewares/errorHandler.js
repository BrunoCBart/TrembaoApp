"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _req, res, _next) => {
    return res.status(500).json({ error: `Error ${err.message}` });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map