const bcrypt = require('bcryptjs');

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
      firstname: 'Ignacio',
      lastname: 'Monllor',
      email: 'nmonllor@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      // is_verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
    firstname: 'Octavio',
    lastname: 'Meller',
    email: 'octavio@gmail.com',
    password: bcrypt.hashSync('octavio', 10),
    // is_verified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    firstname: 'Matias',
    lastname: 'Sanders',
    email: 'matias@gmail.com',
    password: bcrypt.hashSync('matias', 10),
    // is_verified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    firstname: 'Maximiliano',
    lastname: 'Riestra',
    email: 'maxi@gmail.com',
    password: bcrypt.hashSync('maxi', 10),
    // is_verified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
}