import '../scss/main.scss';
import '../scss/home.scss';
import { checkAlreadyAuthentication } from '../authentication';

const isCheckPass = checkAlreadyAuthentication();
if (isCheckPass) {
  const burger = document.querySelector('#searchAndBurger');
  const topNav = document.querySelector('#topNav');
  const conHome = document.querySelector('#containerhome');
  const back = document.querySelector('#back');

  burger.addEventListener('click', function () {
    burger.style.display = 'none';
    topNav.style.transform = 'translateX(0%)';
    topNav.style.transitionDuration = '0.5s';
    back.style.transform = 'translateX(150%)';
    back.style.transitionDuration = '0.5s';
  });
  back.addEventListener('click', () => {
    burger.style.display = 'block';
    topNav.style.transform = 'translateX(-100%)';
    topNav.style.transitionDuration = '0.5s';
    back.style.transform = 'translateX(-100%)';
    back.style.transitionDuration = '0.5s';
  });
}
