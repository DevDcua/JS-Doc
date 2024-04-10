# Funciones

Las funciones en JavaScript son bloques de código reutilizables que se utilizan para realizar una tarea específica. Pueden aceptar parámetros y devolver un valor.


### Declaración de funciones:

Las funciones en Javascript pueden declararse utilizando la palabra clave `function`, seguida del nombre de la función y los parámetros entre paréntesis. La función puede contener un bloque de código que se ejecutará cuando se llame a la función.

Sintaxis:

```
//Declarar función

function nombreDeLaFuncion ( parámetros ) {

    // código a ejecutarse una vez se llama la función

}

// Llamar función

nombreDeLaFuncion( parámetros )
```

----

### Expresiones de función

También es posible definir funciones utilizando expresiones de función, donde la función se asigna a una variable. Las expresiones de función pueden ser anónimas o con nombre.

Ejemplos:

```
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
```

----

### Arrow Function - Función de flecha

Las arrow functions son una sintaxis más corta y concisa para definir funciones en JavaScript. Se definen utilizando la flecha `=>` y no tienen su propio contexto de `this`, lo que significa que heredan el contexto del ámbito en el que están definidas.

```
// Arrow function
let resta = (a, b) => {
    return a - b;
};

console.log(resta(5, 3)); // Imprime 2
```

Cuando el cuerpo de la función consiste en una sola expresión, se pueden omitir las llaves y la palabra clave `return`. 

```
// Arrow function con cuerpo implícito
let cuadrado = x => x * x;

console.log(cuadrado(3)); // Imprime 9
```

----

### Funciones como valores

En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser asignados a variables, pasadas como argumentos a otras funciones y devueltas como valores desde otras funciones.

```
function operar(a, b, operacion) {
    return operacion(a, b);
}

console.log(operar(2, 3, sumar)); // Imprime 5
console.log(operar(5, 3, resta)); // Imprime 2
```

----
### Funciones flecha y `this`

En las arrow functions, `this` se hereda del contexto léxico, lo que significa que `this` en una arrow function se refiere al mismo `this` fuera de la función.

```
let persona = {
    nombre: "Juan",
    saludar: function() {
        setTimeout(() => {
            console.log("Hola, mi nombre es " + this.nombre);
        }, 1000);
    }
};

persona.saludar(); 

// Imprime "Hola, mi nombre es Juan" después de 1 segundo
```

----

### Funciones recursivas

Una función recursiva es una función que se llama a sí misma dentro de su propio cuerpo. Se utilizan para resolver problemas que se pueden dividir en subproblemas más pequeños.

```
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Imprime 120 (5 * 4 * 3 * 2 * 1)
```

----

### Parámetros 

Los parámetros en las funciones de JavaScript son los valores que se pasan a la función cuando se la llama. Estos valores son accesibles dentro del cuerpo de la función y se utilizan para realizar operaciones o cálculos.

----

### Declaración de parámetros

Los parámetros se declaran entre los paréntesis de la definición de la función. Pueden ser nombres de variables que representen los valores que se pasarán a la función cuando se la llame.

```
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
```

En este ejemplo, `nombre` es un parámetro de la función `saludar`.

----

### Pasar Argumentos.

Cuando se llama a una función, se proporcionan valores concretos llamados argumentos, que se asignan a los parámetros de la función en el orden en que se pasan.

```
saludar("Juan");
```

En este caso, "Juan" es el argumento que se pasa a la función `saludar` y se asigna al parámetro `nombre`.

----

### Parámetros predeterminados

Es posible asignar valores predeterminados a los parámetros de una función. Si no se proporciona un argumento para un parámetro con valor predeterminado, se utilizará el valor predeterminado.

```
function saludarPlaneta( nombre = "Tierra" ) {
    console.log("Hola, " + nombre + "!");
}

saludarPlaneta(); // Devuelve "Hola, Tierra!"
saludarPlaneta("Saturno"); // Devuelve "Hola, Saturno!"
```

----

### Número variable de argumentos (Rest parameters)

Se pueden definir funciones que acepten un número variable de argumentos utilizando la sintaxis de parámetros rest(`...`). Los parámetros rest recopilan todos los argumentos adicionales en un arreglo.

```
function sumarConRestParameters(...numeros) {
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

console.log(sumarConRestParameters(1, 2, 3)); // Imprime 6
console.log(sumarConRestParameters(1, 2, 3, 4, 5)); // Imprime 15
```

----

### Desestructuración de objetos como parámetros

Es posible pasar objetos como argumentos a funciones y desestructurarlos directamente en los parámetros de la función.

```
function mostrarInfoTrabajador({ nombre, edad }) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}

let trabajador = { nombre: "Juan", edad: 30 };
mostrarInfoTrabajador(trabajador);
```

----

### Desestructuración de arreglos como parámetros

De manera similar, se pueden pasar arreglos como argumentos a funciones y desestructurarlos directamente en los parámetros de la función.

```
function mostrarInfoAlumno([nombre, edad]) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}

let alumno = ["María", 25];
mostrarInfoAlumno(alumno);
```

----

### Funciones sin parámetros

También es posible definir funciones que no acepten ningún parámetro.

```
function saludo() {
    console.log("¡Hola!");
}

saludo(); // Imprime "¡Hola!"
```