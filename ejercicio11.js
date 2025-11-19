const p = document.querySelectorAll('p');
setTimeout(() => {
    p[p.length-1].remove();
}, 1000);