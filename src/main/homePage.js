import '../scss/main.scss';
import { checkAlreadyAuthentication } from '../authentication';

const isCheckPass = checkAlreadyAuthentication();
if (isCheckPass) {
}
