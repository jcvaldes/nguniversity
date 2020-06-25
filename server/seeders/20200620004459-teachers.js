/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Teachers', [{
    UserId: 2
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Teachers', null, {}),
}