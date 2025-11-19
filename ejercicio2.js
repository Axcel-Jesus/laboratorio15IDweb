const parrafos = document.querySelectorAll('p');
setTimeout(() => {
    parrafos.forEach(p => p.textContent = 'Texto actualizado dinámicamente');
}, 1000);