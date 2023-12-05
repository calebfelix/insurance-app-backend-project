"use strict";
const { v4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "states",
      [
        {
          id: '1afea90f-f1a2-454b-9e76-540856ad2202',
          state_name: 'Andhra Pradesh',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '90477bcb-6639-4b93-8664-d97f9aa7b408',
          state_name: 'Arunachal Pradesh',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '6031f594-aec0-4649-8673-15d9fe5872ab',
          state_name: 'Assam',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '3f4433fd-c10a-4aa2-94b4-9139d0ceef70',
          state_name: 'Bihar',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'e60b9148-d6a1-476c-9702-49d092161587',
          state_name: 'Chhattisgarh',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'ac0e0bc6-991b-4ab7-ac39-f9778512b4fb',
          state_name: 'Goa',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '605d45d5-fda1-48a4-8d63-ae4247e46956',
          state_name: 'Gujarat',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '29925faa-7606-4843-aee5-42b197f6d553',
          state_name: 'Haryana',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1ef9bfb2-9afb-4c08-a2a7-656ed89d60de',
          state_name: 'Himachal Pradesh',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1e93ac2a-d83d-4ffc-bc42-55c93fc581b0',
          state_name: 'Jharkhand',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '2bce6568-a3f8-412f-845c-9d0c06d416a9',
          state_name: 'Karnataka',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '36a59b01-12cf-4881-9b3d-965a91a07372',
          state_name: 'Kerala',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '66e33be5-f1bb-444b-bc69-814837b8396a',
          state_name: 'Madhya Pradesh',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'c29dc771-ba70-4084-9575-959ba1777c45',
          state_name: 'Maharashtra',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1325b88a-5e1a-4125-a94a-27f46387ca01',
          state_name: 'Manipur',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'e666cda1-2419-4255-864a-373e54edf01d',
          state_name: 'Meghalaya',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '3d054358-237f-427a-b308-e7a28dfbbffb',
          state_name: 'Mizoram',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'd6da826b-beb9-4502-a093-8a3258ace5be',
          state_name: 'Nagaland',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '47984506-141b-4b02-ba2c-ee2ae9c8b0b9',
          state_name: 'Odisha',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '12443a84-8c15-421f-a0f6-7245c1d1e6df',
          state_name: 'Punjab',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'ac7d9661-f593-435d-91ec-6a3b92e6378b',
          state_name: 'Rajasthan',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1a24ce8d-084e-4868-9048-af9124b7fabf',
          state_name: 'Sikkim',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'ff2f8e0f-f554-43e2-bce4-4beab2e337ed',
          state_name: 'Tamil Nadu',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1e61676c-0b4c-4dda-a24d-ce3c473f8576',
          state_name: 'Telangana',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1ca5ec99-dd89-4e83-b2a9-8e30fba73d1d',
          state_name: 'Tripura',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1ff95979-37a7-4437-917e-30fb7e7bdafe',
          state_name: 'Uttar Pradesh',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '11a7800e-df87-4ca3-92c8-af2699658942',
          state_name: 'Uttarakhand',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '961f8aec-2f99-4f38-8069-8d08298ce7ce',
          state_name: 'West Bengal',
          status: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
