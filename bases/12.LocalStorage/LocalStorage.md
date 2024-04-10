# LocalStorage

El `localStorage` es una característica del navegador web que permite a las aplicaciones web almacenar datos de manera persistente en el navegador del usuario. Estos datos permanecen guardados incluso después de que el usuario cierra el navegador o reinicia la computadora. El localStorage proporciona una forma sencilla de almacenar y recuperar datos clave-valor en el navegador.

## Uso básico del `localStorage`

El `localStorage` se utiliza a través del objeto `window.localStorage`. Aquí tienes una descripción de las operaciones básicas que puedes realizar con él:

### Almacenar datos:

Para almacenar un valor en el localStorage, utiliza setItem pasando una clave y un valor como argumentos. Por ejemplo:

```
localStorage.setItem('nombreUsuario', 'Juan');
```

En este ejemplo, el nombre 'Juan' se almacenará con la clave 'nombreUsuario' en el `localStorage`.

### Recuperar datos:

Puedes obtener un valor del `localStorage` utilizando getItem y pasando la clave correspondiente:

```
const nombre = localStorage.getItem('nombreUsuario');

console.log(nombre); 
// Esto imprimirá 'Juan' en la consola
```

### Eliminar datos:

Para eliminar un elemento del `localStorage`, utiliza `removeItem` y pasa la clave que deseas eliminar:

```
localStorage.removeItem('nombreUsuario');
```

### Borrar todo el `localStorage`

Si deseas eliminar todos los elementos almacenados en el localStorage, puedes usar `clear`:

```
localStorage.clear();
```

## Consideraciones adicionales

* Los datos almacenados en `localStorage` están disponibles para cualquier página desde el mismo dominio y protocolo (es decir, `http` o `https`).
* `localStorage` almacena datos en forma de cadenas de texto. Si necesitas almacenar objetos JavaScript, debes convertirlos a JSON usando `JSON.stringify` antes de almacenarlos, y luego convertirlos de nuevo a objetos usando `JSON.parse` al recuperarlos.

```
const miObjeto = { nombre: 'Juan', edad: 30 };
localStorage.setItem('objetoUsuario', JSON.stringify(miObjeto));

const objetoRecuperado = JSON.parse(localStorage.getItem('objetoUsuario'));
console.log(objetoRecuperado); // Imprimirá el objeto original
```

El `localStorage` es una herramienta útil para almacenar pequeñas cantidades de datos en el navegador del usuario de manera persistente. Sin embargo, ten en cuenta que no debes abusar de su uso ni almacenar datos sensibles como contraseñas sin cifrar.