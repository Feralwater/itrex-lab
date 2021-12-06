import jwt from 'jwt-decode';
import instance from '../../services/api/api';
import {
  JWTToken,
  ProfileResponseType,
  SignInData, SignUpData, SignUpInResponseType,
} from './auth.types';
import { loginRepository } from '../loginRepository';

const auth = {
  async SignUp(data: SignUpData) {
    return instance.post<SignUpInResponseType>('auth/registration', data);
  },

  async SignIn(data:SignInData) {
    return instance.post<SignUpInResponseType>('auth/login', data);
  },

  async getMe() {
    return instance.get<ProfileResponseType>('auth/profile');
  },
  async refreshToken() {
    return instance.post<SignUpInResponseType>('auth/token/refresh');
  },
};

instance.interceptors.request.use(
  async (request) => {
    let token = loginRepository.getAccessToken();
    const refreshToken = loginRepository.getRefreshToken();
    if (token && refreshToken) {
      const expiryDate: Date = new Date(jwt<JWTToken>(token).exp * 1000);
      if (expiryDate < new Date()) {
        loginRepository.setAccessToken(refreshToken);
        const { data } = await auth.refreshToken();
        loginRepository.setAccessToken(data.access_token);
        token = data.access_token;
        loginRepository.setRefreshToken(data.refresh_token);
      }
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return request;
  },
);

instance.interceptors.response.use(
  (response) => response,
  async (e) => {
    if (e.statusCode === 403) {
      const response = await auth.refreshToken();
      if (!response?.data) {
        loginRepository.removeAccessToken();
      } else {
        const {
          access_token,
          refresh_token,
        } = response.data;
        loginRepository.setAccessToken(access_token);
        loginRepository.setRefreshToken(refresh_token);
      }
    }
    throw e;
  },
);

export default auth;
