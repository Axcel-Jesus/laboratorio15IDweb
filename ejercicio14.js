const lista = document.querySelector('ul');
const ultimo = lista.querySelector('li:last-child');
setTimeout(() => {
    lista.insertBefore(ultimo, lista.firstChild);
}, 1000);
