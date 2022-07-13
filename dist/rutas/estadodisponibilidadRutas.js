"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _estadodisponibilidadcontroller = require("../controladores/estadodisponibilidadcontroller");

var router = (0, _express.Router)();
router.get('/estadodisponibilidad', _estadodisponibilidadcontroller.getEstadoDisponibilidad);
router.post('/estadodisponibilidad', _estadodisponibilidadcontroller.postEstadoDisponibilidad);
router.get('/estadodisponibilidad/:Id', _estadodisponibilidadcontroller.getEstadoDisponibilidadById);
router["delete"]('/estadodisponibilidad/:Id', _estadodisponibilidadcontroller.deleteEstadoDisponibilidadById);
router.put('/estadodisponibilidad/:id', _estadodisponibilidadcontroller.updateEstadoDisponibilidadById);
var _default = router;
exports["default"] = _default;