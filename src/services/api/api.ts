import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
  headers: {
    Authorization: localStorage.getItem('access_token') ?? '',
  },
});

export default instance;
