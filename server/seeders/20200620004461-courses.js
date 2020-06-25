const bcrypt = require('bcryptjs')
/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Courses',
      [
        {
          TeacherId: 1,
          name: 'Matematicas 1',
          period: 1,
          capacity: 30,
          year: 2020,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TeacherId: 1,
          name: 'Matematicas 2',
          period: 1,
          capacity: 30,
          year: 2020,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TeacherId: 1,
          name: 'Laboratorio 4',
          period: 1,
          capacity: 30,
          year: 2020,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('UserRoles', null, {}),
}
