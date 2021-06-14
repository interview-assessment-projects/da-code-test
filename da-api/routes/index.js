var express = require("express");
var router = express.Router();

const usersController = require("../controllers/users");

/* POST user message data to mongo. */
router.route("/saveFormContent").post(usersController.addUser);

module.exports = router;
