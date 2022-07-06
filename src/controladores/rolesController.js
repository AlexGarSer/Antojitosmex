// Lista de imports
import {getConexion,sql,queries} from "../database";

//
export const getRoles = async (req,res) => {

    try {
        const pool = await getConexion();
        const result = await pool.request().query(queries.getRoles);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postRoles = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre,Descripcion} = req.body;

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
            // este es el query real
            .query(queries.postRoles);

            //Impresion para ver como se esta mandando el body
            console.log(Nombre,Descripcion);
            res.json('¡Rol añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getRolesById = async (req,res) =>{

    const {Id} = req.params

    const pool = await getConexion()
    const result = await pool.request()
    .input('Id',Id)
    .query(queries.getRolesById);

    // Impresion de prueba
    console.log(result);

    res.send(Id);
}

export const deleteRolesById = async (req,res) =>{

    const {Id} = req.params;

    const pool = await getConexion();
    const result = await pool
    .request()
    .input('Id',Id)
    .query(queries.deleteRolesById);

    res.send(204);
}

export const updateRolesById = async (req,res) => {
    const { Nombre,Descripcion} = req.body
    const {Id} = req.params;

    if(Nombre == null, Descripcion == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    const pool = await getConexion();
    await pool.request()
    .input("Id",Id)
    .input("Nombre",sql.VarChar,Nombre)
    .input("Descripcion",sql.VarChar,Descripcion)
    .query(queries.updateRolesById);

    res.json({Nombre,Descripcion})
    
};
