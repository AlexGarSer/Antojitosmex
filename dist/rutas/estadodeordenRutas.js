"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _estadodeordenController = require("../controladores/mysql/estadodeordenController");

//import { getEstadoDeOrden, postEstadoDeOrden, getEstadoDeOrdenById, deleteEstadoDeOrdenById, updateEstadoDeOrdenById} from '../controladores/sql/estadodeordenController'
var router = (0, _express.Router)();
router.get('/estadodeorden', _estadodeordenController.getEstadoDeOrden);
router.post('/estadodeorden', _estadodeordenController.postEstadoDeOrden);
router.get('/estadodeorden/:Id', _estadodeordenController.getEstadoDeOrdenById);
router["delete"]('/estadodeorden/:Id', _estadodeordenController.deleteEstadoDeOrdenById);
router.put('/estadodeorden/:id', _estadodeordenController.updateEstadoDeOrdenById);
var _default = router;
exports["default"] = _default;