//Crear un nuevo <h3> y colócalo antes del primer <p> existente del documento
const nuevoH3 = document.createElement('h3');
nuevoH3.textContent = 'Nuevo Encabezado H3';
document.body.insertBefore(nuevoH3, document.querySelector('p'));