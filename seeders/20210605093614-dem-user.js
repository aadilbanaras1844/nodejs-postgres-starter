'use strict';
const { encryptString } = require('../utils')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('User', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      username: 'test@test.com',
      password: encryptString('test123')
    },{
      username: 'test2@test.com',
      password: encryptString('test123')
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('User', null, {});
     */
    await queryInterface.bulkDelete('User', null, {});
  }
};
