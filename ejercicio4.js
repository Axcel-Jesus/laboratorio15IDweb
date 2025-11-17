//Agregar la clase "resaltado" a todos los elementos <li> y elimina la clase "oculto" si la tienen

const elementos = document.querySelectorAll('li');
elementos.classList.add('resaltado');
elementos.classList.remove('oculto');