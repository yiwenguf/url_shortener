"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeConnection = new sequelize_1.Sequelize('link_shortener_yw', 'root', 'root', {
    host: '0.0.0.0',
    dialect: 'mysql',
});
exports.default = sequelizeConnection;
//# sourceMappingURL=config.js.map