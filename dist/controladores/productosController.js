"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductosById = exports.postProductos = exports.getProductosById = exports.getProductos = exports.deleteProductosById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

// Lista de imports
var getProductos = /*#__PURE__*/function () {
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
            return pool.request().query(_database.queries.getProductos);

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

  return function getProductos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProductos = getProductos;

var postProductos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Nombre, Precio, Descripcion, Categoria, Disponibilidad, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Aqui se va a estructurar lo que se envia en este metodo
            _req$body = req.body, Nombre = _req$body.Nombre, Precio = _req$body.Precio, Descripcion = _req$body.Descripcion, Categoria = _req$body.Categoria;
            Disponibilidad = req.body.Disponibilidad; // Valida que disponibilidad no sea nulo o lo cambia por un 0 

            if (Disponibilidad == null) {
              Disponibilidad == false;
            } // Valida que el resto de datos del formulario no sean nulos


            if (!(Nombre == null || Precio == null || Descripcion == null || Categoria == null)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Campos vacios. Rellena todos los campos'
            }));

          case 5:
            _context2.prev = 5;
            _context2.next = 8;
            return (0, _database.getConexion)();

          case 8:
            pool = _context2.sent;
            _context2.next = 11;
            return pool.request().input("Nombre", _database.sql.VarChar, Nombre).input("Precio", _database.sql.Float, Precio).input("Descripcion", _database.sql.VarChar, Descripcion).input("Categoria", _database.sql.VarChar, Categoria).input("Disponibilidad", _database.sql.Bit, Disponibilidad).query(_database.queries.postProductos);

          case 11:
            //Impresion para ver como se esta mandando el body
            console.log(Nombre, Precio, Descripcion, Categoria, Disponibilidad);
            res.json({
              Nombre: Nombre,
              Precio: Precio,
              Descripcion: Descripcion,
              Categoria: Categoria,
              Disponibilidad: Disponibilidad
            });
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](5);
            res.status(500);
            res.message(_context2.t0.message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 15]]);
  }));

  return function postProductos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postProductos = postProductos;

var getProductosById = /*#__PURE__*/function () {
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
            return pool.request().input('Id', Id).query(_database.queries.getProductosById);

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

  return function getProductosById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductosById = getProductosById;

var deleteProductosById = /*#__PURE__*/function () {
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
            return pool.request().input('Id', Id).query(_database.queries.deleteProductosById);

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

  return function deleteProductosById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProductosById = deleteProductosById;

var updateProductosById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, Nombre, Precio, Descripcion, Categoria, Disponibilidad, Id, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, Nombre = _req$body2.Nombre, Precio = _req$body2.Precio, Descripcion = _req$body2.Descripcion, Categoria = _req$body2.Categoria;
            Disponibilidad = req.body.Disponibilidad;
            Id = req.params.Id;

            if (!(Nombre == null || Precio == null || Descripcion == null || Categoria == null || Disponibilidad == null)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: 'Campos vacios. Rellena todos los campos'
            }));

          case 5:
            _context5.next = 7;
            return (0, _database.getConexion)();

          case 7:
            pool = _context5.sent;
            _context5.next = 10;
            return pool.request().input("Id", Id).input("Nombre", _database.sql.VarChar, Nombre).input("Precio", _database.sql.Float, Precio).input("Descripcion", _database.sql.VarChar, Descripcion).input("Categoria", _database.sql.VarChar, Categoria).input("Disponibilidad", _database.sql.Bit, Disponibilidad).query(_database.queries.updateProductosById);

          case 10:
            res.json({
              Nombre: Nombre,
              Precio: Precio,
              Descripcion: Descripcion,
              Categoria: Categoria,
              Disponibilidad: Disponibilidad
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateProductosById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProductosById = updateProductosById;