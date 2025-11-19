const divs = document.querySelectorAll('div');
const colores = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink'];
divs.forEach((div, n) => {
    div.style.backgroundColor = colores[n];
});