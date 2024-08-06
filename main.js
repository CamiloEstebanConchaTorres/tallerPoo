const {persona: persona1} = require('./persona')
const {Estudiante: estudiante1} = require('./estudiante')

let obj = new persona1("Camilo")
console.log(obj.saludar())

let obj2 = new estudiante1("biologia")
console.log(obj2.estudiar())