const Sequelize = require('sequelize');
const config = require('./config/config.json');

// Lấy cấu hình kết nối cho môi trường phát triển
const dbConfig = config.development;

// Khởi tạo Sequelize với cấu hình đã lấy
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

module.exports = sequelize;
