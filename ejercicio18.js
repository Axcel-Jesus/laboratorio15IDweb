const ul = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = 'Nivel interno';
    li.appendChild(span);
    ul.appendChild(li);
}
setTimeout(() => {
    document.body.appendChild(ul);
}, 1000);