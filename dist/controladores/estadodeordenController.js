"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEstadoDeOrdenById = exports.postEstadoDeOrden = exports.getEstadoDeOrdenById = exports.getEstadoDeOrden = exports.deleteEstadoDeOrdenById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

// Lista de imports
//
var getEstadoDeOrden = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConexion)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getEstadoDeOrden);

          case 6:
            result = _context.sent;
            // para verificar que regrese lo que debe ser console.log(result);
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getEstadoDeOrden(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getEstadoDeOrden = getEstadoDeOrden;

var postEstadoDeOrden = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var Descripcion, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Aqui se va a estructurar lo que se envia en este metodo
            Descripcion = req.body.Descripcion; // Valida que los valores no sean nulos

            if (!(Descripcion == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Campos vacios. Rellena todos los campos'
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConexion)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request() //Cada input es un valor del formulario
            .input("Descripcion", _database.sql.VarChar, Descripcion) // este es el query real
            .query(_database.queries.postEstadoDeOrden);

          case 9:
            //Impresion para ver como se esta mandando el body
            console.log(Descripcion);
            res.json('¡Categoria añadida a al base de datos!');
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0.message);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 13]]);
  }));

  return function postEstadoDeOrden(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postEstadoDeOrden = postEstadoDeOrden;

var getEstadoDeOrdenById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            Id = req.params.Id;
            _context3.next = 3;
            return (0, _database.getConexion)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input('Id', Id).query(_database.queries.getEstadoDeOrdenById);

          case 6:
            result = _context3.sent;
            // Impresion de prueba
            console.log(result);
            res.send(Id);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getEstadoDeOrdenById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getEstadoDeOrdenById = getEstadoDeOrdenById;

var deleteEstadoDeOrdenById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            Id = req.params.Id;
            _context4.next = 3;
            return (0, _database.getConexion)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input('Id', Id).query(_database.queries.deleteEstadoDeOrdenById);

          case 6:
            result = _context4.sent;
            res.send(204);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteEstadoDeOrdenById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteEstadoDeOrdenById = deleteEstadoDeOrdenById;

var updateEstadoDeOrdenById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var Descripcion, Id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            Descripcion = req.body.Descripcion;
            Id = req.params.Id;

            if (!(Descripcion == null)) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: 'Campos vacios. Rellena todos los campos'
            }));

          case 4:
            _context5.next = 6;
            return (0, _database.getConexion)();

          case 6:
            pool = _context5.sent;
            _context5.next = 9;
            return pool.request().input("Id", Id).input("Descripcion", _database.sql.VarChar, Descripcion).query(_database.queries.updateEstadoDeOrdenById);

          case 9:
            res.json({
              Descripcion: Descripcion
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateEstadoDeOrdenById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateEstadoDeOrdenById = updateEstadoDeOrdenById;