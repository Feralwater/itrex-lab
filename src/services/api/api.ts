import axios from 'axios';
import { AppointmentsResponseType, SignUpDataType, SignUpResponseType } from './api.types';

const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
  headers: {
    Authorization: localStorage.getItem('access_token') ?? '',
  },
});

const apiClient = {
  async SignUp(data: SignUpDataType) {
    return instance.post<SignUpResponseType>('auth/registration', {
      userName: data.userName,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  },
  async getAppointments(offset:number, limit:number) {
    return instance.get<AppointmentsResponseType>(`appointments/patient/me?offset=${offset}&limit=${limit}`);
  },
};

export default apiClient;
