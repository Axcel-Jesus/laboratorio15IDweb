//Para cada <div> del documento, cambiar su color de fondo a un color diferente (por ejemplo, usando un array de colores)
const divs = document.querySelectorAll('div');
const colores = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink'];
divs.forEach((div, n) => {
    div.style.backgroundColor = colores[n];
});