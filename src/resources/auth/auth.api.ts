import instance from '../../services/api/api';
import {
  ProfileResponseType,
  SignInDataType, SignUpDataType, SignUpInResponseType,
} from './auth.types';
import { loginRepository } from '../loginRepository';

const auth = {
  async SignUp(data: SignUpDataType) {
    return instance.post<SignUpInResponseType>('auth/registration', data);
  },
  async SignIn(data:SignInDataType) {
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
  async (err) => {
    if (err.statusCode === 401) {
      const response = await auth.refreshToken();
      if (!response.data) {
        // kill token and redirect
      }
      // const { refreshToken, token } = response.data;

      // set tokens;

      // refresh

      // if refresh failed - logout

      // if refresh OK - update\ tokens
    }
    return 'jhghjg';
  },
);

export default auth;
