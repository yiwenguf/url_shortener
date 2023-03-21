"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.create = void 0;
const links_1 = require("../../db/models/links");
const create = (originalLink, newLink) => {
    try {
        return links_1.default.findOrCreate({
            where: {
                newLink,
            },
            defaults: {
                originalLink,
            },
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.create = create;
const find = (newLink) => {
    try {
        return links_1.default.findOne({
            where: {
                new_link: newLink,
            },
        });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};
exports.find = find;
//# sourceMappingURL=links.js.map