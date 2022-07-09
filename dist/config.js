"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

//Importar variables del entorno
// Correr config para visualizar las variables del entorno
(0, _dotenv.config)(); // Impresion para ver el codigo 

console.log('El puerto elegido es: ' + process.env.port);
var _default = {
  port: process.env.port || 3000,
  dbUser: process.env.dbUser || '',
  dbPassword: process.env.dbPassword || '',
  dbServer: process.env.dbServer || '',
  dbDataBase: process.env.dbDataBase || ''
};
exports["default"] = _default;
console.log('Saliendo del config');