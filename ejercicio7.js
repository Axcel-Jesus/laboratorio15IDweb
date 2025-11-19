const nuevoParrafo = document.createElement('p');   
nuevoParrafo.textContent = 'Elemento insertado con JS';
setTimeout(() => {
    document.body.appendChild(nuevoParrafo);
}, 1000);
