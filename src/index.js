const express = require ('express');
const morgan = require('morgan');
const { mongoose} = require('./database');
// el modulo path une directorios y ya sabe si se usa un os linux o windows.
const path = require('path');

// cuanto ejecuto express() obtengo un objeto que lo voy almacenar en app
const app = express();  

// setting, que se tome el puerto del servidor  sea el 3000 y si no que tome el del las variables de entorno
app.set('port', process.env.PORT || 3000);

//middlewares : que son funciones que se ejecutan antes de que lleguen a un ruta 
//este middleware es una funcion que se deje ejecutar es decir (). 
// dev es un formato de texto que se va a usar para ver el log de la aplicacion en consola

app.use(morgan('dev'));
// cada vez que llega un dato al servidor va pasar por essta funcion y va a comprobar si es un json y aceptarlo.
app.use(express.json());    


//routes

app.use('/api/task', require('./routes/task.routes'));

//static files _ le vamos a decir al servidor que la carpeta public sera enviada al navegador 
// dirname es una funcion que nos va a devolver el directorio actual desde el sistema operativo hasta el archivo que estamos ejecutando
//app.use(express.static(__dirname + '/public'));

// express mi carpeta static esta en esta direccion.. es decir el directorio public
app.use(express.static(path.join(__dirname, 'public')));


// iniciar el servidor 
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
})