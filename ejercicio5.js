//Seleccionar un <ul> por su id y muestra en consola el texto de cada hijo <li> usando un bucle for...of

const lista = document.querySelector('#segundalista');
for (const elemento of lista.children) {
    console.log(elemento.textContent);
}