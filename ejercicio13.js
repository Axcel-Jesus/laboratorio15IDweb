const articulo = document.querySelector('article');
const main = document.querySelector('main');
settimeout(() => {
    main.appendChild(articulo.cloneNode(true));
}, 1000);
