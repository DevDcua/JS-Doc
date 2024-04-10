# Promesas, async, async await ...

Las promesas en JavaScript son objetos que representan el resultado eventual (éxito o fracaso) de una operación asíncrona. Las promesas son ampliamente utilizadas para manejar tareas asíncronas de manera más limpia y eficiente en comparación con los callbacks tradicionales, lo que facilita la escritura y comprensión del código.

## Características clave de las promesas

1. **Estado**: Una promesa puede estar en uno de los tres estados:
   * **Pendiente (pending)**: Estado inicial, la promesa está ejecutándose.
   * **Cumplicad (fulfilled)**: La operación asíncrona se completó con éxito.
   * **Rechazada (rejected)**: La operación asíncrona falló.
2. **Encadenamiento**: Las promesas permiten encadenar operaciones asíncronas de manera más legible usando métodos como `.then()` y `.catch()`.

## Creando una promesa

Para crear una promesa en JavaScript, utilizamos la sintaxis del constructor `Promise`. El constructor de `Promise` toma una función con dos argumentos: `resolve` y `reject`.

```
// Ejemplo de promesa que simula una operación asíncrona (por ejemplo, una llamada a una API)

const miPromesa = new Promise((resolve, reject) => {

    // Simular una operación asíncrona (por ejemplo, una solicitud HTTP)
    
    setTimeout(() => {

        const exito = true; // Simulación de éxito

        if (exito) {

            resolve(console.log("¡Operación exitosa!")); // Resuelve la promesa con éxito

        } else {

            reject(new Error("¡Algo salió mal!")); // Rechaza la promesa con un error

        }
        
    }, 2000); // Simular una operación que tarda 2 segundos
});
```

## Consumiendo una promesa

Una vez que creamos una promesa, podemos consumirla usando los métodos `.then()` y `.catch()` para manejar el resultado (éxito o error) de la operación asíncrona.

```
miPromesa.then((resultado) => {
    console.log(resultado); // Imprimirá "¡Operación exitosa!" si la promesa se cumple
}).catch((error) => {
    console.error(error); // Imprimirá el error si la promesa es rechazada
});
```


## Ejemplo:

Imagina que estás solicitando datos de un servidor remoto para mostrar en una aplicación web. Usando promesas, puedes manejar esta operación de manera asíncrona de una manera más clara y estructurada.

```
function obtenerDatosDeUsuario() {
    return new Promise((resolve, reject) => {
        // Simular una solicitud HTTP para obtener datos de usuario
        setTimeout(() => {
            const exito = true; // Simulación de éxito
            if (exito) {
                const datos = { nombre: "Juan", edad: 30, ciudad: "Ciudad de México" };
                resolve(datos); // Resuelve la promesa con los datos del usuario
            } else {
                reject(new Error("Error al obtener datos del usuario")); // Rechaza la promesa con un error
            }
        }, 3000); // Simular una operación que tarda 3 segundos
    });
}

// Consumir la promesa para obtener datos de usuario
obtenerDatosDeUsuario()
    .then((datos) => {
        console.log("Datos del usuario:", datos);
    })
    .catch((error) => {
        console.error("Error al obtener datos:", error);
    });
```

En este ejemplo, `obtenerDatosDeUsuario()` devuelve una promesa que simula una solicitud HTTP. Usamos `.then()` para manejar el caso de éxito (datos obtenidos) y `.catch()` para manejar cualquier error que pueda ocurrir durante la solicitud.


## Encadenamiento de promesas

Una característica poderosa de las promesas es la capacidad de encadenar múltiples operaciones asíncronas de manera legible utilizando el método `.then()`. Esto permite ejecutar tareas secuenciales una tras otra.

```
function pasoUno() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paso uno completado");
        }, 4000);
    });
}

function pasoDos(resultado) {
    console.log(resultado);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paso dos completado");
        }, 2000);
    });
}

pasoUno()
    .then(pasoDos)
    .then((resultado) => {
        console.log(resultado); // Imprimirá "Paso dos completado" después de 5 segundos
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

En este ejemplo, `pasoUno()` se ejecuta primero y luego, su resultado se pasa a `pasoDos()` mediante el encadenamiento de promesas usando `.then()`. Finalmente, manejamos el resultado final en el último `.then()`.

## Promise.all()

`Promise.all()` es útil cuando necesitas manejar múltiples promesas al mismo tiempo y esperar a que todas se resuelvan.

```
// Simular dos promesas que se resuelven con datos ficticios
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: 1, nombre: 'Ejemplo de datos 1' });
    }, 1000); // Simula una demora de 1 segundo
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: 2, nombre: 'Ejemplo de datos 2' });
    }, 1500); // Simula una demora de 1.5 segundos
});

// Utilizamos Promise.all para esperar a que ambas promesas se resuelvan
Promise.all([promesa1, promesa2])
    .then((respuestas) => {
        // respuestas contiene un array con los resultados de ambas promesas
        const datos1 = respuestas[0]; // datos1 es el resultado de promesa1
        const datos2 = respuestas[1]; // datos2 es el resultado de promesa2
        return [datos1, datos2]; // Retornamos un array con los datos
    })
    .then(([datos1, datos2]) => {
        console.log("Datos 1:", datos1);
        console.log("Datos 2:", datos2);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

```

En este ejemplo, `Promise.all()` espera a que todas las promesas dentro del array se resuelvan, y luego procesa los resultados juntos.


## Promise.race()

`Promise.race()` se resuelve tan pronto como una de las promesas del iterable se resuelva o se rechace, con el valor o razón de la primera promesa resuelta o rechazada.


```
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 3 completada'), 1000);
});

const promesa4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 4 completada'), 2000);
});

Promise.race([promesa3, promesa4])
    .then((resultado) => {
        console.log("Primera promesa resuelta:", resultado); // Imprimirá "Promesa 3 completada" después de 1 segundo
    })
    .catch((error) => {
        console.error("Error:", error); // Este callback nunca se ejecutará en este ejemplo
    });
```

En este caso, `Promise.race()` resuelve tan pronto como la primera promesa (entre `promesa3` y `promesa4`) se resuelva.

## Async/Await

`async` y `await` son características introducidas en ECMAScript 2017 que proporcionan una sintaxis más clara y concisa para trabajar con promesas.

* `async`: Se utiliza para declarar una función como asíncrona, lo que significa que la función automáticamente devuelve una promesa.
* `await`: Se utiliza dentro de una función async para esperar la resolución de una promesa. Esto permite escribir código asíncrono de manera similar a código síncrono, lo que mejora la legibilidad.

Ejemplo:

```
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username: 'Alice', age: 25 });
        }, 1500);
    });
}

async function displayUserData() {
    try {
        const userData = await fetchUserData();
        console.log('Username:', userData.username);
        console.log('Age:', userData.age);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

displayUserData();
```

En este ejemplo:

La función `fetchUserData` simula una operación asincrónica (como una solicitud HTTP) que tarda 1.5 segundos en completarse y luego resuelve la promesa con un objeto que contiene el nombre de usuario (`username`) y la edad (`age`).

La función `displayUserData` utiliza `async` / `await` para consumir la promesa retornada por `fetchUserData`. Dentro de un bloque `try`, espera a que `fetchUserData` se resuelva y luego muestra los datos del usuario (`username` y `age`). Si se produce algún error durante la obtención de los datos, se captura en el bloque `catch` y se muestra por consola.

Finalmente, se llama a `displayUserData()` para iniciar el proceso de obtener y mostrar los datos del usuario de manera asíncrona.

## Manejo avanzado de errores

Las promesas permiten un manejo efectivo de errores a través del método `.catch()` al final de una cadena de promesas. Además, puedes lanzar y capturar errores dentro de una promesa.

```
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        // Simular una operación asíncrona que falla
        setTimeout(() => {
            const exito = false;
            if (exito) {
                resolve('Datos obtenidos correctamente');
            } else {
                reject(new Error('Error al obtener datos'));
            }
        }, 2000);
    });
}

obtenerDatos()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error('Hubo un error:', error.message);
    });
```

En este ejemplo, si la promesa es rechazada (porque `exito` es `false`), el error será capturado por el método `.catch()`.

## Promise.prototype.finally()

`finally()` permite ejecutar una función determinada después de que una promesa se resuelva o se rechace. Esto es útil para realizar acciones de limpieza, independientemente del resultado de la promesa.

```
obtenerDatos()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error('Error al recuperar datos:', error);
    })
    .finally(() => {
        console.log('Operación finalizada'); 
        // Se ejecutará siempre, sin importar el resultado
    });
```

## Manejo avanzado de múltiples promesas

**`Promise.allSettled(promesas)`**: Espera a que todas las promesas se resuelvan o se rechacen, y retorna un array con los resultados (exitosos o fallidos) de cada promesa.


```
const promesas = [
    Promise.resolve('Éxito'),
    Promise.reject(new Error('Fallo')),
    Promise.resolve('Otro éxito')
];

Promise.allSettled(promesas)
    .then((resultados) => {
        resultados.forEach((resultado) => {
            if (resultado.status === 'fulfilled') {
                console.log('Éxito:', resultado.value);
            } else if (resultado.status === 'rejected') {
                console.error('Error:', resultado.reason.message);
            }
        });
    });
```

**`Promise.any(promesas)`**: Retorna la primera promesa resuelta. Si todas las promesas son rechazadas, retorna un error.

```
const promesas = [
    Promise.resolve('Éxito'),
    Promise.reject(new Error('Fallo')),
    Promise.resolve('Otro éxito')
];

Promise.any(promesas)
    .then((resultado) => {
        console.log('Primera promesa resuelta:', resultado);
    })
    .catch((error) => {
        console.error('Todas las promesas fallaron');
    });

```

