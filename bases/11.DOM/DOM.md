# DOM (Document Object Model)

Es una represetación en memoria de la estructura de un documento HTML (o XML) que proporciona una interfaz para acceder y manipular los contenidos de dicha página web. En esencia, el DOM organiza los elementos HTML en una estructura de árbol donde cada nodo representa una parte del documento.

### Estructura del DOM

Ejemplo de un documento HTML básico:

```
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo DOM</title>
</head>
<body>
    <h1>Hola, Mundo!</h1>
    <p>Este es un párrafo de ejemplo.</p>
    <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
    </ul>
</body>
</html>
```

El DOM de este documento se vería así:

- Document
  - html
    - head
      - title
        - "Ejemplo DOM"
    - body
      - h1
        - "Hola, Mundo!"
      - p
        - "Este es un párrafo de ejemplo."
      - ul
        - li
          - "Elemento de lista 1"
        - li
          - "Elemento de lista 2"

Cada etiqueta HTML (como `<html>`, `<head>`, `<body>`, `<h1>`, `<p>`, etc.) y su contenido son represetnados como nodos en este árbol.

### Acceso y Manipulación del DOM con JavaScript

JavaScript proporciona métodos para interactuar con el DOM y cambiar dinámicamente la estructura y el contenido de la página web.

## Selección de Elementos

Para seleccionar elementos del DOM, se utiliza el método como `document.getElemenyById`, `document.querySelector`, y `document.querySelectorAll`.

### `document.getElementById(id)`

Permite seleccionar un elemento del DOM por su ID, devuelve el elemento que tiene el ID especifico.

```
// Ejemplo:
const titulo = document.getElementById('titulo');
```

### `document.getElementsByClassName(className)`

Selecciona todos los elementos que tienen la clase CSS especificada. Devuelve una colección (objeto HTMLCollection) de elementos.

```
// Ejemplo:
const elementos = document.getElementsByClassName('ejemplo');
```

### `document.getElementsByTagName(tagName)`

Selecciona todos los elementos con el nombre de la etiqueta especificada. Devuelve una colección (objeto HTMLCollection) de elementos.

```
// Ejemplo:
const parrafos = document.getElementsByTagName('p');
```

### `document.querySelector(selector)`

Devuelve el primer elemento que coincide con el selector CSS especificado.

```
// Ejemplo:
const primerParrafo = document.querySelector('p');
```

### `document.querySelectorAll(selector)`

Devuelve todos los elementos que coinciden con el selector CSS especificado. Devuelve una NodeList que es similar a un array pero estática.

```
// Ejemplo:
const todosLosP = document.querySelectorAll('p');
```

## Manipulación de Contenido

Una vez que se ha seleccionado un elemento, se puede modificar su contenido, atributos o estilo.

### `element.innerHTML`

Permite obtener o establecer el HTML contenido dentro de un elemento.

```
// Ejemplo:

const contenido = titulo.innerHTML; 
// Obtener contenido HTML

titulo.innerHTML = '<em>Nuevo</em> contenido'; 
// Establecer nuevo contenido HTML
```

### `element.textContent`

Obtiene o establece el texto plano (sin formato HTML) de un elemento.

```
// Ejemplo:

const textoParrafo = primerParrafo.textContent; 
// Obtener texto plano

primerParrafo.textContent = 'Nuevo texto'; 
// Establecer nuevo texto
```

### `element.setAttribute(name, value)` y `element.getAttribute(name)`

Permite establecer u obtener el valor de un atributo en un elemento.

```
// Ejemplo:

titulo.setAttribute('class', 'titulo-grande'); 
// Establecer clase

const claseTitulo = titulo.getAttribute('class'); 
// Obtener clase
```

## Métodos para Manipulación de Estilos

### `element.style.property`

Permite acceder o modificar las propieades de estilo CSS de un elemento.

```
// Ejemplo:

titulo.style.color = 'blue'; 
// Cambiar color del texto

titulo.style.fontSize = '24px'; 
// Cambiar tamaño de fuente
```


## Métodos para Manipulación Estructural

### `document.createElement(tagName)`

Crea un nuevo elemento con la etiqueta especificada.

```
// Ejemplo:

const nuevoParrafo = document.createElement('p');

nuevoParrafo.textContent = 'Este es un nuevo párrafo';
```

### `element.appendChild(child)` y `element.removeChild(child)`

appendChild: Agrega un nodo como el último hijo de un elemento.
removeChild: Elimina un nodo hijo de un elemento.

```
// Ejemplo:

const nuevoElemento = document.createElement('div');

nuevoElemento.textContent = 'Nuevo elemento';

document.body.appendChild(nuevoElemento); 
// Agregar al final del body

document.body.removeChild(nuevoElemento);
// Eliminar el nuevo elemento
```

## Métodos para Manipulación de Eventos

### `element.addEventListener(event, funcion)`

Permite agregar un evento a un elemento y especificar una funcion que se ejecutará cuando ocurra el evento.

```
// Ejemplo:

const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
    alert('¡Has hecho clic en el botón!');
});
```

Estos son solo algunos de los métodos más utilizados para interactuar con el DOM en JavaScript. La combinación de estos métodos proporciona una gran flexibilidad para crear aplicaciones web dinámicas y reactivas.


## Eventos de Ratón

### `click`

Se dispara cunado se hace clic en un elemento

```
const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
    alert('¡Has hecho clic en el botón!');
});
```

### `mouseover` y `mouseout`

mouseover: se dispara cuando el cursor se mueve sobre un elemento.

mouseout: se dispara cuando el cursor sale de un elemento.

```
const elemento = document.getElementById('miElemento');

elemento.addEventListener('mouseover', () => {
    console.log('El cursor está sobre el elemento.');
});

elemento.addEventListener('mouseout', () => {
    console.log('El cursor ha salido del elemento.');
});
```

### `mousedown`, `mouseup` y `mousemove`

mousedown: Se dispara cuando se presiona un boton del raton sobre un elemento. 

mouseup: Se dispara cuando se suelta un boton del raton sobre un elemento. 

mousemove: Se dispara cuando el cursor se mueve dentro de un elemento.

```
const caja = document.getElementById('miCaja');

caja.addEventListener('mousedown', () => {
    console.log('Se ha presionado un botón del ratón sobre la caja.');
});

caja.addEventListener('mouseup', () => {
    console.log('Se ha soltado un botón del ratón sobre la caja.');
});

caja.addEventListener('mousemove', (event) => {
    console.log(`Coordenadas del cursor: (${event.clientX}, ${event.clientY})`);
});
```

## Eventos de Teclado

### `keydown`, `keypress` y `keyup`

keydown: Se dispara cuando se presiona una tecla 

keypress: Se dispara cuando se mantiene presionada una tecla que produce un caracter.  

keyup: Se dispara cuando se suelta una tecla.

```
document.addEventListener('keydown', (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});

document.addEventListener('keyup', (event) => {
    console.log(`Tecla soltada: ${event.key}`);
});
```

## Eventos de Formulario

### `submit`

Se dispara cuando se envia un formulario

```
const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
    // Evita que se envíe el formulario (por ende no se vuelve a cargar la pagina)

    console.log('Formulario enviado!');
});
```

### `input` y `change`

input: Se dispara cuando se cambia el valor de un campo de entrada (input)

change: Se dispara cuando se cambia el valor de un campo de entrada y se pierde el foco del elemento.

```
const input = document.getElementById('miInput');
input.addEventListener('input', () => {
    console.log('El valor del input ha cambiado.');
});

input.addEventListener('change', () => {
    console.log('El valor del input ha cambiado y se perdió el foco.');
});
```

## Otros Eventos

### `load`

Se dispara cuando se completa la carga de la pagina (incluyendo imagenes y otros recursos)

```
window.addEventListener('load', () => {
    console.log('La página se ha cargado completamente.');
});
```


### `resize`

Se dispara cuando se cambia el tamaño de la ventana del navegador

```
window.addEventListener('resize', () => {
    console.log('La ventana del navegador ha cambiado de tamaño.');
});
```

### `scroll`

Se dispara cuando se desplaza la barra de desplazamiento de la página.

```
window.addEventListener('scroll', () => {
    const scrollX = window.scrollX; //Obtener el scroll horizontal
    const scrollY = window.scrollY; //Obtener el scroll vertical

    console.log(`Se ha realizado un desplazamiento en la página. ${scrollX} ${scrollY} `);
});
```

### `visibilitychange`

El evento `visibilitychange` se dispara en el objeto `document` cuando la visibilidad de la página cambia, es decir, cuando la pestaña se vuelve visible o invisible. Puedes escuchar este evento utilizando `addEventListener` en el objeto `document`.

```
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // La pestaña se ha vuelto visible
        console.log('La pestaña está ahora visible');
        // Ejecutar acciones necesarias cuando la pestaña está visible
    } else {
        // La pestaña se ha vuelto invisible (oculta)
        console.log('La pestaña está ahora oculta');
        // Ejecutar acciones necesarias cuando la pestaña está oculta
    }
});
```

### `offline` y `online`

Los eventos offline y online se utilizan para detectar cambios en la conectividad de red del navegador.

```
window.addEventListener('offline', () => {
    console.log('¡Estás desconectado de Internet!');
});

window.addEventListener('online', () => {
    console.log('¡Estás nuevamente conectado a Internet!');
});
```

### `unload`

El evento unload se dispara cuando la página esta siendo descargada (por ejemplo, cuando la ventana se cierra o se actualiza).

```
window.addEventListener('unload', () => {
    console.log('La página está siendo descargada. ¡Adiós!');
});
```

### `contextmenu`

El evento contextmenu se dispara cuando se hace clic con el boton derecho del mouse en un elemento. Puedes utilizar este evento para personalizar el menu contextual del navegador.

```
const miElemento = document.getElementById('miElemento');

miElemento.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Evitar que aparezca el menú contextual por defecto
    console.log('Se ha hecho clic con el botón derecho en el elemento.');
});
```

### `dblclick`

El evento dblclick se dispara cuando se hace doble clic en un elemento.

```
const miBoton = document.getElementById('miBoton');

miBoton.addEventListener('dblclick', () => {
    console.log('Se ha hecho doble clic en el botón.');
});
```

### `blur` y `focus`

Los eventos blur y focus se utilizan para detectar cuando un elemento pierde o recibe el foco, respectivamente.

```
const miInput = document.getElementById('miInput');

miInput.addEventListener('blur', () => {
    console.log('El campo de entrada ha perdido el foco.');
});

miInput.addEventListener('focus', () => {
    console.log('El campo de entrada ha recibido el foco.');
});
```


## Accediendo a los Formularios mediante `document.forms`

Para acceder a los formularios de un documento HTML, puedes utilizar la propiedad `document.forms`, que devuelve una coleccion (objeto HTMLCollection) de todos los formularios presentes en el documento.

```
const formularios = document.forms;
console.log(formularios); // Muestra la colección de formularios en la consola
```

Puedes acceder a formularios individuales dentro de la coleccion utilizando su indice numerico o su atributo `name`

```
// Acceder al primer formulario por índice (0)
const primerFormulario = document.forms[0];

// Acceder a un formulario por su nombre
const formularioPorNombre = document.forms['primerFormulario'];
```

Una vez que tienes una referencia a un formulario, puedes acceder a sus elementos de entrada (input, textarea, select, etc) mediante las propiedades `elements` o `namedItem`.

Propiedad `elements`

La propiedad `elements` de un formulario devuelve una coleccion de todos los elementos dentro del formulario, indexados por su posicion en el orden de aparicion en el HTML

```
const formulario = document.forms['miFormulario'];
const elementos = formulario.elements;

// Acceder al primer elemento dentro del formulario
const primerElemento = elementos[0];

// Acceder a un elemento por su nombre
const elementoPorNombre = elementos['nombreDelElemento'];
```

Metodo `namedItem`

El metodo `namedItem` de la coleccion `elements` te permite acceder a un elemento dentro del formulario por su atributo `name`:

```
const formulario = document.forms['miFormulario'];

// Acceder a un elemento por su nombre
const elementoPorNombre = formulario.elements.namedItem('nombreDelElemento');
```