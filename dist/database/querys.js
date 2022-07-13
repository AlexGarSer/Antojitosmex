"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
//
var queries = {
  getProductos: "SELECT * FROM Productos",
  postProductos: "INSERT INTO `Productos` (`IdProductos`, `Nombre`, `Precio`, `Descripcion`, `Categorias`, `Disponibilidad`) VALUES (Null,?,?,?,?,?)",
  getProductosById: "SELECT * FROM Productos WHERE IdProductos = ?",
  deleteProductosById: "DELETE FROM Productos Where IdProductos = ?",
  updateProductosById: "UPDATE Productos SET Nombre = ? , Precio = ? , Descripcion = ? ,Categoria = ? ,Disponibilidad = ? WHERE IdProductos = ?",
  getCategorias: "SELECT * FROM Categorias",
  postCategorias: "INSERT INTO `Categorias`(`id`, `Nombre`) VALUES (Null,?)",
  getCategoriasById: "SELECT * FROM Categorias WHERE id = ?",
  deleteCategoriasById: "DELETE FROM Categorias WHERE id = ?",
  updateCategoriasById: "UPDATE Categorias SET Nombre = ? WHERE id = ?",
  getRoles: "SELECT * FROM Roles",
  postRoles: "INSERT INTO `Roles`(`IdRoles`, `Nombre`, `Descripcion`) VALUES (Null,?,?)",
  getRolesById: "SELECT * FROM Roles WHERE IdRoles = ? ",
  deleteRolesById: "DELETE FROM Roles Where IdRoles= ?",
  updateRolesById: "UPDATE Roles SET Nombre = ? WHERE IdRoles = ?",
  getUsuarios: "SELECT * FROM Usuarios",
  postUsuarios: "INSERT INTO `Usuarios`(`IdUsuario`, `Nombre`, `Descripcion`, `IdRol`) VALUES (Null,?,?,?)",
  getUsuariosById: "SELECT * FROM Usuarios WHERE IdUsuario = ?",
  deleteUsuariosById: "DELETE FROM Usuarios WHERE IdUsuario = ?",
  updateUsuariosById: "UPDATE Usuarios SET Nombre = ? WHERE IdUsuario = ?",
  getCarrito: "SELECT * FROM Carrito",
  postCarrito: "INSERT INTO `Carrito`(`IdCarrito`, `Fecha`, `IdUsuario`, `IdOrden`, `Total`) VALUES (Null,?,?,?,?)",
  getCarritoById: "SELECT * FROM Carrito WHERE IdCarrito = ?",
  deleteCarritoById: "DELETE FROM Carrito WHERE IdCarrito = ?",
  updateCarritoById: "UPDATE Carrito SET Fecha = ? , IdUsuario = ? , IdOrden = ? , Total = ? WHERE IdCarrito = ? ",
  getOrden: "SELECT * FROM Orden",
  postOrden: "INSERT INTO `Orden`(`IdOrden`, `Fecha`, `Nombre`, `IdProductos`, `Comentarios`, `EsatdoDeOrdenDescripcion`) VALUES (Null,?,?,?,?,?)",
  getOrdenById: "SELECT * FROM Orden WHERE IdOrden = ?",
  deleteOrdenById: "DELETE FROM Orden WHERE IdOrden = ?",
  updateOrdenById: "UPDATE Orden SET Fecha = ? , Nombre = ? , IdProductos = ? , Comentarios = ? , EstadoDeOrdenDescripcion = ? WHERE IdOrden = ?",
  getEstadoDeOrden: "SELECT * FROM EstadoDeOrden",
  postEstadoDeOrden: "INSERT INTO `EstadoDeOrden`(`IdEstadoDeOrden`, `Descripcion`) VALUES (Null,?)",
  getEstadoDeOrdenById: "SELECT * FROM EstadoDeOrden WHERE IdEstadoDeOrden = ?",
  deleteEstadoDeOrdenById: "DELETE FROM EstadoDeOrden Where IdEsatdoDeOrden = ?",
  updateEstadoDeOrdenById: "UPDATE EstadoDeOrden SET Descripcion = ? WHERE IdEstadoDeOrden = ?",
  getEstadoDisponibilidad: "SELECT * FROM EstadoDisponibilidad",
  postEstadoDisponibilidad: "INSERT INTO `EstadoDisponibilidad`(`IdDisponibilidad`, `Descripcion`) VALUES (Null,?)",
  getEstadoDisponibilidadById: "SELECT * FROM EstadoDisponibilidad WHERE IdDisponibilidad = ?",
  deleteEstadoDisponibilidadById: "DELETE FROM EstadoDisponibilidad Where IdDisponibilidad = ?",
  updateEstadoDisponibilidadById: "UPDATE EstadoDisponibilidad SET Descripcion = ? WHERE IdDisponibilidad = ?"
};
exports.queries = queries;