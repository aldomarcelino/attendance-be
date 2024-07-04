const { User, UserMatkul, Matkul } = require("../models");

class ScheduleController {
  static async getMatkul(req, res, next) {
    try {
      const userMatkuls = await UserMatkul.findAll({
        include: { model: Matkul, attributes: ["name", "sks"] },
      });

      const response = userMatkuls.map((um) => {
        const matkul = um.Matkul ? um.Matkul.dataValues : {};
        return {
          ...um.dataValues,
          ...matkul,
        };
      });

      const result = {};

      response.forEach((el) => {
        if (!result[el.days]) {
          result[el.days] = [el];
        } else result[el.days] = [...result[el.days], el];
      });

      res.status(200).json({ matkul: result });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ScheduleController;
