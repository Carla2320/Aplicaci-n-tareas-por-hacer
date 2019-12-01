
const fs = require('fs');

let tareasPorHacer = [];
//buscamos el archivo .json creado en el path puesto.
const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}
//Funcion que guardamos datos dentro del json.
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
//Escribimos la informacion con el comando stringify 
// y vamos guardando dentro de esta json.
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}
//Funcion que hace crear las actividades dentro del archivo json
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    //Guardamos en la variable tarea y llamamos a la funcion guardaDB
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}
//Utilizamos esto para mostrar lo realizado en el json
const getLista = () => {
    cargarDB();
    return tareasPorHacer;
}
//Actualizamos las tareas si son realizadas o no cambiando el estado de true o false
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

}
const lista = (completado) => {
    cargarDB();
        let index1 = tareasPorHacer.filter(tarea => tarea.length === 3);
        if (index1 >= 0) {
            return index1
        }
}

//Borramos las tareas por medio de la descripcion
const borrar = (descripcion) => {
    //Cargamos el json y guardamos en una variable el resultado de si tarea es diferente de lo que tenemos en el json
    //ira a la otra condicion
    cargarDB();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}




module.exports = {
    crear,
    getLista,
    actualizar,
    borrar, lista
}