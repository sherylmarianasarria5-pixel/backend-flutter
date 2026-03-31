const Sequelize = require('sequelize');
require('dotenv').config();

const configFile = require('../config/config.js');

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}