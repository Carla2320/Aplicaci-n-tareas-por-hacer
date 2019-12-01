const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');
let comando = argv._[0];

//Menu dependiendo de la accion que se desea hacer 
switch (comando) {
    case 'crear':
        // Llamamos a la funcion crear
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //Llamamos a las tareas dentro del json
        let listado = tareas.getLista();
        ten=argv.completado;
        //Convertimos el argv en un booleano ya se si es true or false
        let fd=String(ten)=="true";
        for (let tarea of listado) {
            tareasx=tarea.completado;
            //Vamos comparando con las listas
             if(tareasx===fd){
                 console.log('entro') 
                 console.log("======= POR HACER =====".green);
                 console.log(tarea.descripcion);
                 console.log("Estado: ", tarea.completado);
             }
    
        }
    
        break;
    case 'actualizar':
        //Funcion de actualizar
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        //funcion de borrar
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}