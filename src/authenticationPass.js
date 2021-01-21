import axios from 'axios';

function main() {
  const inpPassVal = document.querySelector('#inputPassword');
  const confButt = document.querySelector('#confirm');

  confButt.addEventListener('click', function () {
    axios
      .post('http://localhost:8001/authenticationPassword', {
        password: 'haslo',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export default main;
