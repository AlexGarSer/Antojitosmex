"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _rolescontroller = require("../controladores/rolescontroller");
var router = (0, _express.Router)();
router.get('/roles', _rolescontroller.getRoles);
router.post('/roles', _rolescontroller.postRoles);
router.get('/roles/:Id', _rolescontroller.getRolesById);
router["delete"]('/roles/:Id', _rolescontroller.deleteRolesById);
router.put('/roles/:id', _rolescontroller.updateRolesById);
var _default = router;
exports["default"] = _default;