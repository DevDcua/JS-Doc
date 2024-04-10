//* FOR

// Tenemos una variable global inicializada en 0 que vamos a utilizar como contador.
let contador = 0;

//Inicializamos el bucle con una variable i en 0.
//La condición para que entre al bucle es que i sea menor a 5.
//Luego se define para que en cada ingreso i incremente su valor en 1.

for (let i = 0; i < 5; i++) {
    // En cada ingreso del bucle, contador también va incrementar su valor en 1.
    console.log(`Voy entrando ${i + 1} vez/veces en el bucle`);

    contador++
}


let palabra = "JavaScript";

//Lo mismo que el ejemplo anterior pero se modifica la condición.
//En este caso la condición seria que i sea menor a el largo de el valor de palabra.

//Tener en cuenta que los string comienzan la posición de sus caracteres a partir del 0, por eso se inicializa en este caso en 0.

for (let i = 0; i < palabra.length; i++) {
    
    // Lo que estamos haciendo acá es mostrar en consola cada carácter.
    // al poner palabra[posición], mostramos el carácter según el 
    // valor de i que se utilizara para la posición. 

    console.log( palabra[i] );

    // otra forma era usando palabra.charAt(posición);

}

//* WHILE


let i = 0;

while (i < 5){
    console.log(i);
    i++
}


let suma = 0;
let numero;

//Cambiar la condición de false a true para probar el while

while (false){

    numero = parseInt(prompt( "Ingrese un número (o ingrese 0 para terminar):"));

    if ( numero === 0 ) {
        break; //Termina el bucle si se ingresa el número 0.
    }

    suma += numero;

}

console.log( "La suma de los números ingresados es: " + suma );


//* DO...WHILE


let estadoPoder = "cargando";

do {
    
    console.log(estadoPoder);

} while (estadoPoder != "cargando");

console.log("Salí del do...while pero se ejecutó al menos 1 vez");