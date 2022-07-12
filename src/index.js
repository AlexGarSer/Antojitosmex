import app from './app'

//Se extrae el puerto 
app.listen(app.get('PORT'))

// Se imprime el puerto del servidor
console.log('Server on port',app.get('PORT'));

