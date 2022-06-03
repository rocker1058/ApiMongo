// moongose permite conectarnos a la base de datos de mongoDB y al mismo definir como van 
// a lucir los datos que vamos a almacenar en la base de datos

const mongoose = require('mongoose');

// ahora le decimos que se conecte a traves del protocolo de mongoDB 
// a una base de datos que esta en el localhost y va llamar task-manager-api
const URI = 'mongodb://localhost/task-manager-api';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
    
// exportamos el arhivo monogoose para que pueda ser usado en nuestro servidor
module.exports = mongoose;