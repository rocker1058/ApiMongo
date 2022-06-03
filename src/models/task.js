// vamos a modelar los datos de la db
// Schema permite definir el esquema de los datos , autor, titulo, descripcion, estado etc.

const {Schema, default: mongoose} = require ('mongoose');

const TaskSchema = new Schema ({
    title: { type : String,  required : true},
    description: { type : String,  required : true},
});

// TaskSchema es como van a lucir los datos es decir la estructura
// Task es el nombre de la coleccion en la db, es decir la tabla...
module.exports = mongoose.model('Task', TaskSchema);