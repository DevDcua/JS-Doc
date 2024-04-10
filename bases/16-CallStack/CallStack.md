# Call Stack

El "Call Stack" es una estructura de datos utilizada por los motores de JavaScript (como el V8 de Chrome) para rastrear la ejecución de las funciones en un programa. Funciona como una pila (LIFO-Last In, First Out), donde las llamadas a funciones se agregan y eliminan conforme se ejecutan.

### Funcionamiento Básico:

* Cuando se llama a una función, se agrega un registro de activación (frame) correspondiente a esa función en la parte superior de la pila de llamadas.
* Cuando una función se completa (retorna o llega al final), su registro de activación se elimina de la pila.

Ejemplo:

```
function firstFunction() {
    secondFunction();
}

function secondFunction() {
    thirdFunction();
}

function thirdFunction() {
    console.log("Hello from the third function!");
}

firstFunction();
```

En este ejemplo, cuando `firstFunction` se llama:

* `firstFunction` se añade al call stack.
* `firstFunction` llama a `secondFunction`, por lo que `secondFunction` se añade al call stack encima de `firstFunction`.
* `secondFunction` llama a `thirdFunction`, por lo que `thirdFunction` se añade al call stack encima de `secondFunction`.
* `thirdFunction` imprime un mensaje en la consola y luego se completa, por lo que se elimina del call stack.
* `secondFunction` se completa y se elimina del call stack.
* `firstFunction` se completa y se elimina del call stack.

## Event Loop (Bucle de Eventos)

El "event loop" es un mecanismo que maneja las tareas asíncronas en JavaScript y garantiza que el código asíncrono se ejecute en el momento adecuado. Trabaja en conjunto con la pila de llamadas para gestionar la ejecución del código asíncrono.

### Modelo de Ejecucion de JavaScript

* JavaScript es un lenguaje de programación de un solo hilo (single-threaded), lo que significa que sólo puede ejecutar una tarea a la vez.
* Sin embargo, JavaScript puede manejar operaciones asíncronas (como solicitudes de red o temporizadores) utilizando callbacks, promesas, y funciones asíncronas.

### Cola de Tareas (Task Queue)

* Después de que una tarea asíncrona se completa, se coloca en la "cola de tareas" (task queue) para ser procesada más adelante.
* La cola de tareas es gestionada por el event loop y espera a que el call stack esté vacío para mover tareas desde la cola de tareas al call stack.

Ejemplo:

```
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");
```

* La llamada a `setTimeout` es una operación asíncrona y se mueve a la cola de tareas después de que el código síncrono se completa.
* Cuando el call stack está vacío (después de imprimir "End"), el event loop mueve la función de `setTimeout` de la cola de tareas al call stack para su ejecución.


## Relación entre Call Stack y Event Loop

El call stack maneja la ejecución de las funciones de forma sincrónica, siguiendo el orden en que se llaman las funciones.  

El event loop gestiona las tareas asíncronas, moviendo las tareas completadas desde la cola de tareas al call stack cuando el call stack está vacío.

En resumen, el call stack rastrea la ejecución de funciones en JavaScript de manera sincrónica, mientras que el event loop permite manejar tareas asíncronas y garantiza que se ejecuten en el momento adecuado, coordinando la interacción entre el call stack, la cola de tareas y las APIs del navegador. Esta combinación de conceptos es fundamental para entender el comportamiento asíncrono y la ejecución de código en JavaScript.