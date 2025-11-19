const imagen = document.querySelector('img');
setTimeout(() => {
    imagen.src = 'arbol.jpg';
    imagen.alt = 'nuevo texto';
}, 1000);