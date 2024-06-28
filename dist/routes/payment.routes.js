"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _paymentControllers = require("../controllers/payment.controllers.js");
var router = (0, _express.Router)();
router.get("/create-order", _paymentControllers.createOrder);
router.get("/capture-order", _paymentControllers.captureOrder);
router.get("/cancel-order", _paymentControllers.cancelOrder);
var _default = exports["default"] = router;