const bcrypt = require('bcryptjs');

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Students', [{
    UserId: 3
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Students', null, {}),
}