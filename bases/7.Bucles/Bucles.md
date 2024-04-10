# Bucles

Los bucles en JavaScript son estructuras de control de flujo que permiten ejectuar un bloque de código varias veces. Los bucles más comunes son `for`, `while`, y `do...while`. 

## `for`

El bucle 'for' se utiliza cuando se conoce el número exacto de iteraciones que se desea realizar.

Sintaxis:

```
for(inicialización; condición; incremento/decremento){

    // código a ejecutar en cada iteración

}
```

Un ejemplo básico para el uso del for podría ser un contador:

```
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

console.log(contador); //Resultado 5
```

En el ``console.log(`Voy entrando ${i + 1} vez/veces en el bucle`);``  

En el `${i + 1}` lo que estamos haciendo es mostrar el resultado de la variable que inicializamos `i`, pero a su vez estamos sumandole 1 más que nada con un fin de que al mostrar en consola comience con 1 y no con 0.

También sería posible inicializar `i` con valor 1 y poner como condición que `i <= 5` para que sean 5 ingresos.


Vamos a tener el siguiente resultado:

// Voy entrando 1 vez/veces en el bucle  
// Voy entrando 2 vez/veces en el bucle  
// Voy entrando 3 vez/veces en el bucle  
// Voy entrando 4 vez/veces en el bucle  
// Voy entrando 5 vez/veces en el bucle  

Otro ejemplo para ver el uso de el `for`, sería recorriendo un string:

```
let palabra = "JavaScript";

//Lo mismo que el ejemplo anterior pero se modifica la condición.
//En este caso la condición seria que i sea menor a el largo de el valor de palabra.

//Tener en cuenta que los string comienzan la posición de sus caracteres a partir del 0, por eso se inicializa en este caso en 0.

for (let i = 0; i < palabra.length; i++) {
    
    // Lo que estamos haciendo acá es mostrar en consola cada carácter.
    // al poner palabra[posición], mostramos el carácter según el 
    // valor de i que se utilizara para la posición. 

    console.log( palabra[i] );

    // Como resultado vamos a tener una impresión en consola para cada carácter.

    // otra forma era usando palabra.charAt(posición);

}

```

Entonces de esta forma podemos recorrer un string. Con el método .length nos da un valor numérico (10 en este caso), sabemos que las posiciones de los carácteres comienzan desde 0, por ende, la palabra "JavaScript" si tiene 10 carácteres, va a tener 9 posiciones (cantidad de caracteres - 1).  
Luego se muestra en consola cada carácter ya sea con la forma nombreVariable\[posición\] o nombreVariable.charAt(posición). La posición que vamos a utilizar es el valor de i que parte de 0 hasta alcanzar el valor 9 y luego no vuelve a ingresar al ciclo ya que tiene como condición ser menor a 10 (en este caso en particular).


## `while`

El bucle while se utiliza cuando no se conoce el número exactto de iteraciones y se desea ejecutar un bloque de código mientras una condición sea verdadera.

Sintaxis:

```
while ( condición ) {

    // código a ejecutar mientras la condición sea verdadera.

}
```

A diferencia del for, no tenemos una inicialización o incremento/decremento dentro de los ( ).

```
let i = 0;

while (i < 5){
    console.log(i);
}
```

En el anterior ejemplo de ciclo while tenemos un error, inicializamos con una variable i fuera del ciclo, la misma tiene valor cero y para entrar en el ciclo tiene que tener valor menor a 5, por ende, se cumple la condición y se muestra el mensaje en consola.

Pero y ahora como se detiene ese ciclo si la variable siempre cumple la condición? Lo que sucede es que se crea un ciclo infinito, ya que en ningún momento se deja de cumplir la condición, mientras la misma sea verdadera no se detrendrá, hay que hacer algo para que llegado un momento la misma se detenga.

```
let i = 0;

while (i < 5){
    console.log(i);
    i++
}
```

Para eso podemos incrementar el valor de la variable de i para que llegado un momento el valor que tenga ya no cumpla con la condición y pare el ciclo.

```
// Ejemplo de uso de while cuando no se sabe la cantidad de iteraciones

let suma = 0;
let numero;

while (true){

    numero = parseInt(prompt( "Ingrese un número (o ingrese 0 para terminar):"));

    if ( numero === 0 ) {
        break; //Termina el bucle si se ingresa el número 0.
    }

    suma += numero;

}

console.log( "La suma de los números ingresados es: " + suma );
```

En el anterior código tenemos un ejemplo de un ciclo `while` en el que no sabemos la cantidad de iteraciones. En este ciclo, se solicita al usuario que ingrese un número para sumar, y en caso de que ingrese `0`, se detiene el ciclo.

El método `prompt()` genera una ventana emergente con el texto que le proporcionamos como argumento, y guarda en una variable el valor ingresado por el usuario. Es importante tener en cuenta que `prompt()` devuelve una cadena de texto, por lo que usamos `parseInt()` para convertirlo a un número entero.

Como vimos en el ejemplo del `switch`, la palabra clave break se utiliza para detener la ejecución y salir del bloque de código, en este caso del bucle.


## `do...while`

El bucle `do...while` es similar a `while`, pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa.

Sintaxis:

```
do {

    // código a ejecutar
    
} while ( condición );
```

```
let estadoPoder = "cargando";

do {

    console.log(estadoPoder);

} while (estadoPoder != "cargando");

console.log("Salí del do...while pero se ejecutó al menos 1 vez");
```

Como vemos en el anterior ejemplo, si bien no se cumplía la condición, primero se ejecuta lo que este dentró del `do`, luego se evalúa la condición y como la misma era `falsa`, no vuelve a ejecutar el código del `do`. Y continúa al `console.log` que estaba fuera del ciclo.

Estos bucles son herramientas poderosas para la programación en JavaScript y se utilizan para manejar tareas repetitivas y realizar operaciones en colecciones de datos. Cada tipo de bucle tiene sus propias características y casos de uso específico, por lo que es importante comprender cómo y cuando utilizar cada uno de ellos.