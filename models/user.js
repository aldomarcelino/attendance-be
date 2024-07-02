"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.UserDetail, {
        foreignKey: "user_detail_id",
      });
      User.hasMany(models.UserMatkul, {
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
      },
      full_name: DataTypes.STRING,
      password: DataTypes.STRING,
      nim: DataTypes.STRING,
      status: DataTypes.STRING,
      class: DataTypes.STRING,
      registration_path: DataTypes.STRING,
      guardian_lecturer: DataTypes.STRING,
      user_detail_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
