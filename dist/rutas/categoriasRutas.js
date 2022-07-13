"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _categoriascontroller = require("../controladores/categoriascontroller");

var router = (0, _express.Router)();
router.get('/categorias', _categoriascontroller.getCategorias);
router.post('/categorias', _categoriascontroller.postCategorias);
router.get('/categorias/:Id', _categoriascontroller.getCategoriasById);
router["delete"]('/categorias/:Id', _categoriascontroller.deleteCategoriasById);
router.put('/categorias/:id', _categoriascontroller.updateCategoriasById);
var _default = router;
exports["default"] = _default;