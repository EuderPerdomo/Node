import colors from 'colors'
//require('colors')
import { inquireMenu, leerInput, pausa ,listadoTareasBorrar,confirmar} from './helpers/inquirer.js'
import { Tareas } from './models/tareas.js'
import {guardarDB,leerDB} from './helpers/guardarArchivo.js'


//const { mostrarMenu, pausa } = require('./helpers/mensajes')

const main= async()=>{
console.clear()

let opt=''
const tareas =new Tareas()

const tareasDB=leerDB()


if (tareasDB){
tareas.cargarTareasFromArray(tareasDB)
}

//await pausa()

do {
  opt=await inquireMenu()  
  //console.log({opt})

switch(opt){
case '1': 
const desc=await leerInput('Descripcion: ')
tareas.crearTarea(desc)
break

  case '2': 
  tareas.listadoCompleto()
  break

  case '3':
    tareas.listarPendientesCompletadas(true)
    break
  
  case '4':
    tareas.listarPendientesCompletadas(false)
    break

  case '5':
    tareas.listarPendientesCompletadas(false)
    break

  case '5':
    tareas.listarPendientesCompletadas(false)
    break 
  
  case '6':
    const id=await listadoTareasBorrar(tareas.listadoArr)
    if (id !=='0'){
      const ok= await confirmar('¿Esta seguro de eliminar?')
      if (ok){
        tareas.borrarTarea(id)
        console.log('Tarea Borrada')
      }
    }
    
    break

}

guardarDB(tareas.listadoArr) //Para guardar la base de datos
await pausa()
  
} while (opt !=='0');

//mostrarMenu()
//pausa()

}


main()