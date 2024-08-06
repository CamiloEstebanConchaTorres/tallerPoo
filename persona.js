// 1. Crea una clase llamada Persona que tenga las siguientes
// propiedades:nombre,edad, sexoyunmétodollamadosaludar
// que imprima en la consola un saludo con el nombre de la persona.

class persona {
    nombre
    edad
    sexo
    constructor(nombre, edad, sexo){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }
    set setnombre(nombre){
        this.nombre = nombre
    }
    get getnombre(){
        return this.nombre
    }
    set setedad(edad){
        this.edad = edad
    }
    get getedad(){
        return this.edad
    }
    set setsexo(sexo){
        this.sexo = sexo
    }
    get getsexo(){
        return this.sexo
    }
    saludar(){
        return `Hola mi nombre es ${this.nombre}`
    }
}

module.exports = {persona}