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

//--------------------------------------------------------------

let apiKeyFetch = 'tu_clave_de_api';
let urlFetch = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKeyFetch}`;

fetch(urlFetch)
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
