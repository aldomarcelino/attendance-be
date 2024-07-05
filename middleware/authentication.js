const { tokenToPayload } = require("../helpers/token-generator");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const accessToken = req.headers.access_token;
    // console.log(accessToken, "<<<accessToken");
    let payload = tokenToPayload(accessToken);
    let user = await User.findByPk(payload.id, { raw: true });
    // console.log(user, "<<<user");

    if (!user) throw { name: "Not_Valid" };
    delete user.password;
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
