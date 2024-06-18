const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const config = {
  user: "avnadmin",
  password: "AVNS_-8hfoPmol2ayuSVvefZ",
  host: "pg-cdtkpm-cdtkpmnc.a.aivencloud.com",
  port: 18615,
  database: "tkpmncdb",
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false 
  } 
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false // Bỏ qua việc xác minh chứng chỉ SSL
    }
  }
});

const db = {};

// Đọc và khởi tạo các model từ thư mục models
fs.readdirSync(path.join(__dirname, 'sqModels')).filter(file => {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(file => {
  const model = require(path.join(__dirname, 'sqModels', file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

// Ánh xạ các mối quan hệ giữa các model
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Gán sequelize và Sequelize vào db object để sử dụng ở bất kỳ nơi nào
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Test kết nối
sequelize.authenticate()
  .then(() => {
    console.log('Kết nối thành công đến cơ sở dữ liệu');
  })
  .catch(err => {
    console.error('Không thể kết nối đến cơ sở dữ liệu:', err);
  });

module.exports = db;
