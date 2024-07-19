const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");

router.use(profileController);

module.exports = router;
