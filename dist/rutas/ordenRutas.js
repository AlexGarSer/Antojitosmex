"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ordencontroller = require("../controladores/ordencontroller");
var router = (0, _express.Router)();
router.get('/orden', _ordencontroller.getOrden);
router.post('/orden', _ordencontroller.postOrden);
router.get('/orden/:Id', _ordencontroller.getOrdenById);
router["delete"]('/orden/:Id', _ordencontroller.deleteOrdenById);
router.put('/orden/:id', _ordencontroller.updateOrdenById);
var _default = router;
exports["default"] = _default;