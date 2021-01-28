import '../scss/main.scss';
import '../scss/home.scss';
import { checkAlreadyAuthentication } from '../authentication';

const isCheckPass = checkAlreadyAuthentication();
if (isCheckPass) {
  const burger = document.querySelector('#searchAndBurger');
  const topNav = document.querySelector('#topNav');

  burger.addEventListener('click', function () {
    burger.style.display = 'none';
    topNav.style.transform = 'translateX(0%)';
    topNav.style.transitionDuration = '0.5s';
  });

  document.addEventListener('touchmove', touchMove);

  function touchMove(ev) {
    console.log(ev.touches, ev.type);
  }
}
