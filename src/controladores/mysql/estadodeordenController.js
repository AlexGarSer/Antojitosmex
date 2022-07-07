// Lista de imports
import {getConection,sql,queries} from "../../database";

//
export const getEstadoDeOrden = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.request().query(queries.getEstadoDeOrden);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postEstadoDeOrden = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Descripcion} = req.body;

    // Valida que los valores no sean nulos
    if (Descripcion == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConection();
            await pool.request()
            //Cada input es un valor del formulario
            .input("Descripcion",sql.VarChar,Descripcion)
            // este es el query real
            .query(queries.postEstadoDeOrden);

            //Impresion para ver como se esta mandando el body
            console.log(Descripcion);
            res.json('¡Categoria añadida a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEstadoDeOrdenById = async (req,res) =>{

    const {Id} = req.params

    const pool = await getConection()
    const result = await pool.request()
    .input('Id',Id)
    .query(queries.getEstadoDeOrdenById);

    // Impresion de prueba
    console.log(result);

    res.send(Id);
}

export const deleteEstadoDeOrdenById = async (req,res) =>{

    const {Id} = req.params;

    const pool = await getConection();
    const result = await pool
    .request()
    .input('Id',Id)
    .query(queries.deleteEstadoDeOrdenById);

    res.send(204);
}

export const updateEstadoDeOrdenById = async (req,res) => {
    const { Descripcion} = req.body
    const {Id} = req.params;
    if(Descripcion == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    const pool = await getConection();
    await pool.request()
    .input("Id",Id)
    .input("Descripcion",sql.VarChar,Descripcion)
    .query(queries.updateEstadoDeOrdenById);

    res.json({Descripcion})
    
};
