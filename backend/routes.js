const express = require("express");
const routes = express.Router();

const userController = require("./controllers/userController");
const tripController = require("./controllers/tripController");

routes.get("/user", userController.index);
routes.post("/user", userController.store);
routes.get("/user/:id", userController.show);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.destroy);

routes.get("/trip", tripController.index);
routes.post("/trip", tripController.store);
routes.get("/trip/:id", tripController.show);
routes.put("/trip/:id", tripController.update);
routes.delete("/trip/:id", tripController.destroy);
routes.get("/cidade/:id", tripController.selectCity);

module.exports = routes;