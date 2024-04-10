# Array


Los arreglos (arrays) en JavaScript son estructuras de datos que se utilizan para almacenar una colección ordenada de elementos. Pueden contener cualquier tipo de datos, incluyendo números, cadenas, objetos, otros arreglos, funciones, etc.

## Creación de arreglos:

Los arreglos pueden crearse utilizando la notación de corchetes `[]` o el constructor `Array()`.

```
let arreglo1 = [1, 2, 3, 4, 5]; // Notación de corchetes
let arreglo2 = new Array("manzana", "banana", "cereza"); // Constructor Array
```

## Propiedad `length`:

La propiedad `length` de un arreglo indica la cantidad de elementos que contiene.

```
console.log(arreglo1.length); // Imprime 5
```

## Acceso a elementos:

Los elementos de un arreglo pueden ser accedidos mediante su índice, que comienza en 0 para el primer elemento y aumenta en 1 para cada elemento subsiguiente.

```
console.log(arreglo1[0]); // Imprime 1
console.log(arreglo2[1]); // Imprime "banana"
```

## Métodos de los arreglos

JavaScript proporciona una variedad de métodos integrados para manipular arreglos.

## Métodos de modificación:

### `.push()`

Agrega uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.

```
let frutas = ['manzana', 'banana'];
frutas.push('cereza');
console.log(frutas); // frutas ahora es ['manzana', 'banana', 'cereza']
```

### `.pop()`

Elimina el último elemento del arreglo y lo devuelve

```
let ultimaFruta = frutas.pop();
console.log(frutas, ultimaFruta)
// frutas ahora es ['manzana', 'banana'], y ultimaFruta es 'cereza'
```

### `.shift()`

Elimina el primer elemento del arreglo y lo devuelve.

```
frutas = ['manzana', 'banana', 'cereza'];
let primeraFruta = frutas.shift();
console.log(frutas, primeraFruta)
// frutas ahora es ['banana', 'cereza'], y primeraFruta es 'manzana'
```

### `.unshift()`

Agrega uno o más elementos al inicio del arreglo y devuelve la nueva longitud del arreglo.

```
frutas.unshift('manzana');
console.log(frutas)
// frutas ahora es ['manzana', 'banana', 'cereza']
```


### `.splice()`

Modifica el contenido del arreglo eliminando elementos existentes y/o agregando nuevos elementos.

Sintaxis:
```
array.splice(start, deleteCount, item1, item2, ...)
```

* `start`: Índice en el que comenzará la modificación del arreglo. Si es un número negativo, se contará desde el final del arreglo. Si es mayor que la longitud del arreglo, `start` se establecerá en la longitud del arreglo. si `start` es omitido, se asumirá como 0 (el inicio del arreglo).
* `deleteCount` (opcional): Número de elementos a eliminar a partir de `start`. Si se omite o si es mayor que el número de elementos restantes a partir de `start`, se eliminarán todos los elementos desde `start` hasta el final del arreglo.
* `ìtem1, item2,...` (opcional): Los elementos que se agregarán al arreglo en la posición `start`.  

El método modifica el arreglo original y devuelve un arreglo con los elementos eliminados. Si no se eliminan elementos, el arreglo devuelto estará vacío.

```
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
```

Es útil cuando necesitas realizar cambios directamente en un arreglo, como agregar, eliminar o reemplazar elementos en posiciones específicas. Sin embargo, ten en cuenta que al modificar el arreglo original, puedes afectar otras partes de tu código que dependan del mismo.

## Métodos de Acceso:
### `.concat()`

Combina dos o más arreglos y devuelve un nuevo arreglo.

```
let frutas1 = ['manzana', 'banana'];
let frutas2 = ['cereza', 'naranja'];
let todasLasFrutas = frutas1.concat(frutas2);
console.log(todasLasFrutas);
// todasLasFrutas ahora es ['manzana', 'banana', 'cereza', 'naranja']
```

### `.join()`

Une todos los elementos del arreglo en una cadena y devuelve esa cadena.

```
frutas = ['manzana', 'banana', 'cereza'];
let cadena = frutas.join(', ');
console.log(cadena)
// cadena es 'manzana, banana, cereza'
```

### `.slice()`

Extrae una sección del arreglo y devuelve un nuevo arreglo sin modificar el arreglo original.

Sintaxis:

```
array.slice(start, end)
```

* `start`: Índice en el que comenzará la extracción. si es un número negativo, se contará desde el final del arreglo. Si es omitido, se asumirá como 0 (el inicio del arreglo).
* `end` (opcional): Índice en el que finalizará la extracción (no inclusivo). Si es un número negativo, se contará desde el final del arreglo. Si es omitido o si es mayor que la longitud del arreglo, la extracción se realizará hasta el final del arreglo.

```
frutas = ['manzana', 'banana', 'cereza', 'naranja', 'uva'];
let frutasSeleccionadas = frutas.slice(1, 4);
console.log(frutasSeleccionadas)
// frutasSeleccionadas es ['banana', 'cereza', 'naranja']
```

Es útil cuando necesitas trabajar con una porción específica de un arreglo sin modificar el arreglo original. Esto es especialmente útil cuando deseas mantener la integridad del arreglo original mientras trabajas con una copia de sus elementos.

### `.indexOf()`

Devuelve el primer índice en el que se encuentra un elemento especificado en el arreglo, o -1 si no se encuentra.

```
frutas = ['manzana', 'banana', 'cereza'];
let indiceBanana = frutas.indexOf('banana');
console.log(indiceBanana);
// indiceBanana es 1
```


### `.lastIndexOf()`

Devuelve el último índice en el que se encuentra un elemento especificado en el arreglo, o -1 si no se encuentra.

```
numeros = [1, 2, 3, 4, 2];
let ultimoIndice2 = numeros.lastIndexOf(2);
console.log(ultimoIndice2);
// ultimoIndice2 es 4
```

### `.includes()`

Determina si el arreglo contiene un elemento específico y devuelve true o false según corresponda.

```
frutas = ['manzana', 'banana', 'cereza'];
let contieneBanana = frutas.includes('banana');
console.log(contieneBanana)
// contieneBanana es true
```


## Métodos de iteración:
### `.forEach()`

El método `forEach()` ejecuta una función dada una vez por cada elemento del arreglo, en orden, y sin devolver ningún valor.

Sintaxis:

```
array.forEach((elemento, indice, arreglo) => {
  // lógica de la función aquí
});
```

* `elemento`: El elemento actual que está siendo procesado en el arreglo.
* `indice`: El índice del elemento actual dentro del arreglo
* `arreglo`: El arreglo sobre el cual se está iterando.

Ejemplo: Supongamos que tenemos un arreglo de nombres y queremos imprimir cada nombre en la consola.

```
let nombres = ['Juan', 'María', 'Pedro', 'Ana'];

nombres.forEach(nombre => {
  console.log(nombre);
});
```

En este caso solo tiene un parárametro, que es `nombre`.
Esto  se debe a que en este contexto específico no se necesitan los parámetros `elemento`, `indice` y `arreglo` que se mencionan en la sintaxis completa del método `forEach()`.

Como en el ejemplo soplo estamos interesados en los nombres dentro del arreglo `nombre`, y no necesitamos hacer referencia al índice o al arreglo completo durante el proceso de iteración. Por lo tanto, solo necesitamos un parámetro (`nombre`) en la función de callback dentro de `forEach()` para imprimir cada nombre en consola.

Ejemplo con la sintaxis completa:

```
let numerosAlternativos = [10, 20, 30, 40];

numerosAlternativos.forEach((elemento, indice, arreglo) => {
  console.log(`Elemento: ${elemento}, Índice: ${indice}, Arreglo: ${arreglo}`);
});
```

La función callback pasada a `forEach()` tiene acceso a estos tres parámetros (`elemento`, `indice`, `arreglo`) que proporciona `forEach()` en cada iteración.

Cuando ejecutamos este código, producirá la siguiente salida en la consola:

- Elemento: 10, Índice: 0, Arreglo: 10,20,30,40
- Elemento: 20, Índice: 1, Arreglo: 10,20,30,40
- Elemento: 30, Índice: 2, Arreglo: 10,20,30,40
- Elemento: 40, Índice: 3, Arreglo: 10,20,30,40

### `.map()`

El método `map()` crea un nuevo arreglo con los resultados de llamar a una función proporcionada en cada elemento del arreglo.

Sintaxis:

```
let nuevoArreglo = array.map((elemento, indice, arreglo) => {
  // lógica de la función aquí
  return resultado;
});
```

* `elemento`: El elemento actual que está siendo procesado en el arreglo.
* `indice`: El índice del elemento actual dentro del arreglo.
* `arreglo`: El arreglo sobre el cual se está iterando.
* `resultado`: El valor que se agregará al nuevo arreglo.

Ejemplo: Supongamos que tenemos un arreglo de números y queremos crear un nuevo arreglo con el cuadrado de cada número.

```
let numerosNormales = [1, 2, 3, 4, 5];

let cuadrados = numerosNormales.map(numero => {
  return numero * numero;
});

console.log(cuadrados); // Resultado: [1, 4, 9, 16, 25]
```

Como vimos anteriormente en el `forEach()`, si bien en la sintaxis existen 3 valores de parámetros, en este caso solo usamos `elemento` ya que es lo que necesitabamos para lo que queriamos hacer.


### `.filter()`

El método `filter()` crea un nuevo arreglo con todos los elementos que pasan la prueba implementada por la función proporcionada.

Sintaxis:

```
let nuevoArreglo = array.filter((elemento, indice, arreglo) => {
  // lógica de la función aquí
  return condicion;
});
```

* `elemento`: El elemento actual que está siendo procesado en el arreglo.
* `indice`: El índice del elemento actual dentro del arreglo.
* `arreglo`: El arreglo sobre el cual se está iterando.
* `condicion`: La condición que debe cumplir el elemento para ser incluido en el nuevo arreglo.

Ejemplo: Supongamos que tenemos un arreglo de edades y queremos crear un nuevo arreglo con las edades mayores o iguales a 18.

```
let edades = [15, 20, 30, 12, 25, 18];

let mayoresDeEdad = edades.filter(edad => {
  return edad >= 18;
});

console.log(mayoresDeEdad); // Resultado: [20, 30, 25, 18]
```


### `.reduce()`

El método `reduce()` aplica una función acumuladora a cada elemento del arreglo, de izquierda a derecha, para reducirlo a un solo valor.

Sintaxis:

```
let resultado = array.reduce((acumulador, elemento, indice, arreglo) => {
  // lógica de la función aquí
  return nuevoAcumulador;
}, valorInicial);
```

* `acumulador`: El valor acumulado en cada iteración.
* `elemento`: El elemento actual que está siendo procesado en el arreglo.
* `indice`: El índice del elemento actual dentro del arreglo.
* `arreglo`: El arreglo sobre el cual se está iterando.
* `nuevoAcumulador`: El nuevo valor acumulado después de procesar el elemento actual.
* `valorInicial` (opcional): Un valor inicial para el acumulador.

Ejemplo: Supongamos que tenemos un arreglo de los precios de un carrito de compras y queremos calcular la suma de todos los elementos.

```
let carrito = [50, 22, 31, 24, 10];

let suma = carrito.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(suma); // Resultado: 15 (50 + 22 + 31 + 24 + 10)
```

### `.reduceRigth()`

El método `reduceRight()` es similar a `reduce()`, pero comienza a reducir desde el último elemento del arreglo hacia el primero. Es decir, la función de reducción se aplica de derecha a izquierda.

Sintaxis:

```
array.reduceRight((acumulador, elemento, indice, arreglo) => {
  // lógica de la función aquí
}, valorInicial);
```
* `acumulador`: El valor acumulado en cada iteración.
* `elemento`: El elemento actual que está siendo procesado en el arreglo.
* `indice`: El índice del elemento actual dentro del arreglo.
* `arreglo`: El arreglo sobre el cual se está iterando.
* `valorInicial` (opcional): Un valor inicial para el acumulador.

Ejemplo: Supongamos que tenemos un arreglo de números y queremos la resta acumulada de todos los elementos, comenzando desde el último elemento hacia el primero:

```
let numerosARestar = [10, 5, 2, 8];

let restaAcumulada = numerosARestar.reduceRight((acumulador, numero) => {
  return acumulador - numero;
}, 0);

console.log(restaAcumulada); // Resultado: -25 
```


### `.some()`

En método `some()` verifica si al menos un elemento en el arreglo cumple con cierta condición especificada por una función de prueba. Retorna `true` si al menos un elemento cumple la condición, de lo contrario, retorna `false`.

Sintaxis:

```
array.some((elemento, indice, arreglo) => {
  // condición de prueba aquí
});
```

Ejemplo: Supongamos que queremos verificar si al menos uno de los números en un arreglo es mayor que `50`.

```
let numerosSome = [20, 60, 30, 10];

let hayNumeroMayorQue50 = numerosSome.some(numero => {
  return numero > 50;
});

console.log(hayNumeroMayorQue50); // Resultado: true

```

### `.every()`

El método `every()` verifica si todos los elementos en el arreglo cumplen con cierta condición especificada por una función de prueba. Retorna `true` si todos los elementos cumplen la condición, de lo contrario, retorna `false`.

Sintaxis:

```
array.every((elemento, indice, arreglo) => {
  // condición de prueba aquí
});
```

Ejemplo: Supongamos que queremos verificar si todos los números en un arreglo son mayores que `10`.

```
let numerosEvery = [20, 15, 30, 25];

let todosMayoresQue10 = numerosEvery.every(numero => {
  return numero > 10;
});

console.log(todosMayoresQue10); // Resultado: true
```

### `.find()`

El método `find()` devuelve el primer elemento en el arreglo que cumple con una condición especificada por una función de prueba. Si ningún elemento cumple la condición, devuelve `undefined`.

Sintaxis:

```
array.find((elemento, indice, arreglo) => {
  // condición de prueba aquí
});
```

Ejemplo: Supongamos que queremos encontrar el primer número par de un arreglo.

```
let numerosFind = [11, 5, 8, 20, 15];

let primerNumeroPar = numerosFind.find(numero => {
  return numero % 2 === 0;
});

console.log(primerNumeroPar); // Resultado: 8
```

### `.findIndex()`

El método `findIndex()` devuelve el índice del primer elemento en el arreglo que cumple con una condición especificada por una función de prueba. Si ningún elemento cumple la condición, devuelve `-1`.

Sintaxis:

```
array.findIndex((elemento, indice, arreglo) => {
  // condición de prueba aquí
});
```

Ejemplo: Supongamos que queremos encontrar el índice del primer número mayor que `15` en un arreglo.

```
let numerosFindIndex = [10, 20, 5, 25, 15];

let indicePrimerNumeroMayorQue15 = numerosFindIndex.findIndex(numero => {
  return numero > 15;
});

console.log(indicePrimerNumeroMayorQue15); // Resultado: 1 (índice del número 20)
```


## Métodos de ordenamiento:
### `.sort()`

El método `sort()` ordena los elementos de un arreglo in situ y devuelve el arreglo ordenado. Por defecto, ordena los elementos como strings según su valor Unicode.

Sintaxis:

```
array.sort([funcionDeComparacion]);
```

Ejemplo: Ordenar un arreglo de números de menor a mayor.

```
let numerosSort = [5, 2, 8, 1, 4];
numerosSort.sort((a, b) => a - b);
console.log(numerosSort); // Resultado: [1, 2, 4, 5, 8]

```

En el método `sort()`, la función de comparasión `(a,b) => a - b` indica que los elementos `a` y `b` se comparan numéricamente. La función deveulve un valor negativo si `a` es menor que `b`, cero si son iguales y un valor positivo si `a` es mayor que `b`. Esto permite que `sort()` ordene los elementos en orden ascendente, colocando los elementos más pequeños primero.

Otro ejemplo: Imaginemos que queremos ordenar un arreglo de números de manera que los números pares se coloquen primero, seguidos de los números impares, manteniendo el orden relativo de los pares y los impares entre sí.

```
numerosSort.sort((a, b) => {
  if (a % 2 === 0 && b % 2 !== 0) {
    return -1; // a (par) antes que b (impar)
  } else if (a % 2 !== 0 && b % 2 === 0) {
    return 1; // b (par) antes que a (impar)
  } else {
    return a - b; // mantener el orden ascendente dentro de los pares e impares
  }
});

console.log(numerosSort)
```

### `.reverse()`

El método `reverse()` invierte el orden de los elementos de un arreglo in situ y devuelve el arreglo invertido.

Sintaxis:

```
array.reverse();
```

Ejemplo: Invertir el orden de un arreglo de string.

```
let frutasReverse = ['manzana', 'banana', 'naranja', 'uva'];
frutasReverse.reverse();
console.log(frutasReverse); // Resultado: ['uva', 'naranja', 'banana', 'manzana']
```

## Métodos de conversión:
### `.toString()`

El método `toString()` devuelve una cadena que representa los elementos del arreglo separados por coma (` , `).

Sintaxis:

```
array.toString();
```

Ejemplo: Convertir un arreglo a una cadena de texto.

```
let numerosToString = [1, 2, 3, 4];
let cadena = numerosToString.toString();
console.log(cadena); // Resultado: "1,2,3,4"
```

### `.toLocaleString()`

El método `toLocalString()` devuelve una cadena que representa los elementos del arreglo formateados según las configuraciones regionales del navegador.

Sintaxis:

```
array.toLocalString();
```

Ejemplo: Convertir un arreglo a una cadena formateada según la configuración regional.

```
let precios = [1000, 2000, 1500];
let cadena = precios.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
console.log(cadena); // Output: "1.000,00 €, 2.000,00 €, 1.500,00 €"
```

### `.valueOf()`

El método `valueOf()` devuelve el valor primitivo del arreglo, que es el arreglo en sí mismo.

Sintaxis:

```
array.valueOf();
```

Ejemplo: Obtener el valor primitivo de un arreglo.

```
let letrasValueOf = ['a', 'b', 'c'];
let valorPrimitivo = letrasValueOf.valueOf();
console.log(valorPrimitivo); // Output: ["a", "b", "c"]
```

### `.entries()`
### `.keys()`
### `.values()`

Estps métodos devuelven iteradores que permite recorrer los pares clave-valor, las claves o los valores respectivamente en una arreglo.

Ejemplo:

```
let verduras = ['Zapallo', 'Rucula', 'Zanahoria'];

let iteradorEntries = fruta.entries();

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

```

## Métodos de verificación:
### `.isArray()`

El método `isArray()` verifica si un valor dado es un arreglo.

```
let arreglo = [1, 2, 3];
console.log(Array.isArray(arreglo)); // Resultado: true

let numero = 10;
console.log(Array.isArray(numero)); // Resultado: false

```


## `for...of`


El bucle `for...of` en JavaScript se utiliza para iterar sobre elementos de una estructura de datos iterable, como un array. Proporciona una forma más sencilla y legible de recorrer los elementos en comparación con otros tipos de bucles, como `for` o `forEach`.

Sintaxis:

```
for (variable of iterable) {
  // Código a ejecutar en cada iteración
}
```

* `variable`: Una variable que se utilizará para almacenar el valor del elemento actual en cada iteración.
* `iterable`: Una estructura de datos iterable sobre la cual iterar (por ejemplo, un array).


Ejemplo: Supongamos que tenemos un array de nombres y queremos imprimir cada nombre en la consola utilizando el for...of

```
let nombres = ["Juan", "María", "Pedro", "Ana"];

for (let nombre of nombres) {
  console.log(nombre);
}
```



