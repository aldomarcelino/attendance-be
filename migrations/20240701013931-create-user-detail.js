"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserDetails", {
      id: {
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      birth_place: {
        type: Sequelize.STRING,
      },
      birth_date: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING,
      },
      citizen: {
        type: Sequelize.STRING,
      },
      origin_postal_code: {
        type: Sequelize.INTEGER,
      },
      origin_address: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.INTEGER,
      },
      alternative_number: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      alternative_email: {
        type: Sequelize.STRING,
      },
      parent_address: {
        type: Sequelize.STRING,
      },
      parent_birth_place: {
        type: Sequelize.STRING,
      },
      parent_birth_date: {
        type: Sequelize.DATE,
      },
      parent_number: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserDetails");
  },
};
