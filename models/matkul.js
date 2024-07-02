"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matkul extends Model {
    static associate(models) {
      Matkul.hasMany(models.UserMatkul, {
        foreignKey: "mk_code",
      });
    }
  }
  Matkul.init(
    {
      mk_code: DataTypes.STRING,
      name: DataTypes.STRING,
      sks: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Matkul",
    }
  );
  return Matkul;
};
