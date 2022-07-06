// Lista de imports
import {getConexion,sql,queries} from "../database";

export const getProductos = async (req,res) => {

    try {
        const pool = await getConexion();
        const result = await pool.request().query(queries.getProductos);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postProductos = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const { Nombre, Precio, Descripcion, Categoria} = req.body
    let{Disponibilidad} = req.body
    // Valida que disponibilidad no sea nulo o lo cambia por un 0 
    if (Disponibilidad == null) {
        Disponibilidad == false;
    }
    // Valida que el resto de datos del formulario no sean nulos
    if (Nombre == null || Precio == null || Descripcion == null || Categoria == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
        // la conexion a la base de datos
        const pool = await getConexion()
        await pool.request()
        .input("Nombre",sql.VarChar,Nombre)
        .input("Precio",sql.Float,Precio)
        .input("Descripcion",sql.VarChar,Descripcion)
        .input("Categoria",sql.VarChar,Categoria)
        .input("Disponibilidad",sql.Bit,Disponibilidad)
        .query(queries.postProductos);

        //Impresion para ver como se esta mandando el body
        console.log(Nombre,Precio,Descripcion,Categoria,Disponibilidad)

        res.json({Nombre,Precio,Descripcion,Categoria,Disponibilidad});
    } catch (error) {
        res.status(500);
        res.message(error.message);
    }
};

export const getProductosById = async (req,res) =>{

    const {Id} = req.params

    const pool = await getConexion()
    const result = await pool.request()
    .input('Id',Id)
    .query(queries.getProductosById);

    // Impresion de prueba
    console.log(result);

    res.send(Id);
}

export const deleteProductosById = async (req,res) =>{

    const {Id} = req.params;

    const pool = await getConexion();
    const result = await pool
    .request()
    .input('Id',Id)
    .query(queries.deleteProductosById);

    res.send(204);
}

export const updateProductosById = async (req,res) => {
    const { Nombre, Precio, Descripcion, Categoria} = req.body
    let{Disponibilidad} = req.body
    const {Id} = req.params;
    
    if(Nombre == null || Precio == null || Descripcion == null || Categoria == null || Disponibilidad == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    const pool = await getConexion();
    await pool.request()
    .input("Id",Id)
    .input("Nombre",sql.VarChar,Nombre)
    .input("Precio",sql.Float,Precio)
    .input("Descripcion",sql.VarChar,Descripcion)
    .input("Categoria",sql.VarChar,Categoria)
    .input("Disponibilidad",sql.Bit,Disponibilidad)
    .query(queries.updateProductosById);

    res.json({Nombre,Precio,Descripcion,Categoria,Disponibilidad})
    
};