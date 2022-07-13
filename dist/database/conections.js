"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConexion = getConexion;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mssql = _interopRequireDefault(require("mssql"));

var _config = _interopRequireDefault(require("../config"));

//Lista de importaciones
// Configuracion de la conexion
var dbConfiguracion = {
  user: _config["default"].dbUser,
  password: _config["default"].dbPassword,
  server: _config["default"].dbServer,
  database: _config["default"].dbDataBase,
  options: {
    encrypt: false,
    trustServerCertificate: false
  }
}; //Realizar al conexion con esta configuracion de manera asincrona

function getConexion() {
  return _getConexion.apply(this, arguments);
}

function _getConexion() {
  _getConexion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // pool es la conexion
            console.log("Apunto de conseguir la conexion");
            _context.next = 4;
            return _mssql["default"].connect(dbConfiguracion);

          case 4:
            pool = _context.sent;
            return _context.abrupt("return", pool);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            // Por si sale un error poder ver que paso
            console.log('Algo salio mal en el try catch del pool');
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getConexion.apply(this, arguments);
}