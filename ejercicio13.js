const articulo = document.querySelector('article');
const main = document.querySelector('main');
setTimeout(() => {
    main.appendChild(articulo.cloneNode(true));
}, 1000);
