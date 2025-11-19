const divs = document.querySelectorAll('div');
let count = 0;

for (let i = 0; i < divs.length; i++) {
    count++;
}

const p = document.createElement('p');
p.innerHTML = `El documento contiene ${count} nodos <div>`;
setTimeout(() => {
document.body.appendChild(p);
}, 1000);