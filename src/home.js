

const burger = document.querySelector('#SearchAndBurger');
const topNav = document.querySelector('#topNav');

burger.addEventListener('click', function(){


    burger.style.display = 'none';
    topNav.style.transform = 'translateX(0%)';
    topNav.style.transitionDuration = '0.5s';
});

document.addEventListener('touchmove', touchMove);

function touchMove(ev){
    console.log(ev.touches, ev.type)
}

export default main;