"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarioscontroller = require("../controladores/usuarioscontroller");

var router = (0, _express.Router)();
router.get('/usuarios', _usuarioscontroller.getUsuarios);
router.post('/usuarios', _usuarioscontroller.postUsuarios);
router.get('/usuarios/:Id', _usuarioscontroller.getUsuariosById);
router["delete"]('/usuarios/:Id', _usuarioscontroller.deleteUsuariosById);
router.put('/usuarios/:id', _usuarioscontroller.updateUsuariosById);
var _default = router;
exports["default"] = _default;