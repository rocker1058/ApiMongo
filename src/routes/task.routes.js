const express = require ('express')
// task es el modelo que vamos a usar a la hora de crear una tarea y almacenarla en la db
const Task = require('../models/task');
// con router voy a poder definir las rutas de mi servidor y usarlas en cualquier lugar
const router = express.Router();

// una rest api es una direccion donde la app de react va poder acceder a los datos etc. 
router.get('/', async (req, res)=>{

    // consulta en la db , con el await decimos que esta tarea va tomar 
    //algo de tiempo y cuando termine va guardarse en la consta task
    const tasks = await Task.find() 
    res.send(tasks)
});

router.get('/:id', async (req, res)=>{

    // consulta en la db , con el await decimos que esta tarea va tomar 
    //algo de tiempo y cuando termine va guardarse en la consta task
    const tasks = await Task.findById(req.params.id) 
    res.send(tasks)
});


router.post('/', async (req, res) =>{
   const {title, description} = req.body;
   const task = new Task({title, description});
   await task.save();
   res.send('Tarea guardada');
})

router.put('/:id', async (req, res) => {
    const {title, description} = req.body
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.send('Actualizada')

})

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.send('Eliminada')

})


module.exports = router;