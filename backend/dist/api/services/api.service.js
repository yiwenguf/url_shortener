"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("../../utils/util");
const links_1 = require("../dal/links");
let ApiService = class ApiService {
    constructor() {
        this.createLink = (originalLink, newLink) => {
            const shouldGenerateLink = !newLink;
            if (!originalLink)
                return null;
            if (shouldGenerateLink)
                newLink = (0, util_1.generateRandomString)(6);
            try {
                if ((0, util_1.isUrlValid)(originalLink) && (0, util_1.isNewUrlValid)(newLink)) {
                    return (0, links_1.create)(originalLink, newLink);
                }
                return null;
            }
            catch (err) {
                throw err;
            }
        };
    }
};
ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map