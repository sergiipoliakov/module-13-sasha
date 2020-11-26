import '../../styles.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { loginUser } from '../bookingApi';
import { defaults, alert } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';

const loginFormRef = document.querySelector('#login');
const submitHandler = async event => {
  event.preventDefault();
  
  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });

  console.log(body);

  try {
    const { data } = await loginUser(body);
    localStorage.setItem('token', data.token);
    window.location.href = '/'
  } catch (error) {
    alert({
      text: error.response.data.message,
    })
  }
}

loginFormRef.addEventListener('submit', submitHandler)