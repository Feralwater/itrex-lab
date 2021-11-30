import instance from '../../services/api/api';
import {
  ProfileResponseType,
  SignInData, SignUpData, SignUpInResponseType,
} from './auth.types';
import { loginRepository } from '../loginRepository';

const auth = {
  async SignUp(data: SignUpData) {
    return instance.post<SignUpInResponseType>('auth/registration', data);
  },

  async SignIn(data:SignInData) {
    try {
      return instance.post<SignUpInResponseType>('auth/login', data);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw (e);
    }
  },

  async getMe() {
    try {
      return instance.get<ProfileResponseType>('auth/profile');
    } catch (e) {
      console.log(JSON.stringify(e));
      throw (e);
    }
  },
  async refreshToken() {
    return instance.post<SignUpInResponseType>('auth/token/refresh');
  },
};

instance.interceptors.request.use(
  (request) => {
    const token = loginRepository.getAccessToken();
    if (token) {
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return request;
  },
  (err) => {
    if (err.statusCode === 403) {
      // const response =  auth.refreshToken();
      // if (!response.data) {
      //   loginRepository.removeAccessToken();
      //   // kill token and redirect
      // } else {
      //   const {
      //     refresh_token,
      //     access_token,
      //   } = response.data;
      //   loginRepository.setAccessToken(access_token);
      //   loginRepository.setRefreshToken(refresh_token);
    }

    return 'jhghjg';
  },
);

instance.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-unused-vars
    console.log(JSON.stringify(response));
    return response;
  },
  async (e) => {
    // if (e.statusCode === 403) {
    //   const response = await auth.refreshToken();
    //   if (!response?.data) {
    //     loginRepository.removeAccessToken();
    //     // kill token and redirect
    //   } else {
    //     const {
    //       refresh_token,
    //       access_token,
    //     } = response.data;
    //     loginRepository.setAccessToken(access_token);
    //     loginRepository.setRefreshToken(refresh_token);
    //   }
    //   // Any status codes that falls outside the range of 2xx cause this function to trigger
    //   // Do something with response error
    // }
    console.log(JSON.stringify(e));
    throw e;
  },
);

export default auth;
