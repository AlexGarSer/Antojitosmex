"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _carritoController = require("../controladores/carritoController");

var router = (0, _express.Router)();
router.get('/carrito', _carritoController.getCarrito);
router.post('/carrito', _carritoController.postCarrito);
router.get('/carrito/:Id', _carritoController.getCarritoById);
router["delete"]('/carrito/:Id', _carritoController.deleteCarritoById);
router.put('/carrito/:id', _carritoController.updateCarritoById);
var _default = router;
exports["default"] = _default;