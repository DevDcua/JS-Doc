
//* Notación de corchetes
let arreglo1 = [1, 2, 3, 4, 5]; 

//* Constructor Array
let arreglo2 = new Array("manzana", "banana", "cereza"); 



//* Propiedad length

console.log(arreglo1.length); // Imprime 5


//* Acceso a elementos

console.log(arreglo1[0]); // Imprime 1
console.log(arreglo2[1]); // Imprime "banana"

//* push()

let frutas = ['manzana', 'banana'];
frutas.push('cereza');
console.log(frutas); // frutas ahora es ['manzana', 'banana', 'cereza']

//* pop()

let ultimaFruta = frutas.pop();
console.log(frutas, ultimaFruta)
// frutas ahora es ['manzana', 'banana'], y ultimaFruta es 'cereza'

//* shift()

frutas = ['manzana', 'banana', 'cereza'];
let primeraFruta = frutas.shift();
console.log(frutas, primeraFruta)
// frutas ahora es ['banana', 'cereza'], y primeraFruta es 'manzana'

//* unshift()

frutas.unshift('manzana');
console.log(frutas)
// frutas ahora es ['manzana', 'banana', 'cereza']


//* splice()

let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1); // Elimina 1 elemento en el índice 2
// numeros ahora es [1, 2, 4, 5]

numeros.splice(2, 0, 3); // Agrega el número 3 en el índice 2
// numeros ahora es [1, 2, 3, 4, 5]

let colores = ['rojo', 'verde', 'azul'];
colores.splice(1, 1, 'amarillo'); 
// Reemplaza el elemento en el índice 1 con 'amarillo'
console.log(colores)
// Ahora, colores es ['rojo', 'amarillo', 'azul']

//* concat()

let frutas1 = ['manzana', 'banana'];

let frutas2 = ['cereza', 'naranja'];

let todasLasFrutas = frutas1.concat(frutas2);

console.log(todasLasFrutas);

// todasLasFrutas ahora es ['manzana', 'banana', 'cereza', 'naranja']

//* join()

frutas = ['manzana', 'banana', 'cereza'];

let cadena = frutas.join(', ');

console.log(cadena)
// cadena es 'manzana, banana, cereza'

//* slice()

frutas = ['manzana', 'banana', 'cereza', 'naranja', 'uva'];

let frutasSeleccionadas = frutas.slice(1, 4);

console.log(frutasSeleccionadas)
// frutasSeleccionadas es ['banana', 'cereza', 'naranja']

//* indexOf()

frutas = ['manzana', 'banana', 'cereza'];

let indiceBanana = frutas.indexOf('banana');

console.log(indiceBanana);
// indiceBanana es 1

//* lastIndexOf()

numeros = [1, 2, 3, 4, 2];

let ultimoIndice2 = numeros.lastIndexOf(2);

console.log(ultimoIndice2);
// ultimoIndice2 es 4

//* includes()

frutas = ['manzana', 'banana', 'cereza'];

let contieneBanana = frutas.includes('banana');

console.log(contieneBanana)
// contieneBanana es true

//* forEach()

let nombres = ['Juan', 'María', 'Pedro', 'Ana'];

nombres.forEach(nombre => {
    console.log(nombre);
});

let numerosAlternativos = [10, 20, 30, 40];

numerosAlternativos.forEach((elemento, indice, arreglo) => {
    console.log(`Elemento: ${elemento}, Índice: ${indice}, Arreglo: ${arreglo}`);
});


//* map()

let numerosNormales = [1, 2, 3, 4, 5];

let cuadrados = numerosNormales.map(numero => {
  return numero * numero;
});

console.log(cuadrados); // Resultado: [1, 4, 9, 16, 25]

//* filter()

let edades = [15, 20, 30, 12, 25, 18];

let mayoresDeEdad = edades.filter(edad => {
    return edad >= 18;
});

console.log(mayoresDeEdad); // Resultado: [20, 30, 25, 18]

//* reduce()

let carrito = [50, 22, 31, 24, 10];

let suma = carrito.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(suma); // Resultado: 137 (50 + 22 + 31 + 24 + 10)

//* reduceRigth()

let numerosARestar = [10, 5, 2, 8];

let restaAcumulada = numerosARestar.reduceRight((acumulador, numero) => {
    return acumulador - numero;
}, 0);

console.log(restaAcumulada); // Resultado: -25

//* some()


let numerosSome = [20, 60, 30, 10];

let hayNumeroMayorQue50 = numerosSome.some(numero => {
    return numero > 50;
});

console.log(hayNumeroMayorQue50); // Resultado: true


//* every()

let numerosEvery = [20, 15, 30, 25];

let todosMayoresQue10 = numerosEvery.every(numero => {
    return numero > 10;
});

console.log(todosMayoresQue10); // Resultado: true

//* find()

let numerosFind = [11, 5, 8, 20, 15];

let primerNumeroPar = numerosFind.find(numero => {
    return numero % 2 === 0;
});

console.log(primerNumeroPar); // Resultado: 8

//* findIndex()

let numerosFindIndex = [10, 20, 5, 25, 15];

let indicePrimerNumeroMayorQue15 = numerosFindIndex.findIndex(numero => {
    return numero > 15;
});

console.log(indicePrimerNumeroMayorQue15); // Resultado: 1 (índice del número 20)

//* sort()

let numerosSort = [5, 2, 8, 1, 4];
numerosSort.sort((a, b) => a - b);
console.log(numerosSort); // Resultado: [1, 2, 4, 5, 8]


numerosSort.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return -1; // a (par) antes que b (impar)
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return 1; // b (par) antes que a (impar)
    } else {
      return a - b; // mantener el orden ascendente dentro de los pares e impares
    }
});

//Resultado: [2,4,8,1,5]

console.log(numerosSort)

//* reverse()

let frutasReverse = ['manzana', 'banana', 'naranja', 'uva'];

frutasReverse.reverse();

console.log(frutasReverse); // Resultado: ['uva', 'naranja', 'banana', 'manzana']

//* toString()

let numerosToString = [1, 2, 3, 4];

let cadenaToString = numerosToString.toString();

console.log(cadenaToString); // Resultado: "1,2,3,4"

//* toLocalString()

let precios = [1000, 2000, 1500];

let cadenaToLocalString = precios.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

console.log(cadenaToLocalString); // Output: "1.000,00 €, 2.000,00 €, 1.500,00 €"

//* valueOf()

let letrasValueOf = ['a', 'b', 'c'];

let valorPrimitivo = letrasValueOf.valueOf();

console.log(valorPrimitivo); // Output: ["a", "b", "c"]

//* entries()
//* keys()
//* values()

let verduras = ['Zapallo', 'Rucula', 'Zanahoria'];

let iteradorEntries = verduras.entries();

for(let entrada of iteradorEntries){
    console.log(entrada);
}

//Resultado [0,'Zapallo'], [1, 'Rucula'], [2, 'Zanahoria'];

let iteradorKeys = verduras.keys();

for(let clave of iteradorKeys){
    console.log(clave);
}

//Resultado 0, 1, 2


let iteradorValues = verduras.values();

for(let valor of iteradorValues){
    console.log(valor);
}

//Resultado "Zapallo", "Rucula", "Zanahoria"


//* isArray()

let arreglo = [1, 2, 3];
console.log(Array.isArray(arreglo)); // Resultado: true

let numero = 10;
console.log(Array.isArray(numero)); // Resultado: false



//! for...of

let nombres2 = ["Juan", "María", "Pedro", "Ana"];

for (let nombre of nombres2) {
    console.log(nombre);
}

//Resultado:
// Juan
// María
// Pedro
// Ana