"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _carritocontroller = require("../controladores/carritocontroller");
var router = (0, _express.Router)();
router.get('/carrito', _carritocontroller.getCarrito);
router.post('/carrito', _carritocontroller.postCarrito);
router.get('/carrito/:Id', _carritocontroller.getCarritoById);
router["delete"]('/carrito/:Id', _carritocontroller.deleteCarritoById);
router.put('/carrito/:id', _carritocontroller.updateCarritoById);
var _default = router;
exports["default"] = _default;