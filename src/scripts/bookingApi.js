import axios from 'axios';

const BASE_URL = 'https://apt-booking-api.herokuapp.com';

export const registerUser = userData => {
  const { name, email, password } = userData;

  return axios.post(`${BASE_URL}/users/register`, { name, email, password });
}

export const loginUser = userData => {
  const { email, password } = userData;

  return axios.post(`${BASE_URL}/users/login`, {email, password });
}

export const fetchApartmentsList = () => {
  return axios(`${BASE_URL}/apartments`);
}

export const fetchUserOrders = () => {
  const token = localStorage.getItem('token');

  return axios(`${BASE_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const addOrder = (orderData) => {
  const token = localStorage.getItem('token');
  const { apartmentId } = orderData;
  const body = {
    apartmentId,
    date: new Date().toISOString()
  }
  const headers = {
    Authorization: `Bearer ${token}`
  }

  return axios.post(`${BASE_URL}/orders`, body, { headers });
}
