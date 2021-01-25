import axios from 'axios';

function main() {
  const inpPassVal = document.querySelector('#inputPassword');
  const confButt = document.querySelector('#confirm');

  confButt.addEventListener('click', function () {
    axios
      .post('http://localhost:8001/authenticationPassword', {
        password: inpPassVal.value,
      })
      .then(function (response) {
        console.log(response.data.auth)

       
        if(response.data.auth)
        {
          
        }
        else{
          const wrongPass = document.querySelector('#wrongPass');
          inpPassVal.style.border = '2px solid #E2273D';
          wrongPass.style.display = 'block';
        }

      })
      .catch(function (error) {
        console.log(error)
       
      });
    
  });
}

export default main;
