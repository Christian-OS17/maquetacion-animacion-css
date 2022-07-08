const modal = document.querySelector('.modal')
const eventFigure1 = document.querySelector('#card1');
const eventFigure2 = document.querySelector('#card2');
const eventFigure3 = document.querySelector('#card3');

console.log('hola mundo');
eventFigure1.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
eventFigure2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
eventFigure3.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});


const closebtn = document.querySelector('.close')
closebtn.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});

// addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     modal.classList.add('visible');
// })