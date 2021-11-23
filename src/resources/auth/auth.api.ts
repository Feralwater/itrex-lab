import instance from '../../services/api/api';
import {
  ProfileResponseType,
  SignInDataType, SignUpDataType, SignUpInResponseType,
} from './auth.types';
import { loginRepository } from '../loginRepository';

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
    if (err.statusCode === 401) {
      // refresh

      // if refresh failed - logout

      // if refresh OK - update\ tokens
    }
  },
);

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
};

export default auth;
