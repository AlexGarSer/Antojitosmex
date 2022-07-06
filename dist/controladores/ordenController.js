"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrdenById = exports.postOrden = exports.getOrdenById = exports.getOrden = exports.deleteOrdenById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

// Lista de imports
//
var getOrden = /*#__PURE__*/function () {
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
            return pool.request().query(_database.queries.getOrden);

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

  return function getOrden(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getOrden = getOrden;

var postOrden = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Fecha, Nombre, IdProductos, Comentarios, EstadoDeOrdenDescripcion, Id, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Aqui se va a estructurar lo que se envia en este metodo
            _req$body = req.body, Fecha = _req$body.Fecha, Nombre = _req$body.Nombre, IdProductos = _req$body.IdProductos, Comentarios = _req$body.Comentarios, EstadoDeOrdenDescripcion = _req$body.EstadoDeOrdenDescripcion;
            Id = req.params.Id; // Valida que los valores no sean nulos

            if (!(Fecha == null || Nombre == null || IdProductos == null || Comentarios == null || EstadoDeOrdenDescripcion)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Campos vacios. Rellena todos los campos'
            }));

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return (0, _database.getConexion)();

          case 7:
            pool = _context2.sent;
            _context2.next = 10;
            return pool.request() //Cada input es un valor del formulario
            .input("Id", Id).input("Fecha", _database.sql.VarChar, Fecha).input("Nombre", _database.sql.VarChar, Nombre);

          case 10:
            input("IdProductos", _database.sql.Int, IdProductos).input("Comentarios", _database.sql.VarChar, Comentarios).input("EstadoDeOrdenDescripcion", _database.sql.VarChar, EstadoDeOrdenDescripcion) // este es el query real
            .query(_database.queries.postOrden); //Impresion para ver como se esta mandando el body

            console.log(Fecha, Nombre);
            res.json('¡Rol añadido a al base de datos!');
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](4);
            res.status(500);
            res.send(_context2.t0.message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 15]]);
  }));

  return function postOrden(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postOrden = postOrden;

var getOrdenById = /*#__PURE__*/function () {
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
            return pool.request().input('Id', Id).query(_database.queries.getOrdenById);

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

  return function getOrdenById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOrdenById = getOrdenById;

var deleteOrdenById = /*#__PURE__*/function () {
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
            return pool.request().input('Id', Id).query(_database.queries.deleteOrdenById);

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

  return function deleteOrdenById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteOrdenById = deleteOrdenById;

var updateOrdenById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, Fecha, Nombre, IdProductos, Comentarios, EstadoDeOrdenDescripcion, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, Fecha = _req$body2.Fecha, Nombre = _req$body2.Nombre, IdProductos = _req$body2.IdProductos, Comentarios = _req$body2.Comentarios, EstadoDeOrdenDescripcion = _req$body2.EstadoDeOrdenDescripcion;

            if (!(Fecha == null || Nombre == null || IdProductos == null || Comentarios == null || EstadoDeOrdenDescripcion)) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: 'Campos vacios. Rellena todos los campos'
            }));

          case 3:
            _context5.next = 5;
            return (0, _database.getConexion)();

          case 5:
            pool = _context5.sent;
            _context5.next = 8;
            return pool.request().input("Fecha", _database.sql.VarChar, Fecha).input("Nombre", _database.sql.VarChar, Nombre);

          case 8:
            input("IdProductos", _database.sql.Int, IdProductos).input("Comentarios", _database.sql.VarChar, Comentarios).input("EstadoDeOrdenDescripcion", _database.sql.VarChar, EstadoDeOrdenDescripcion).query(_database.queries.updateOrdenById);
            res.json({
              Fecha: Fecha,
              Nombre: Nombre,
              IdProductos: IdProductos,
              Comentarios: Comentarios,
              EstadoDeOrdenDescripcion: EstadoDeOrdenDescripcion
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateOrdenById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateOrdenById = updateOrdenById;