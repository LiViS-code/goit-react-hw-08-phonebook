import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastMsg = (name, type) => {
  let msg = '';
  switch (type) {
    case 'success':
      msg = `${name} was successfully added to contacts`;
      break;
    case 'warn':
      if (name === 'Authorisation Error') {
        msg = `${name}. Check if the data is correct.`;
      } else {
        msg = `${name} is alredy in contacts`;
      }
      break;
    case 'info':
      msg = `${name} removed from contacts`;
      break;
    default:
      break;
  }

  toast[type](msg, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default toastMsg;
