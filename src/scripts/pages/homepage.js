import '../../styles.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert, success } from '@pnotify/core';
import { fetchApartmentsList, addOrder } from '../bookingApi';
import apartmentsListTemplate from '../../templates/apartmentsList.hbs';

defaults.styling = 'material';
defaults.icons = 'material';


const apartmentsRef = document.querySelector('.apartments');

const handleBookApartment = async event => {
  const { target } = event;

  if(!target.classList.contains('apartments-item__btn')) return;

  const apartmentId = target.dataset.id;
  try {
    await addOrder({ apartmentId });
    success(
      {
        text: 'Booked'
      }
    )
  } catch (error) {
    alert({
      text: error.response.data.message,
    });
  }
}

const renderApartmentsList = async () => {
  try {
    const response = await fetchApartmentsList();
    const { data } = response;

    apartmentsRef.innerHTML = apartmentsListTemplate(data);
  } catch (error) {
    alert({
      text: error.response.data.message,
    });
  }
};

apartmentsRef.addEventListener('click', handleBookApartment)
const token = localStorage.getItem('token');

if(token) {
  renderApartmentsList()
} else {
  window.location.href = '/registration.html'
}
