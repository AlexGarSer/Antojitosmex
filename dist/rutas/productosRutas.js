"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productosController = require("../controladores/mysql/productosController");
// Rutas a trasar 
//import { deleteProductosById, getProductos, getProductosById, postProductos, updateProductosById } from '../controladores/sql/productosController';
var router = (0, _express.Router)();
router.get('/productos', _productosController.getProductos);
router.post('/productos', _productosController.postProductos);
router.get('/productos/:Id', _productosController.getProductosById);
router["delete"]('/productos/:Id', _productosController.deleteProductosById);
router.put('/productos/:id', _productosController.updateProductosById);
var _default = router;
exports["default"] = _default;