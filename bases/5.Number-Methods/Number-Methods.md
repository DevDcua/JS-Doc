# Number Methods / Number Properties

Los números en JavaScript (representados por el tipo de datos "Number") tienen una serie de métodos y propiedades incorporados que permiten realizar diversas operaciones y manipulaciones numéricas.

## Métodos

### `.isFinite()`

Determina si un valor es un número finito.

```
console.log( Number.isFinite( 10 ) ); //Devuelve true

console.log( Number.isFinite( Infinity ) ); //Devuelve false
```

### `.isInteger()`

Determina si un valor es un número entero.

```
console.log( Number.isInteger(5) ); //Devuelve true

console.log( Number.isInteger(5.5) ); //Devuelve false
```

### `.isNaN()`

Determina si un valor es NaN (Not a Number o No es un número)

```
console.log( Number.isNaN(10) ); //Devuelve false

console.log( Number.isNaN("Soy un string") ); //Devuelve true
```

### `.parseFloat()`

Convierte una cadena en un número de punto flotante (float)

```
console.log( Number.parseFloat( "3.14" ) ); //Devuelve 3.14
```

### `.parseInt()`

Convierte una cadena en un número entero (integer)

```
console.log( Number.parseFloat( "3" ) ); //Devuelve 3
```

### `.toFixed()`

Convierte un número en un string, redondeando el número a una cantidad específica de decimales y devuelve el string resultante.

```
let num = 3.14159;

console.log( num.toFixed(2) ); //Devuelve: "3.14"
```


### `.toPrecision()`

Devuelve una cadena representando el número a una precisión especificada en notación de punto fijo o en notación exponencial.

```
let num2 = 123.456;

console.log( num2.toPrecision(4) ); //Devuelve: "123.5"
```

### `.toString()`

Convierte un número en una cadena, con una base especificada para la representación numérica (binario, octal, decimal o hexadecimal).

```
let num3 = 255;

console.log( num3.toString(2) ); 

// Devuelve 11111111 (binario)
```


## Propiedades

### `.MAX_VALUE`
### `.MIN_VALUE`

Retorna el valor más grande y más pequeño posible representable en JavaScript respectivamente.

```
console.log(Number.MAX_VALUE); 
// Devuelve 1.7976931348623157e+308

console.log(Number.MIN_VALUE); 
// Devuelve 5e-324 (número positivo más pequeño)
```

### `.NaN`

Representa un valor que no es un número

```
console.log(Number.NaN); // Devuelve NaN (Not a Number)
```

### `.POSITIVE_INFINITY`
### `.NEGATIVE_INFINITY`

Representa el infinito positivo y negativo respectivamente.

```
console.log(Number.POSITIVE_INFINITY); 
// Devuelve Infinity

console.log(Number.NEGATIVE_INFINITY); 
// Devuelve -Infinity
```

### `.EPSILON`

Representa el valor más pequeño que se puede sumar a 1 y dar 1 de nuevo.

```
console.log(Number.EPSILON);
// Devuelve 2.220446049250313e-16
```
