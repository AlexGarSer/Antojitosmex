"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _productosRutas = _interopRequireDefault(require("./rutas/productosRutas"));
var _categoriasRutas = _interopRequireDefault(require("./rutas/categoriasRutas"));
var _carritoRutas = _interopRequireDefault(require("./rutas/carritoRutas"));
var _rolesRutas = _interopRequireDefault(require("./rutas/rolesRutas"));
var _ordenRutas = _interopRequireDefault(require("./rutas/ordenRutas"));
var _estadodeordenRutas = _interopRequireDefault(require("./rutas/estadodeordenRutas"));
var _usuariosRutas = _interopRequireDefault(require("./rutas/usuariosRutas"));
var _estadodisponibilidadRutas = _interopRequireDefault(require("./rutas/estadodisponibilidadRutas"));
//Lista de exportaciones

// App corre express
var app = (0, _express["default"])();

// Configuraciones de app

// Puerto extraido de config
app.set('port', _config["default"].port);

//middleware
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.send('¡Api rest desplegada y funcionando!');
});
// Rutas 
app.use(_productosRutas["default"]);
app.use(_categoriasRutas["default"]);
app.use(_carritoRutas["default"]);
app.use(_rolesRutas["default"]);
app.use(_ordenRutas["default"]);
app.use(_estadodisponibilidadRutas["default"]);
app.use(_estadodeordenRutas["default"]);
app.use(_usuariosRutas["default"]);
var _default = app;
exports["default"] = _default;