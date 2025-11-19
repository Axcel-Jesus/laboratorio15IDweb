const contenedor = document.getElementById('contenedor');  
const p1 = document.createElement('p');
p1.innerHTML = 'Primer párrafo';
const p2 = document.createElement('p');
p2.innerHTML = 'Segundo párrafo';
const p3 = document.createElement('p');
p3.innerHTML = 'Tercer párrafo';
setTimeout(() => {
    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);
}, 1000);
setTimeout(() => {
    contenedor.removeChild(p2);
}, 2000);