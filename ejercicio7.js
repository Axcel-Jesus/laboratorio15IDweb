//Crear un nuevo elemento <p> con texto “Elemento insertado con JS” y agrégalo al final del body
const nuevoParrafo = document.createElement('p');   
nuevoParrafo.textContent = 'Elemento insertado con JS';
document.body.appendChild(nuevoParrafo);