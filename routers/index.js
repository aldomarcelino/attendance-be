const express = require("express");
const authentication = require("../middleware/authentication");
const errorHandler = require("../middleware/error-handler");
const userController = require("../controllers/user.controller");
const matkulController = require("../controllers/schedule.controller");
const router = express.Router();

router.post("/user/signin", userController.signIn);
router.post("/rule_late/:id", matkulController.ruleMatkul);
router.delete("/rule_late/:id", matkulController.ruleMatkulHapus);
router.put("/rule_late/:id", matkulController.ruleMatkulEdit);
router.use(authentication);
router.get("/user/profile", userController.getProfile);
router.post("/user/presensi", userController.createPresensi);
router.get("/matkul/all-matkul", matkulController.getMatkul);
router.get("/matkul/today-matkul", matkulController.todayMatkul);
router.use(errorHandler);

module.exports = router;
