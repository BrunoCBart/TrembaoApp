"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'trembao_db',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
const testConfig = {
    username: process.env.DB_TEST_USER || 'root',
    password: process.env.DB_TEST_PASS || 'password',
    database: process.env.DB_TEST_NAME || 'trembao_db_test',
    host: process.env.DB_TEST_HOST || 'localhost',
    port: Number(process.env.DB_TEST_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
const currentConfig = process.env.NODE_ENV === 'test' ? testConfig : config;
module.exports = currentConfig;
//# sourceMappingURL=database.js.map