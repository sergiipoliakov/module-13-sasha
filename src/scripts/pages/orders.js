import '../../styles.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';
import { fetchUserOrders } from '../bookingApi';
import apartmentsListTemplate from '../../templates/apartmentsList.hbs';

defaults.styling = 'material';
defaults.icons = 'material';

const apartmentsListRef = document.querySelector('.apartments');
const renderUserOrders = async () => {
  try {
    const { data } = await fetchUserOrders();
    const apartments = data.map(item => item.apartment);

    apartmentsListRef.innerHTML = apartmentsListTemplate(apartments)
    console.log(data);
  } catch (error) {
    alert({ text: error.message })
  }
}

renderUserOrders()