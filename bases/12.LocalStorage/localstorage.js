const guardarNombre = () => {
    const nombre = document.getElementById('nombreInput').value;
    localStorage.setItem('nombreUsuario', nombre);
    alert('Nombre guardado correctamente.'); 
}

// Cargar el nombre almacenado al cargar la página
window.onload = function() {
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
        alert('Bienvenido de nuevo, ' + nombreGuardado);
    }
};