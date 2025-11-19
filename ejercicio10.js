const parrafo = document.querySelector('p');
const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Párrafo reemplazado';
setTimeout(() => {
    parrafo.replaceWith(nuevoElemento);
}, 1000);