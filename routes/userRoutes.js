const express = require("express");
const routes = express.Router();
const {DASHBOARD, LOGIN} = require("../utils/config").ROUTES;
const controller = require("../controllers/user");
routes.get(DASHBOARD,controller.dashboard);
routes.post(LOGIN,controller.facebookLogin);

module.exports = routes;