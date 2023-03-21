"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = require("./models/links");
const dbInit = async () => {
    Promise.all([await links_1.default.sync()]);
};
exports.default = dbInit;
//# sourceMappingURL=init.js.map