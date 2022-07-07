// Lista de imports
import {getConexion,sql,queries} from "../../database";

//
export const getCarrito = async (req,res) => {

    try {
        const pool = await getConexion();
        const result = await pool.request().query(queries.getCarrito);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postCarrito = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Fecha,IdUsuario,IdOrden,Total} = req.body;

    // Valida que los valores no sean nulos
    if (Fecha == null || IdUsuario == null || IdOrden == null || Total == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConexion();
            await pool.request()
            //Cada input es un valor del formulario
            .input("Fecha",sql.VarChar,Fecha)
            .input("IdUsuario",sql.VarChar,IdUsuario)
            .input("IdOrden",sql.Int,IdOrden)
            .input("Total",sql.Float,Total)
            // este es el query real
            .query(queries.postCarrito);

            //Impresion para ver como se esta mandando el body
            console.log(Fecha,IdUsuario,IdOrden,Total);
            res.json('¡Carrito añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getCarritoById = async (req,res) =>{

    const {Id} = req.params

    const pool = await getConexion()
    const result = await pool.request()
    .input('Id',Id)
    .query(queries.getCarritoById);

    // Impresion de prueba
    console.log(result);

    res.send(Id);
}

export const deleteCarritoById = async (req,res) =>{

    const {Id} = req.params;

    const pool = await getConexion();
    const result = await pool
    .request()
    .input('Id',Id)
    .query(queries.deleteCarritoById);

    res.send(204);
}

export const updateCarritoById = async (req,res) => {
    const { Fecha,IdUsuario} = req.body
    const {Id} = req.params;

    if(Fecha == null, IdUsuario == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    const pool = await getConexion();
    await pool.request().input("Id",Id)
    .input("Fecha",sql.VarChar,Fecha)
    .input("IdUsuario",sql.VarChar,IdUsuario)
    .input("IdOrden",sql.Int,IdOrden)
    .input("Total",sql.Float,Total)
    .query(queries.updateCarritoById);

    res.json({Fecha,IdUsuario,IdOrden,Total})
    
};
