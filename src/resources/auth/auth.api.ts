import jwt from 'jwt-decode';
import instance from '../../services/api/api';
import {
  JWTToken,
  ProfileResponse,
  SignInData, SignUpData, SignUpInResponse,
} from './auth.types';
import { loginRepository } from '../loginRepository';
import { AUTH_API } from './constants';

const auth = {
  async SignUp(data: SignUpData) {
    return instance.post<SignUpInResponse>(AUTH_API.authRegistration(), data);
  },

  async SignIn(data:SignInData) {
    return instance.post<SignUpInResponse>(AUTH_API.authLogin(), data);
  },

  async getMe() {
    return instance.get<ProfileResponse>(AUTH_API.authProfile());
  },
  async refreshToken() {
    return instance.post<SignUpInResponse>(AUTH_API.authTokenRefresh());
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
        'content-type': 'multipart/form-data',
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
          access_token: accessToken,
          refresh_token: refreshToken,
        } = response.data;
        loginRepository.setAccessToken(accessToken);
        loginRepository.setRefreshToken(refreshToken);
      }
    }
    throw e;
  },
);

export default auth;
