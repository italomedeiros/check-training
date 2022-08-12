const router = require("express").Router();
const UserController = require("./user-controller")
const {validateUserData} = require("./user-helper")

router.post("/", validateUserData, UserController.create)
router.get("/", UserController.get)

module.exports = router;