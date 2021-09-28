const carousel = document.querySelector('.carousel');
const gifos = document.querySelector('.gifos');

const flechaIzq = document.getElementById('flecha-izquierda');
const flechaDer = document.getElementById('flecha-derecha');

flechaDer.addEventListener('click', ()=> {
    carousel.scrollLeft += carousel.offsetWidth;
})
flechaIzq.addEventListener('click', ()=> {
    carousel.scrollLeft -= carousel.offsetWidth;
})

