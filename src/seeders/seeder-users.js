'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {// ham up khi chay binh thuong ta them du lieu vao
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Tuan Anh',
      lastName: 'Tran',
      address: 'Viet Nam',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {// khi muon cancel them du lieu (khi muon rollback), khi chay loi muon back lai version truoc khi bi loi
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
