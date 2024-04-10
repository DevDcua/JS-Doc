const miPromesa = new Promise((resolve, reject) => {

    // Simular una operación asíncrona (por ejemplo, una solicitud HTTP)
    
    setTimeout(() => {

        const exito = true; // Simulación de éxito

        if (exito) {

            
            resolve("¡Operación exitosa!"); // Resuelve la promesa con éxito

        } else {

            reject(new Error("¡Algo salió mal!")); // Rechaza la promesa con un error

        }
        
    }, 2000); // Simular una operación que tarda 2 segundos
});


miPromesa.then((resultado) => {
    console.log(resultado); // Imprimirá "¡Operación exitosa!" si la promesa se cumple
}).catch((error) => {
    console.error(error); // Imprimirá el error si la promesa es rechazada
});



//-------------------------------------------------------------------

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


//-------------------------------------------------------------------

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
        console.log(resultado); // Imprimirá "Paso dos completado" después de 2 segundos
    })
    .catch((error) => {
        console.error("Error:", error);
    });


//-----------------------------------------------------------------

// Simular dos promesas que se resuelven con datos ficticios
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: 1, nombre: 'Ejemplo de datos 1' });
    }, 7000); // Simula una demora de 1 segundo
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: 2, nombre: 'Ejemplo de datos 2' });
    }, 8000); // Simula una demora de 1.5 segundos
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

//-----------------------------------------------------------------


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


//-----------------------------------------------------------------


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



//--------------------------------------------------------------------

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


//--------------------------------------------------------------------


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


//--------------------------------------------------------------------

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

Promise.any(promesas)
    .then((resultado) => {
        console.log('Primera promesa resuelta:', resultado);
    })
    .catch((error) => {
        console.error('Todas las promesas fallaron');
    });