//Crear un <ul> y agrega 5 <li> con los textos “Elemento 1”, “Elemento 2”, …, “Elemento 5”. Inserta la lista dentro de un <section> existente
const nuevaLista = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = `Elemento ${i}`;
    nuevaLista.appendChild(nuevoElemento);
}
const nuevoSection = document.createElement('section');
nuevoSection.appendChild(nuevaLista);
document.body.appendChild(nuevoSection);