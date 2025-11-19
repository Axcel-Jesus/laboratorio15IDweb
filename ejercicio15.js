const contenedor = document.querySelector('article');
const parrafos = contenedor.querySelectorAll('p');
const textos = Array.from(parrafos).map(p => p.textContent);
textos.sort();
setTimeout(() => {
    contenedor.innerHTML = '';
}, 1000);
setTimeout(() => {
    textos.forEach(texto => contenedor.appendChild(document.createElement('p')).textContent = texto);
}, 1000);
