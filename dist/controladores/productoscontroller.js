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
            return (0, _database.getConection)();
          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.query(_database.queries.getProductos);
          case 6:
            result = _context.sent;
            // para verificar que regrese lo que debe ser console.log(result);
            res.json(result);
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
    var _req$body, Nombre, Precio, Descripcion, Categoria, Disponibilidad, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Aqui se va a estructurar lo que se envia en este metodo
            _req$body = req.body, Nombre = _req$body.Nombre, Precio = _req$body.Precio, Descripcion = _req$body.Descripcion, Categoria = _req$body.Categoria;
            Disponibilidad = req.body.Disponibilidad; // Valida que disponibilidad no sea nulo o lo cambia por un 0 
            if (Disponibilidad == null) {
              Disponibilidad == false;
            }
            // Valida que el resto de datos del formulario no sean nulos
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
            return (0, _database.getConection)();
          case 8:
            pool = _context2.sent;
            _context2.next = 11;
            return pool.query(_database.queries.postProductos, [Nombre, Precio, Descripcion, Categoria, Disponibilidad]);
          case 11:
            result = _context2.sent;
            //Impresion para ver como se esta mandando el body
            console.log(Nombre, Precio, Descripcion, Categoria, Disponibilidad);
            res.json(result);
            _context2.next = 20;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](5);
            res.status(500);
            res.send(_context2.t0.message);
          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 16]]);
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
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _database.getConection)();
          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.query(_database.queries.getProductosById, Id);
          case 7:
            result = _context3.sent;
            // Impresion de prueba
            console.log(result);
            res.json(result);
            _context3.next = 16;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            res.status(500);
            res.send(_context3.t0.message);
          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
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
            _context4.prev = 1;
            _context4.next = 4;
            return (0, _database.getConection)();
          case 4:
            pool = _context4.sent;
            _context4.next = 7;
            return pool.query(_database.queries.deleteProductosById, Id);
          case 7:
            result = _context4.sent;
            res.send(204);
            console.log(result);
            _context4.next = 16;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            res.status(500);
            res.send(_context4.t0.message);
          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 12]]);
  }));
  return function deleteProductosById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteProductosById = deleteProductosById;
var updateProductosById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, Nombre, Precio, Descripcion, Categoria, Disponibilidad, Id, pool, result;
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
            _context5.prev = 5;
            _context5.next = 8;
            return (0, _database.getConection)();
          case 8:
            pool = _context5.sent;
            _context5.next = 11;
            return pool.query(_database.queries.updateProductosById, [Nombre, Precio, Descripcion, Categoria, Disponibilidad, Id]);
          case 11:
            result = _context5.sent;
            res.json(result);
            _context5.next = 19;
            break;
          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](5);
            res.status(500);
            res.send(_context5.t0.message);
          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 15]]);
  }));
  return function updateProductosById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateProductosById = updateProductosById;