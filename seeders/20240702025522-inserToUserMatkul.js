"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/user-matkul.json");
    data.forEach((e) => {
      e.id = uuidv4();
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("UserMatkuls", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserMatkuls", null, {});
  },
};
