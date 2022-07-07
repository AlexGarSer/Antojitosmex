// Lista de imports
import {getConexion,sql,queries} from "../database";

//
export const getUsuarios = async (req,res) => {

    try {
        const pool = await getConexion();
        const result = await pool.request().query(queries.getUsuarios);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postUsuarios = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre,Descripcion,IdRol} = req.body;

    // Valida que los valores no sean nulos
    if (Nombre == null || Descripcion == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConexion();
            await pool.request()
            //Cada input es un valor del formulario
            .input("Nombre",sql.VarChar,Nombre)
            .input("Descripcion",sql.VarChar,Descripcion)
            .input("IdRol",sql.Int,IdRol)
            // este es el query real
            .query(queries.postUsuarios);

            //Impresion para ver como se esta mandando el body
            console.log(Nombre,Descripcion);
            res.json('¡Rol añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUsuariosById = async (req,res) =>{

    const {Id} = req.params

    const pool = await getConexion()
    const result = await pool.request()
    .input('Id',Id)
    .query(queries.getUsuariosById);

    // Impresion de prueba
    console.log(result);

    res.send(Id);
}

export const deleteUsuariosById = async (req,res) =>{

    const {Id} = req.params;

    const pool = await getConexion();
    const result = await pool
    .request()
    .input('Id',Id)
    .query(queries.deleteUsuariosById);

    res.send(204);
}

export const updateUsuariosById = async (req,res) => {
    const { Nombre,Descripcion,IdRol} = req.body
    const {Id} = req.params;
    if(Nombre == null|| Descripcion ==  null || IdRol == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    const pool = await getConexion();
    await pool.request()
    .input("Id",Id)
    .input("Nombre",sql.VarChar,Nombre)
    .input("Descripcion",sql.VarChar,Descripcion)
    .input("IdRol",sql.Int,IdRol)
    .query(queries.updateUsuariosById);

    res.json({Nombre,Descripcion,IdRol})
    
};
