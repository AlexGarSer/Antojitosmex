//Importar variables del entorno
import { config } from "dotenv"

// Correr config para visualizar las variables del entorno
config();

// Impresion para ver el codigo 
console.log('El puerto elegido es: '+process.env.port);

export default{
    port : process.env.port || 8000,
    dbUser: process.env.dbUser|| '',
    dbPassword: process.env.dbPassword || '',
    dbServer: process.env.dbServer || '',
    dbDataBase: process.env.dbDataBase || ''
};
console.log('Saliendo del config')