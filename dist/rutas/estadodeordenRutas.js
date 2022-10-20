"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _estadodeordencontroller = require("../controladores/estadodeordencontroller");
var router = (0, _express.Router)();
router.get('/estadodeorden', _estadodeordencontroller.getEstadoDeOrden);
router.post('/estadodeorden', _estadodeordencontroller.postEstadoDeOrden);
router.get('/estadodeorden/:Id', _estadodeordencontroller.getEstadoDeOrdenById);
router["delete"]('/estadodeorden/:Id', _estadodeordencontroller.deleteEstadoDeOrdenById);
router.put('/estadodeorden/:id', _estadodeordencontroller.updateEstadoDeOrdenById);
var _default = router;
exports["default"] = _default;