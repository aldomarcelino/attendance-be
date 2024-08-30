const { payloadToToken } = require("../helpers/token-generator");
const { compareThePass } = require("../helpers/encryption");
const { User } = require("../models");

class UserController {
  static async signIn(req, res, next) {
    try {
      const { nim, password } = req.body;

      // validate body
      if (!password || !nim) throw { name: "empty" };

      const user = await User.findOne({ where: { nim }, raw: true });

      if (!user) throw { name: "Not_Valid" };

      const isValid = compareThePass(password, user.password);
      if (!isValid) throw { name: "Not_Valid" };

      const accessToken = payloadToToken({
        id: user.id,
        nim: user.nim,
      });

      let response = user;
      delete response.password;

      res.status(200).json({ access_token: accessToken, user: response });
    } catch (e) {
      next(e);
    }
  }

  static async getProfile(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id, { include: "UserDetail" });
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  static async createPresensi(req, res, next) {
    try {
      const { count } = req.body;
      setTimeout(() => {
        res.send(200).json({ count: count + 1 });
      }, 1500);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
