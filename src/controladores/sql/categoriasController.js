// Lista de imports
import {getConexion,sql,queries} from "../database";

//
export const getCategorias = async (req,res) => {

    try {
        const pool = await getConexion();
        const result = await pool.request().query(queries.getCategorias);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postCategorias = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre} = req.body;

    // Valida que los valores no sean nulos
    if (Nombre == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConexion();
            await pool.request()
            //Cada input es un valor del formulario
            .input("Nombre",sql.VarChar,Nombre)
            // este es el query real
            .query(queries.postCategorias);

            //Impresion para ver como se esta mandando el body
            console.log(Nombre);
            res.json('¡Categoria añadida a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getCategoriasById = async (req,res) =>{

    const {Id} = req.params

    const pool = await getConexion()
    const result = await pool.request()
    .input('Id',Id)
    .query(queries.getCategoriasById);

    // Impresion de prueba
    console.log(result);

    res.send(Id);
}

export const deleteCategoriasById = async (req,res) =>{

    const {Id} = req.params;

    const pool = await getConexion();
    const result = await pool
    .request()
    .input('Id',Id)
    .query(queries.deleteCategoriasById);

    res.send(204);
}

export const updateCategoriasById = async (req,res) => {
    const { Nombre} = req.body
    const {Id} = req.params;
    if(Nombre == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    const pool = await getConexion();
    await pool.request()
    .input("Id",Id)
    .input("Nombre",sql.VarChar,Nombre)
    .query(queries.updateCategoriasById);

    res.json({Nombre})
    
};
