import app from './app'

//Se extrae el puerto 
app.listen(app.get('port'))

// Se imprime el puerto del servidor
console.log('Server on port',app.get('port'));

