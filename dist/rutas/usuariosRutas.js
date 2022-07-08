"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuariosController = require("../controladores/mysql/usuariosController");

//import { getUsuarios,getUsuariosById,postUsuarios,deleteUsuariosById,updateUsuariosById } from '../controladores/sql/usuariosController';
var router = (0, _express.Router)();
router.get('/usuarios', _usuariosController.getUsuarios);
router.post('/usuarios', _usuariosController.postUsuarios);
router.get('/usuarios/:Id', _usuariosController.getUsuariosById);
router["delete"]('/usuarios/:Id', _usuariosController.deleteUsuariosById);
router.put('/usuarios/:id', _usuariosController.updateUsuariosById);
var _default = router;
exports["default"] = _default;