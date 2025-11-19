const nuevoH3 = document.createElement('h3');
nuevoH3.textContent = 'Nuevo Encabezado H3';
setTimeout(() => {
    document.body.insertBefore(nuevoH3, document.querySelector('p'));
}, 2000);
