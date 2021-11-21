import instance from '../../services/api/api';
import {
  ProfileResponseType,
  SignInDataType, SignUpDataType, SignUpInResponseType,
} from './auth.types';

const auth = {
  async SignUp(data: SignUpDataType) {
    return instance.post<SignUpInResponseType>('auth/registration', {
      userName: data.userName,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  },
  async SignIn(data:SignInDataType) {
    return instance.post<SignUpInResponseType>('auth/login', { userName: data.userName, password: data.password });
  },
  async getProfile() {
    return instance.get<ProfileResponseType>('auth/profile');
  },
};

export default auth;
