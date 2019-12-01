// Aqui tenemos todas las variables que van hacer utilizadas para realizar las acciones por medio del 
//llamado de las constantes como descripcion, y completado
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};

const argv = require('yargs')
//Todos las acciones que vamos a utilizar
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
     .command('listar', 'Realizada o no la tarea', {
        completado
     })
    .help()
    .argv;
//exportamos el argv 
module.exports = {
    argv
}