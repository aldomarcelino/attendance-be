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

      // const groupedData = response.reduce((acc, item) => {
      //   // Find the group by 'days'
      //   let group = acc.find((g) => g[0].days === item.days);

      //   // If the group doesn't exist, create it
      //   if (!group) {
      //     group = [];
      //     acc.push(group);
      //   }

      //   // Add the item to the group
      //   group.push(item);

      //   // Sort the items within the group by 'hours_start'
      //   group.sort((a, b) => a.hours_start.localeCompare(b.hours_start));

      //   return acc;
      // }, []);

      // // Sort the groups by 'days'
      // groupedData.sort((a, b) => a[0].days - b[0].days);

      // console.log(groupedData, "<<<this is it");

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

  static async todayMatkul(req, res, next) {
    try {
      // const today = new Date().getDay();
      const hours = new Date().getHours();
      const minute = new Date().getMinutes();

      const today = 4;
      // const hours = 7;
      // const minute = 57;
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

      const temp = {
        0: null,
        1: null,
        2: null,
        3: null,
        5: null,
        6: null,
        7: null,
      };

      response.forEach((el) => {
        if (!temp[el.days]) {
          temp[el.days] = [el];
        } else temp[el.days] = [...temp[el.days], el];
      });

      let matkuls = temp[today];
      let result;

      const getItemWithLargestEndHour = () => {
        return matkuls.reduce((max, item) => {
          return item.hours_end > max.hours_end ? item : max;
        }, matkuls[0]);
      };

      const findItemByTime = (time) => {
        const formatTime = (time) => {
          const [hours, minutes] = time.split(":").map(Number);
          return hours * 60 + minutes;
        };

        const givenTime = formatTime(time);
        let bestMatch = null;
        let closestTime = Infinity;

        for (const item of matkuls) {
          const startTime = formatTime(item.hours_start);
          const endTime = formatTime(item.hours_end);

          if (startTime <= givenTime && endTime >= givenTime) {
            return item;
          }

          if (endTime > givenTime && endTime < closestTime) {
            closestTime = endTime;
            bestMatch = item;
          }
        }

        if (!bestMatch) bestMatch = getItemWithLargestEndHour();
        return bestMatch;
      };
      if (matkuls && matkuls.length === 1) {
        result = matkuls[0];
      } else if (matkuls && matkuls.length > 1) {
        result = findItemByTime(`${hours}:${minute}`);
      }

      console.log(result, "<<<result");
      res.status(200).json({ matkul: result });
    } catch (e) {
      next(e);
    }
  }

  static async ruleMatkul(req, res, next) {
    try {
      const { rule_late } = req.body;
      res.status(200).json({
        message:
          "Keterlambatan waktu berhasil ditambahkan " + rule_late + " menit",
      });
    } catch (e) {
      next(e);
    }
  }
  static async ruleMatkulHapus(req, res, next) {
    try {
      const { rule_late } = req.body;
      res.status(200).json({
        message: "Keterlambatan waktu berhasil dihapus",
      });
    } catch (e) {
      next(e);
    }
  }
  static async ruleMatkulEdit(req, res, next) {
    try {
      const { rule_late } = req.body;
      res.status(200).json({
        message:
          "Keterlambatan waktu berhasil diupdate ke " + rule_late + " menit",
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ScheduleController;
