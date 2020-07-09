const express = require("express");

const UserController = require("./controllers/userController");

const routes = express.Router();

routes.post("/users", UserController.create);
routes.get("/users", UserController.index);
routes.get("/users/name/:name", UserController.showName);

module.exports = routes;
