"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    static associate(models) {
      UserDetail.hasOne(models.User, {
        foreignKey: "user_detail_id",
      });
    }
  }
  UserDetail.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
      },
      birth_place: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      gender: DataTypes.STRING,
      citizen: DataTypes.STRING,
      origin_postal_code: DataTypes.NUMBER,
      origin_address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      postal_code: DataTypes.INTEGER,
      alternative_number: DataTypes.STRING,
      email: DataTypes.STRING,
      alternative_email: DataTypes.STRING,
      parent_address: DataTypes.STRING,
      parent_birth_place: DataTypes.STRING,
      parent_birth_date: DataTypes.DATE,
      parent_number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
