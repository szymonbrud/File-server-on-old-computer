import axios from 'axios';

import { APILink } from './assets/settings';

export const checkAlreadyAuthentication = () => {
  const authorizationScreen = '<div class="authViewContainer"><p>authorization...</p></div>';

  document.body.insertAdjacentHTML('beforeend', authorizationScreen);

  const authKey = localStorage.getItem('authKey');
  if (authKey) {
    if (window.location.pathname === '/dist/' && window.location.pathname === '/dist/index.html') {
      window.location.pathname = '/dist/home.html';
    } else {
      document.querySelector('.authViewContainer').style.display = 'none';
      return true;
    }
  } else {
    if (window.location.pathname !== '/dist/' && window.location.pathname !== '/dist/index.html') {
      window.location.pathname = '/dist/index.html';
    } else {
      document.querySelector('.authViewContainer').style.display = 'none';
      return true;
    }
  }
};

function authentication() {
  const inpPassVal = document.querySelector('#inputPassword');
  const confButt = document.querySelector('#confirm');

  confButt.addEventListener('click', function () {
    axios
      .post(`${APILink}/authenticationPassword`, {
        password: inpPassVal.value,
      })
      .then(function (response) {
        if (response.data.auth) {
          localStorage.setItem('authKey', response.data.key);
          window.location.pathname = '/dist/home.html';
        } else {
          const wrongPass = document.querySelector('#wrongPass');
          inpPassVal.style.border = '2px solid #E2273D';
          wrongPass.style.display = 'block';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export default authentication;
