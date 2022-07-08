"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _categoriasController = require("../controladores/mysql/categoriasController");

//import { getCategorias, postCategorias, getCategoriasById, deleteCategoriasById, updateCategoriasById} from '../controladores/sql/categoriasController';
var router = (0, _express.Router)();
router.get('/categorias', _categoriasController.getCategorias);
router.post('/categorias', _categoriasController.postCategorias);
router.get('/categorias/:Id', _categoriasController.getCategoriasById);
router["delete"]('/categorias/:Id', _categoriasController.deleteCategoriasById);
router.put('/categorias/:id', _categoriasController.updateCategoriasById);
var _default = router;
exports["default"] = _default;