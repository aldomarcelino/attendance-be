"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserMatkul extends Model {
    static associate(models) {
      UserMatkul.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      UserMatkul.belongsTo(models.Matkul, {
        foreignKey: "mk_code",
      });
    }
  }
  UserMatkul.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
      },
      user_id: DataTypes.UUID,
      matkul_code: DataTypes.STRING,
      group: DataTypes.STRING,
      days: DataTypes.INTEGER,
      hours_start: DataTypes.STRING,
      hours_end: DataTypes.STRING,
      status: DataTypes.CHAR,
      room: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserMatkul",
    }
  );
  return UserMatkul;
};
