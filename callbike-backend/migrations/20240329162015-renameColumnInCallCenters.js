'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.renameColumn('CallCenters', 'rideRequestId', 'requestId');

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('CallCenters', 'requestId', 'rideRequestId');
  }
};
