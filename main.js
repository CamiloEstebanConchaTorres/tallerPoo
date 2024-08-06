const {persona} = require('./persona')
const {Estudiante} = require('./estudiante')

let persona1 = new persona("camilo")
console.log(persona1.saludar())

let estudiante1 = new Estudiante("Camilo", 20, "Masculino", "Biologia")
console.log(estudiante1.estudiar())