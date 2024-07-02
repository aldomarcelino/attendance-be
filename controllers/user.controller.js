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

      console.log(response, "<<<response");

      res.status(200).json({ access_token: accessToken, user: response });
    } catch (e) {
      res.status(401).json({ message: "Invalid Username or Password" });
    }
  }
}

module.exports = UserController;
