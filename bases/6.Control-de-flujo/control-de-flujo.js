//* if else

let numero = 10;

// Tenemos la condición en donde evalua el valor de la variable numero.
// Si el resto de dividirlo entre dos es estrictamente igual a 0.
if (numero % 2 === 0) {

    // Entra al if y ejecutamos la siguiente instrucción.
    console.log(numero + " es un número par.");
} else {

    // En caso de que no ingrese en el if va a ingresar en el else.
    // Ejecutando la siguiente instrucción.
    console.log(numero + " es un número impar.");
}

//* Operador Ternario

let resultado = (numero % 2 === 0) ? 'es un número par.' : 'es un número impar.';

// Estamos haciendo la misma evaluación que en el if-else
// En caso de que el número de como resto 0, se guardará el resultado
// 'es un número par.' caso cotrario se guarda 'es un número impar.'.

console.log( numero + ' ' + resultado );

//* Switch

let auto = "BMW";

let autoEnMayuscula = auto.toUpperCase();

switch (autoEnMayuscula) {
    case "TOYOTA":
        console.log("Compraste un " + auto + ", felicitaciones!");
        break;
    case "VOLKSWAGEN":
        console.log("Compraste un " + auto + ", felicitaciones!");
        break;
    case "FORD":
        console.log("Compraste un " + auto + ", felicitaciones!");
        break;
    case "HONDA":
        console.log("Compraste un " + auto + ", felicitaciones!");
        break;
    case "BMW":
        console.log("Compraste un " + auto + ", felicitaciones!");
        break;
    default:
        console.log("No vendemos la marca indicada.");
}



//? TAREAS Y SOLUCIONES POSIBLES

/* 
? Tarea para if-else

Escribe un programa que solicite al usuario su edad y determine si es mayor de edad o no. 
Si es mayor de edad (18 años o más), imprime "Eres mayor de edad", de lo contrario, 
imprime "Eres menor de edad".

*/

// Esto se podria hacer momentaneamente con un prompt para que le solicite la edad, pero momentaneamente lo vamos hacer manual.

let edad = 19;

if ( edad >= 18 ) {
    console.log( "Eres mayor de edad" );
}else {
    console.log( "Eres menor de edad" );
}

// Em este caso la condicion se cumple por ende ingresa en el if e imprime "Eres mayor de edad".

/* 
? Tarea para switch

Escribe un programa que solicite al usuario ingresar un mes del año (por su nombre) y determine el 
número de días que tiene ese mes. Utiliza un switch para manejar cada mes (no se toma en cuenta año bisiesto).
*/

let mes = 'Junio';
let cantidadDeDias;

//Lo pasamos directamente todo a minúsculas para evitar problemas con el case sensitive.

//Este ejercicio es meramente para practicar las estructuras de control de flujo, luego vamos a ver que hay maneras mucho más eficientes para hacerlo.

switch (mes.toLowerCase()) {
    case 'enero':
        cantidadDeDias = 31;
        break;
    case 'febrero':
        cantidadDeDias = 28;
        break;
    case 'marzo':
        cantidadDeDias = 31;
        break;
    case 'abril':
        cantidadDeDias = 30;
        break;
    case 'mayo':
        cantidadDeDias = 31;
        break;
    case 'junio':
        cantidadDeDias = 30;
        break;
    case 'julio':
        cantidadDeDias = 31;
        break;
    case 'agosto':
        cantidadDeDias = 31;
        break;
    case 'septiembre':
        cantidadDeDias = 30;
        break;
    case 'octubre':
        cantidadDeDias = 31;
        break;
    case 'noviembre':
        cantidadDeDias = 30;
        break;
    case 'diciembre':
        cantidadDeDias = 31;
        break;

    default:
        console.error("No se ingresa un mes valido");
        break;
}

console.log(`El mes ${mes} tiene ${cantidadDeDias} dias`);


/* 
? Tarea para operador ternario

Escribe un programa que solicite al usuario un numero. Utiliza el operador ternario para imprimir un mensaje indicando 
si el número ingresado es multiplo de 3 o no.
*/

let numeroMultiploDeTres = 12;

let validacion = (numeroMultiploDeTres % 3 === 0) ? "es multiplo de 3" : "no es multiplo de 3";

console.log(`El numero ${numeroMultiploDeTres} ${validacion}`);