"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        // allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      full_name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      nim: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      class: {
        type: Sequelize.STRING,
      },
      registration_path: {
        type: Sequelize.STRING,
      },
      guardian_lecturer: {
        type: Sequelize.STRING,
      },
      user_detail_id: {
        type: Sequelize.UUID,
        references: {
          model: "UserDetails",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    await queryInterface.dropTable("Users");
  },
};
