"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _rolesController = require("../controladores/rolesController");

var router = (0, _express.Router)();
router.get('/roles', _rolesController.getRoles);
router.post('/roles', _rolesController.postRoles);
router.get('/roles/:Id', _rolesController.getRolesById);
router["delete"]('/roles/:Id', _rolesController.deleteRolesById);
router.put('/roles/:id', _rolesController.updateRolesById);
var _default = router;
exports["default"] = _default;