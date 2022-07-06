"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
//
var queries = {
  getProductos: "SELECT * FROM Productos",
  postProductos: "INSERT INTO [Productos] VALUES (@Nombre,@Precio,@Descripcion,@Categoria,@Disponibilidad)",
  getProductosById: "SELECT * FROM Productos WHERE IdProductos=@Id",
  deleteProductosById: "DELETE FROM [dbo].[Productos] Where IdProductos=@Id",
  updateProductosById: "UPDATE [Productos] SET Nombre=@Nombre,Precio=@Precio,Descripcion=@Descripcion,Categoria=@Categoria,Disponibilidad=@Disponibilidad WHERE IdProductos = @Id",
  getCategorias: "SELECT * FROM Categorias",
  postCategorias: "INSERT INTO [Categorias] VALUES (@Nombre)",
  getCategoriasById: "SELECT * FROM Categorias WHERE id=@Id",
  deleteCategoriasById: "DELETE FROM [dbo].[Categorias] Where id=@Id",
  updateCategoriasById: "UPDATE [Categorias] SET Nombre=@Nombre WHERE id=@Id",
  getRoles: "SELECT * FROM Roles",
  postRoles: "INSERT INTO [Roles] VALUES (@Nombre,@Descripcion)",
  getRolesById: "SELECT * FROM Roles WHERE IdRoles=@Id",
  deleteRolesById: "DELETE FROM [dbo].[Roles] Where IdRoles=@Id",
  updateRolesById: "UPDATE [Roles] SET Nombre=@Nombre WHERE IdRoles=@Id",
  getUsuarios: "SELECT * FROM Usuarios",
  postUsuarios: "INSERT INTO [Usuarios] VALUES (@Nombre,@Descripcion,@IdRol)",
  getUsuariosById: "SELECT * FROM Usuarios WHERE IdUsuario=@Id",
  deleteUsuariosById: "DELETE FROM [dbo].[Usuarios] Where IdUsuario=@Id",
  updateUsuariosById: "UPDATE [Usuarios] SET Nombre=@Nombre WHERE IdUsuario=@Id",
  getCarrito: "SELECT * FROM Carrito",
  postCarrito: "INSERT INTO [Carrito] VALUES (@Fecha,@IdUsuario,@IdOrden,@Total)",
  getCarritoById: "SELECT * FROM Carrito WHERE IdCarrito=@Id",
  deleteCarritoById: "DELETE FROM [dbo].[Carrito] Where IdCarrito=@Id",
  updateCarritoById: "UPDATE [Carrito] SET Fecha=@Fecha,IdUsuario=@IdUsuario,IdOrden=@IdOrden,Total=@Total WHERE IdCarrito=@Id",
  getOrden: "SELECT * FROM Orden",
  postOrden: "INSERT INTO [Orden] VALUES (@Fecha,@Nombre,@IdProductos,@Comentarios,@EsatdoDeOrdenDescripcion)",
  getOrdenById: "SELECT * FROM Orden WHERE IdOrden=@Id",
  deleteOrdenById: "DELETE FROM [dbo].[Orden] Where IdOrden=@Id",
  updateOrdenById: "UPDATE [Orden] SET Fecha=@Fecha,Nombre=@Nombre,IdProductos=@IdProductos,Comentarios=@Comentarios,EstadoDeOrdenDescripcion=@EstadoDeOrdenDescripcion WHERE IdOrden=@Id",
  getEstadoDeOrden: "SELECT * FROM EstadoDeOrden",
  postEstadoDeOrden: "INSERT INTO [EstadoDeOrden] VALUES (@Descripcion)",
  getEstadoDeOrdenById: "SELECT * FROM EstadoDeOrden WHERE IdEstadoDeOrden=@Id",
  deleteEstadoDeOrdenById: "DELETE FROM [dbo].[EstadoDeOrden] Where IdEsatdoDeOrden=@Id",
  updateEstadoDeOrdenById: "UPDATE [EstadoDeOrden] SET Descripcion=@Descripcion WHERE IdEstadoDeOrden=@Id"
};
exports.queries = queries;