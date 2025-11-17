//Cambiar el contenido de todos los párrafos <p> para que diga: “Texto actualizado dinámicamente”

const parrafos = document.querySelectorAll('p');
setTimeout(() => {
    parrafos.forEach(p => p.textContent = 'Texto actualizado dinámicamente');
}, 1000);