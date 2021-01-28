import '../scss/main.scss';
import authentication, { checkAlreadyAuthentication } from '../authentication';

const isCheckPass = checkAlreadyAuthentication();
if (isCheckPass) {
  authentication();
}
