// Definición de un objeto "persona"
let persona = {
    nombre: "Agustin",
    edad: 25,
    ciudad: "Montevideo",
    esEstudiante: true,
    saludar: function(){
        console.log(`Hola! Mi nombre es ${this.nombre}.`);
    }
};

console.log(persona.nombre) // Acceso a la propiedad "nombre"

persona.saludar(); // Llamada al método "saludar" del objeto "persona".

//-----------------------------------------------------------------------

let libro = {}; // Objeto vacío

libro.titulo = "JavaScript: The Good Parts";
libro.autor = "Douglas Crockford";
libro.publicado = 2008;

console.log(libro) 

//Resultado { titulo: "JavaScript: The Good Parts", autor: "Douglas Crockford", publicado: 2008 }

//-----------------------------------------------------------------------

// Definición de un objeto "animal" como prototipo

let animal = {
    tipo: "Desconocido",
    sonido: function(){
        consola.log("Hace un sonido desconocido.");
    }
};

// Definición de un objeto "perro" que hereda de "animal".

let perro = Object.create(animal);

perro.raza = "Labrador";
perro.sonido = function(){
    console.log("Guau! Guau!");
};

console.log(perro.tipo); //Resultado: "Desconocido" 
perro.sonido(); // Resultado: "Guau! Guau!"

//-----------------------------------------------------------------------

let trabajador = {
    nombre: "Juan",
    edad: 30,
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

trabajador.saludar(); // Resultado: "Hola, mi nombre es Juan y tengo 30 años."


//-----------------------------------------------------------------------

let nombre = "Ana"; // Variable global

let persona1 = {
    nombre: "Juan",
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
};

let saludarPersona = persona1.saludar;
saludarPersona(); 

// Retorna: "Hola, mi nombre es Undefined." (this se refiere al objeto global, no a persona)

saludarPersona = persona1.saludar.bind(persona1);
saludarPersona(); 

// Retorna: "Hola, mi nombre es Juan."

//-----------------------------------------------------------------------

//? .hasOwnProperty(prop)

let persona2 = { nombre: "Juan", edad: 30 };
console.log(persona2.hasOwnProperty("nombre")); // Resultado: true
console.log(persona2.hasOwnProperty("toString")); // Resultado: false


//? .toString()

console.log(persona2.toString()); // Resultado: "[object Object]"


//? .valueOf()

console.log(persona2.valueOf()); // Resultado: {nombre: 'Juan', edad: 30}

//? .Object.keys(obj)

console.log(Object.keys(persona2)); // Resultado: ["nombre", "edad"]

//? .Object.values(obj)

console.log(Object.values(persona2)); // Resultado: ["Juan", 30]

//? .Object.entries(obj)

console.log(Object.entries(persona2)); 

// Resulta: [["nombre", "Juan"], ["edad", 30]]

//? .Object.assign(target, source)

let destino = {};
let fuente = { nombre: "Juan", edad: 30 };

Object.assign(destino, fuente);

console.log(destino); // Resultado: { nombre: "Juan", edad: 30 }

//? .Object.freeze(obj)

Object.freeze(persona2);

persona2.edad = 31; // No tiene efecto (en modo estricto, lanza un error)

console.log(persona2); // Output: { nombre: "Juan", edad: 30 }


//* for...in

let persona3 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

for (let propiedad in persona3) {
    console.log(propiedad + ": " + persona3[propiedad]);
}

// Resultado:

// nombre: Juan
// edad: 30
// ciudad: Madrid