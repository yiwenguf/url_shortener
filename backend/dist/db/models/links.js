"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class Links extends sequelize_1.Model {
}
Links.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    originalLink: {
        type: sequelize_1.DataTypes.STRING,
        field: 'original_link',
        allowNull: false,
    },
    newLink: {
        type: sequelize_1.DataTypes.STRING,
        field: 'new_link',
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: config_1.default,
    modelName: 'link',
});
exports.default = Links;
//# sourceMappingURL=links.js.map