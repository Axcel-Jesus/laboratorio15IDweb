const nuevaLista = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = `Elemento ${i}`;
    nuevaLista.appendChild(nuevoElemento);
}
const nuevoSection = document.createElement('section');
nuevoSection.appendChild(nuevaLista);
setTimeout(() => {
    document.body.appendChild(nuevoSection);
}, 1000);
