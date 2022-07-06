"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

//Se extrae el puerto 
console.log('Aqui apenas vamos por el puerto...');

_app["default"].listen(_app["default"].get('port')); // Se imprime el puerto del servidor


console.log('Server on port', _app["default"].get('port'));