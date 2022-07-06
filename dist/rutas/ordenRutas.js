"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ordenController = require("../controladores/ordenController");

var router = (0, _express.Router)();
router.get('/orden', _ordenController.getOrden);
router.post('/orden', _ordenController.postOrden);
router.get('/orden/:Id', _ordenController.getOrdenById);
router["delete"]('/orden/:Id', _ordenController.deleteOrdenById);
router.put('/orden/:id', _ordenController.updateOrdenById);
var _default = router;
exports["default"] = _default;