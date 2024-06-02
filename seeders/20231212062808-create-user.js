'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('employees', [{
      id: '0d8c661e-5de0-4870-a6a4-ca173e4302fa',
      role:"admin",
      employee_name: "Rohit",
      username: "username",
      password: "password",
      email: "rohitverma1569@gmail.com",
      status: true,
      employee_img_url:"",
      created_at: new Date(),
      updated_at: new Date()
      },
      {
        id: 'a2c76384-d2c8-46f7-a271-07e66c996aa1',
        employee_name: "Akshay",
        role:"employee",
        username: "AK47",
        password: "password",
        email: "ak49@gmail.com",
        status: true,
        employee_img_url:"",
        created_at: new Date(),
        updated_at: new Date()
        }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
