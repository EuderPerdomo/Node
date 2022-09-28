import colors from 'colors'
//require('colors')
import { inquireMenu, leerInput, pausa } from './helpers/inquirer.js'
import { Tareas } from './models/tareas.js'

//const { mostrarMenu, pausa } = require('./helpers/mensajes')

const main= async()=>{
console.clear()

let opt=''
const tareas =new Tareas()

do {
  opt=await inquireMenu()  
  //console.log({opt})

switch(opt){
case '1': 
const desc=await leerInput('Descripcion: ')
tareas.crearTarea(desc)
break

  case '2': 
  console.log(tareas.listadoArr)
  break
}

await pausa()
  
} while (opt !=='0');

//mostrarMenu()
//pausa()

}


main()