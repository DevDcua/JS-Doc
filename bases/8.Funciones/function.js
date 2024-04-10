

// Expresión de función anónima

let sumar = function( a, b ){

    return a + b;
};

console.log( sumar(2,3) ); //Devuelve 5


// Expresión de función con nombre

let multiplicar = function multiplicar ( a, b ) {
    
    return a * b;
};

console.log( multiplicar(2,3) ); //Devuelve 6


// Arrow function
let resta = (a, b) => {
    return a - b;
};

console.log(resta(5, 3)); // Imprime 2


// Arrow function con cuerpo implícito
let cuadrado = x => x * x;

console.log(cuadrado(3)); // Imprime 9


// Funciones como valores

function operar(a, b, operacion) {
    return operacion(a, b);
}

console.log(operar(2, 3, sumar)); // Imprime 5
console.log(operar(5, 3, resta)); // Imprime 2


// Arrow function y this

let persona = {
    nombre: "Juan",
    saludar: function() {
        setTimeout(() => {
            console.log("Hola, mi nombre es " + this.nombre);
        }, 1000);
    }
};

persona.saludar(); // Imprime "Hola, mi nombre es Juan" después de 1 segundo


// Function recursiva

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Imprime 120 (5 * 4 * 3 * 2 * 1)


// Declaración de parámetros y pasar argumentos.

function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludar("Juan");


// Parámetros predeterminados

function saludarPlaneta( nombre = "Tierra" ) {
    console.log("Hola, " + nombre + "!");
}

saludarPlaneta(); // Devuelve "Hola, Tierra!"
saludarPlaneta("Saturno"); // Devuelve "Hola, Saturno!"


// Rest parameters

function sumarConRestParameters(...numeros) {
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

console.log(sumarConRestParameters(1, 2, 3)); // Imprime 6
console.log(sumarConRestParameters(1, 2, 3, 4, 5)); // Imprime 15


// Desestructuración de objetos como parámetros

function mostrarInfoTrabajador({ nombre, edad }) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}

let trabajador = { nombre: "Juan", edad: 30 };
mostrarInfoTrabajador(trabajador);


// Desestructuración de arreglos como parámetros

function mostrarInfoAlumno([nombre, edad]) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}

let alumno = ["María", 25];
mostrarInfoAlumno(alumno);


// Funciones sin parámetros

function saludo() {
    console.log("¡Hola!");
}

saludo(); // Imprime "¡Hola!"