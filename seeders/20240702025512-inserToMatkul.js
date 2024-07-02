"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/matkul.json");
    data.forEach((e) => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Matkuls", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Matkuls", null, {});
  },
};
