"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Matkuls", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      mk_code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      sks: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Matkuls");
  },
};
