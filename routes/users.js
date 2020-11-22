let router = require("express").Router();
const usersController = require("../controllers/users-controllers");

router.get("/", usersController.getUsers);

router.get("/login", usersController.getUser);

router.post("/createUser", usersController.createUser);

module.exports = router;
