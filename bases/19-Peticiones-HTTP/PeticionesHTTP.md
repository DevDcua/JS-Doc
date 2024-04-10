# Peticiones HTTP

Las peticiones HTTP en JavaScript son esenciales para interactuar con servidores web desde el lado del cliente (navegador) o desde el lado del servidor (usando Node.js). Estas peticiones permiten enviar y recibir datos entre la aplicación web y un servidor remoto, lo que es fundamental para cargar contenido dinámico, enviar formularios, acceder a APIs y mucho más. La forma más común de realizar peticiones HTTP en JavaScript es utilizando la interfaz `XMLHttpRequest` o la API `fetch`.

## XMLHttpRequest (XHR)

`XMLHttpRequest` es una API que proporciona funcionalidades para realizar peticiones HTTP asíncronas desde JavaScript. Aquí te explico paso a paso cómo utilizarla:

1. **Creación de la instancia**: Primero, creamos una nueva instancia de `XMLHttpRequest`:

```
let xhr = new XMLHttpRequest();
```

2. **Configuración de la solicitud**: Luego, configuramos la solicitud especificando el método HTTP y la URL a la que queremos hacer la solicitud:

```
xhr.open('GET', 'https://api.example.com/data', true); 

// true para solicitud asíncrona
```

3. **Manejo de la respuesta**: Definimos qué hacer cuando la respuesta del servidor esté lista:

```
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // La solicitud fue exitosa
        console.log(xhr.responseText);
    } else {
        // Ocurrió un error al hacer la solicitud
        console.error('Error en la solicitud');
    }
};
```

4. **Envío de la solicitud**: Finalmente, enviamos la solicitud al servidor:

```
xhr.send();
```

Ejemplo Cotidiano

Imagina que quieres desarrollar una aplicación web que muestra el clima actual basado en la ubicación del usuario. Para obtener datos meteorológicos, puedes hacer una solicitud HTTP a una API de clima.

```
// Crear una solicitud HTTP para obtener el clima actual
let xhr = new XMLHttpRequest();
let apiKey = 'tu_clave_de_api';
let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

xhr.open('GET', url, true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        let response = JSON.parse(xhr.responseText);
        let temperature = response.main.temp;
        let description = response.weather[0].description;
        console.log(`El clima en Londres: ${temperature}°C, ${description}`);
    } else {
        console.error('No se pudo obtener el clima');
    }
};

xhr.send();
```

En este ejemplo, estamos haciendo una solicitud GET a la API de OpenWeatherMap para obtener el clima actual en Londres. Una vez que recibimos la respuesta, analizamos los datos JSON devueltos y mostramos la temperatura y la descripción del clima en la consola del navegador.

## API Fetch

Además de `XMLHttpRequest`, también puedes utilizar la API `fetch`, que proporciona una forma moderna y más amigable de hacer peticiones HTTP en JavaScript.

```
let apiKey = 'tu_clave_de_api';
let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener el clima');
        }
        return response.json();
    })
    .then(data => {
        let temperature = data.main.temp;
        let description = data.weather[0].description;
        console.log(`El clima en Londres: ${temperature}°C, ${description}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

En este ejemplo, `fetch` se utiliza para hacer una solicitud GET a la misma API de clima. El uso de `fetch` es similar a `XMLHttpRequest`, pero proporciona una sintaxis más concisa utilizando promesas. La función `fetch` devuelve una promesa que resuelve con el objeto Response, que luego puede ser procesado para obtener los datos necesarios.

Ambos métodos (`XMLHttpRequest` y `fetch`) son útiles para realizar peticiones HTTP en JavaScript, pero `fetch` se ha convertido en la opción preferida debido a su sintaxis más moderna y manejo integrado de promesas. Sin embargo, `XMLHttpRequest` sigue siendo compatible con versiones más antiguas de los navegadores.