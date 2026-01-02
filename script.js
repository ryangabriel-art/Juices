const prev = document.getElementById('prev');
const next = document.getElementById('next');
const list = document.querySelectorAll('.item');

const count = list.length;
let active = 0;

next.addEventListener('click', () => {

    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    list[active].classList.add('active');
    if( active >= count - 1) {
        active = 0;
    } else  {
        active = active + 1
    }
})

prev.addEventListener('click', () => {

    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    list[active].classList.add('active');
    if(active <= 0) {
        active = count - 1
    } else {
        active = active - 1
    }
   
})