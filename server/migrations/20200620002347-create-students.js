/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Students', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Students'),
};