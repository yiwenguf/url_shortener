"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.isNewUrlValid = exports.isUrlValid = void 0;
const isUrlValid = (url) => url.match(/http(s)?:\/\/.?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null;
exports.isUrlValid = isUrlValid;
const isNewUrlValid = (url) => url.match(/^[\w\-]+$/) !== null;
exports.isNewUrlValid = isNewUrlValid;
const generateRandomString = (size) => {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789-_';
    let result = '';
    for (let i = 0; i < size; i++) {
        result += charset.charAt(Math.floor(Math.random() * 38));
    }
    return result;
};
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=util.js.map