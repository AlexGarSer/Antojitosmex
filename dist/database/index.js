"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  queries: true
};
Object.defineProperty(exports, "queries", {
  enumerable: true,
  get: function get() {
    return _querys.queries;
  }
});

var _conections = require("./conections");

Object.keys(_conections).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _conections[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conections[key];
    }
  });
});

var _querys = require("./querys");