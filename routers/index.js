const express = require("express");
const authentication = require("../middleware/authentication");
const errorHandler = require("../middleware/error-handler");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/user/signin", userController.signIn);
router.use(authentication);
router.use(errorHandler);

module.exports = router;
