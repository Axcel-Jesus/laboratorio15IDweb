const nuevoH3 = document.createElement('h3');
nuevoH3.textContent = 'Nuevo Encabezado H3';
settimeout(() => {
    document.body.insertBefore(nuevoH3, document.querySelector('p'));
}, 1000);
