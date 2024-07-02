"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserMatkuls", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      mk_code: {
        type: Sequelize.STRING,
        references: {
          model: "Matkuls",
          key: "mk_code",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      group: {
        type: Sequelize.STRING,
      },
      days: {
        type: Sequelize.INTEGER,
      },
      hours_start: {
        type: Sequelize.STRING,
      },
      hours_end: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.CHAR,
      },
      room: {
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
    await queryInterface.dropTable("UserMatkuls");
  },
};
