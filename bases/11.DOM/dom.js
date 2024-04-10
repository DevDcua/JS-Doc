const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
    alert('¡Has hecho clic en el botón!');
});


//----------------------------------------------------------------


const elemento = document.getElementById('miElemento');

elemento.addEventListener('mouseover', () => {
    console.log('El cursor está sobre el elemento.');
});

elemento.addEventListener('mouseout', () => {
    console.log('El cursor ha salido del elemento.');
});


//----------------------------------------------------------------


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


//----------------------------------------------------------------

document.addEventListener('keydown', (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});

document.addEventListener('keyup', (event) => {
    console.log(`Tecla soltada: ${event.key}`);
});

//----------------------------------------------------------------


const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se envíe el formulario
    
    console.log('Formulario enviado!');
});

//----------------------------------------------------------------

const input = document.getElementById('miInput');
input.addEventListener('input', () => {
    console.log('El valor del input ha cambiado.');
});

input.addEventListener('change', () => {
    console.log('El valor del input ha cambiado y se perdió el foco.');
});

//----------------------------------------------------------------

window.addEventListener('load', () => {
    console.log('La página se ha cargado completamente.');
});

window.addEventListener('resize', () => {
    console.log('La ventana del navegador ha cambiado de tamaño.');
});

window.addEventListener('scroll', () => {
    const scrollX = window.scrollX; //Obtener el scroll horizontal
    const scrollY = window.scrollY; //Obtener el scroll vertical

    console.log(`Se ha realizado un desplazamiento en la página. ${scrollX} ${scrollY} `);
});

//----------------------------------------------------------------

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

//----------------------------------------------------------------

window.addEventListener('offline', () => {
    console.log('¡Estás desconectado de Internet!');
});

window.addEventListener('online', () => {
    console.log('¡Estás nuevamente conectado a Internet!');
});

window.addEventListener('unload', () => {
    console.log('La página está siendo descargada. ¡Adiós!');
});

//----------------------------------------------------------------


const miElemento = document.getElementById('miElemento');

miElemento.addEventListener('contextmenu', (event) => {
    event.preventDefault(); 
    // Evitar que aparezca el menú contextual por defecto
    console.log('Se ha hecho clic con el botón derecho en el elemento.');
});

miElemento.addEventListener('dblclick', () => {
    console.log('Se ha hecho doble clic en la caja.');
});



const miInput = document.getElementById('miInput');

miInput.addEventListener('blur', () => {
    console.log('El campo de entrada ha perdido el foco.');
});

miInput.addEventListener('focus', () => {
    console.log('El campo de entrada ha recibido el foco.');
});


//------------------------------------------------------------

const formularios = document.forms;

console.log(formularios); // Muestra la colección de formularios en la consola

// Acceder al primer formulario por índice (0)
const primerFormulario = document.forms[0];

// Acceder a un formulario por su nombre
const formularioPorNombre = document.forms['primerFormulario'];

console.log(formularioPorNombre);


const elementos = formularioPorNombre.elements;

// Acceder al primer elemento dentro del formulario
const primerElemento = elementos[0];

console.log(primerElemento);

// Acceder a un elemento por su nombre
const elementoPorNombre = elementos.namedItem('submitBoton');

console.log(elementoPorNombre);