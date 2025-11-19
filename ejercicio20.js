const section = document.querySelector('section');

const h2 = document.createElement('h2');
h2.innerHTML = 'Título nuevo';

const p = document.createElement('p');
p.innerHTML = 'Descripción generada';

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerHTML = 'Primer ítem';

const li2 = document.createElement('li');
li2.innerHTML = 'Segundo ítem';

const li3 = document.createElement('li');
li3.innerHTML = 'Tercer ítem';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
setTimeout(() => {
    section.appendChild(h2);
}, 1000);
setTimeout(() => {
    section.appendChild(p);
}, 2000);
setTimeout(() => {
    section.appendChild(ul);
}, 3000);
setTimeout(() => {
if(section.contains(h2)) {
        section.removeChild(h2);
    
}
}, 4000);