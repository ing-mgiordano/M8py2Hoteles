export class Hotel {
    #nombre
    #cantHabitaciones
    #cantPlantas
    #supTotal

    constructor(nombre, cantHabitaciones, cantPlantas, supTotal){
        this.#nombre = nombre
        this.#cantHabitaciones = cantHabitaciones
        this.#cantPlantas = cantPlantas
        this.#supTotal = supTotal
    }
    //getters
    get Nombre(){
        return this.#nombre
    }
    get CantHabitaciones(){
        return this.#cantHabitaciones
    }
    get CantPlantas(){
        return this.#cantPlantas
    }
    get SupTotal(){
        return this.#nombre
    }
    //setters
    set Nombre(nombre){
        this.#nombre = nombre
    }
    set CantHabitaciones(cantHabitaciones){
        this.#cantHabitaciones = cantHabitaciones
    }
    set CantPlantas(cantPlantas){
        this.#cantPlantas = cantPlantas
    }
    set SupTotal(supTotal){
        this.#supTotal = supTotal
    }
    //metodos propios
    calcularMantenimiento(){
        let cantPersonal = Math.ceil(this.#cantHabitaciones/20) //ceil = devuleve el entero mayor
        let costoTotal = cantPersonal*1500
        return `Se necesitan ${cantPersonal} personas para mantener el hotel con un costo de $${costoTotal} por mes`
    }
    
    toString() {
        return `
            Hotel: ${this.#nombre} <br>
            Cantidad de habitaciones: ${this.#cantHabitaciones} <br>
            Cantidad de pisos: ${this.#cantPlantas} <br>
            Superficie Total: ${this.#supTotal} <br>
            <br>
        `
    }
}   
