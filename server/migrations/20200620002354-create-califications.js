/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Califications', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    StudentId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    TeacherId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    CourseId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Note: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Califications'),
};