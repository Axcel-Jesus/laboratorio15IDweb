//Seleccionar la primera imagen del documento y cambia sus atributos src y alt

const imagen = document.querySelector('img');
setTimeout(() => {
    imagen.src = 'arbol.jpg';
    imagen.alt = 'nuevo texto';
}, 1000);