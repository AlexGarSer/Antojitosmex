"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConection = getConection;
Object.defineProperty(exports, "mysql", {
  enumerable: true,
  get: function get() {
    return _promiseMysql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _promiseMysql = _interopRequireDefault(require("promise-mysql"));
var _config = _interopRequireDefault(require("../config"));
var conexion = {
  host: _config["default"].dbServer,
  database: _config["default"].dbDataBase,
  user: _config["default"].dbUser,
  password: _config["default"].dbPassword
};
function getConection() {
  return _getConection.apply(this, arguments);
}
function _getConection() {
  _getConection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            pool = _promiseMysql["default"].createPool(conexion);
            return _context.abrupt("return", pool);
          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _getConection.apply(this, arguments);
}
;