'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('AccountInfos', 'paymentInfo', {
      type: Sequelize.JSONB,
      allowNull: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    // Khôi phục lại kiểu dữ liệu cũ nếu cần thiết
    return queryInterface.changeColumn('AccountInfos', 'paymentInfo', {
      type: Sequelize.JSON,
      allowNull: false,
    });
  }
};
