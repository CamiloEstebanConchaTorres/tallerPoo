const {persona} = require('./persona')

class Estudiante extends persona{
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo)
        this.carrera= carrera
    }
    estudiar(){
        return `estoy estudiando la carrera ${this.carrera}`
    }
}