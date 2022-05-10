import { Hotel } from './hotel.js'

/* document.getElementById('listaHoteles').innerHTML = localStorage.getItem('hoteles') */

const buttonCrearHotel = document.getElementById('buttonCrear')
buttonCrearHotel.addEventListener('click', crearHotel)

let hoteles = []

function crearHotel() {
    let nombreHotel = prompt('Nombre del Hotel').toUpperCase()
    let cantHabitaciones = Number(prompt('Cantidad de habitaciones'))
    let cantPlantas = Number(prompt('Cantidad de plantas'))
    let supTotal = Number(prompt('Superficie total del hotel (m2)'))

    const newHotel = new Hotel(nombreHotel, cantHabitaciones, cantPlantas, supTotal)

    hoteles.push(newHotel)
    /* localStorage.setItem('hoteles', hoteles)  */
    console.log(hoteles)
    document.getElementById('listaHoteles').innerHTML = hoteles.join('').toString()
}

const buttonEliminarHotel = document.getElementById('buttonEliminar')
buttonEliminarHotel.addEventListener('click', darDeBajaHotel)

function darDeBajaHotel(){
    let deleteHotel = prompt('Nombre del hotel a eliminar').toUpperCase()
    let hotelEliminado = false
    hoteles.forEach((item, indice) => {
        if (item.Nombre == deleteHotel){
            hoteles.splice(indice,1)
            hotelEliminado = true
            alert(`El hotel ${deleteHotel} se elimino correctamente`)
            document.getElementById('listaHoteles').innerHTML = hoteles.join('').toString()  
        }
    } )
    if(!hotelEliminado){
        alert(`El hotel ${deleteHotel} no se encuentra en la base de datos`)
    }
}

const buttonBuscarHotel = document.getElementById('buttonBuscar')
buttonBuscarHotel.addEventListener('click', buscarHotel)

function buscarHotel() {
    let buscarHotel = prompt('Nombre del hotel').toUpperCase()
    const hotelEncontrado = hoteles.find(item => item.Nombre == buscarHotel)
    if(hotelEncontrado) {
       document.getElementById('hotelBuscado').innerHTML = `${hotelEncontrado.toString()} \n ${hotelEncontrado.calcularMantenimiento()}`
    }
    if(!hotelEncontrado) {
        alert(`El hotel ${buscarHotel} no se encuentra en la base de datos`)
    }
}

const buttonModificarHotel = document.getElementById('buttonModificar')
buttonModificarHotel.addEventListener('click', modificarHotel)

function modificarHotel(){
    let modificarHotel = prompt('Nombre del hotel').toUpperCase()
    const hotelModificado = hoteles.find(item => item.Nombre == modificarHotel)
    
    if(hotelModificado) {
        let variableModificar = prompt('Que desea modificar? Habitaciones, Plantas o Superficie').toUpperCase()
        
        if(variableModificar == 'HABITACIONES'){
            let nvoCantHabitaciones = Number(prompt('Cantidad de habitaciones'))
            hotelModificado.CantHabitaciones = nvoCantHabitaciones
            alert('Cantidad de habitaciones modificado correctamente')
            document.getElementById('listaHoteles').innerHTML = hoteles.join('').toString()
        }

        if(variableModificar == 'PLANTAS'){
            let nvoCantPlantas = Number(prompt('Cantidad de plantas'))
            hotelModificado.CantPlantas = nvoCantPlantas
            alert('Cantidad de plantas modificado correctamente')
            document.getElementById('listaHoteles').innerHTML = hoteles.join('').toString()
        }

        if(variableModificar == 'SUPERFICIE'){
            let nvaSuperficie = Number(prompt('Superficie total'))
            hotelModificado.SupTotal = nvaSuperficie
            alert('Superficie modificada correctamente')
            document.getElementById('listaHoteles').innerHTML = hoteles.join('').toString()
        }
    }

    if(!hotelModificado) {
        alert(`El hotel ${modificarHotel} no se encuentra en la base de datos`)
    }
}