"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productoscontroller = require("../controladores/productoscontroller");
// Rutas a trasar 

var router = (0, _express.Router)();
router.get('/productos', _productoscontroller.getProductos);
router.post('/productos', _productoscontroller.postProductos);
router.get('/productos/:Id', _productoscontroller.getProductosById);
router["delete"]('/productos/:Id', _productoscontroller.deleteProductosById);
router.put('/productos/:id', _productoscontroller.updateProductosById);
var _default = router;
exports["default"] = _default;