import axios from 'axios';
import { CommonResponseType, SignUpDataType } from './api.types';

const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

const apiClient = {
  SignUp(data:SignUpDataType) {
    return instance.post<CommonResponseType>('auth/registration', {
      userName: data.userName,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    }).then((res) => console.log(res.data));
  },
};

export default apiClient;
