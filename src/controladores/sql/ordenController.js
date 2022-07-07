// Lista de imports
import {getConexion,sql,queries} from "../database";

//
export const getOrden = async (req,res) => {

    try {
        const pool = await getConexion();
        const result = await pool.request().query(queries.getOrden);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postOrden = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Fecha,Nombre,IdProductos,Comentarios,EstadoDeOrdenDescripcion} = req.body;
    const {Id} = req.params;
    // Valida que los valores no sean nulos
    if (Fecha == null || Nombre == null || IdProductos == null || Comentarios == null || EstadoDeOrdenDescripcion) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConexion();
            await pool.request()
            //Cada input es un valor del formulario
            .input("Id",Id)
            .input("Fecha",sql.VarChar,Fecha)
            .input("Nombre",sql.VarChar,Nombre)
            input("IdProductos",sql.Int,IdProductos)
            .input("Comentarios",sql.VarChar,Comentarios)
            .input("EstadoDeOrdenDescripcion",sql.VarChar,EstadoDeOrdenDescripcion)
            // este es el query real
            .query(queries.postOrden);

            //Impresion para ver como se esta mandando el body
            console.log(Fecha,Nombre);
            res.json('¡Rol añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getOrdenById = async (req,res) =>{

    const {Id} = req.params

    const pool = await getConexion()
    const result = await pool.request()
    .input('Id',Id)
    .query(queries.getOrdenById);

    // Impresion de prueba
    console.log(result);

    res.send(Id);
}

export const deleteOrdenById = async (req,res) =>{

    const {Id} = req.params;

    const pool = await getConexion();
    const result = await pool
    .request()
    .input('Id',Id)
    .query(queries.deleteOrdenById);

    res.send(204);
}

export const updateOrdenById = async (req,res) => {
    const { Fecha,Nombre,IdProductos,Comentarios,EstadoDeOrdenDescripcion} = req.body

    if(Fecha == null || Nombre == null || IdProductos == null || Comentarios == null || EstadoDeOrdenDescripcion){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    const pool = await getConexion();
    await pool.request()
    .input("Fecha",sql.VarChar,Fecha)
    .input("Nombre",sql.VarChar,Nombre)
    input("IdProductos",sql.Int,IdProductos)
    .input("Comentarios",sql.VarChar,Comentarios)
    .input("EstadoDeOrdenDescripcion",sql.VarChar,EstadoDeOrdenDescripcion)
    .query(queries.updateOrdenById);

    res.json({Fecha,Nombre,IdProductos,Comentarios,EstadoDeOrdenDescripcion})
    
};
