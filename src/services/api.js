import axios from 'axios';

const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com',
});

export default api;
