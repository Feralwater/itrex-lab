import instance from '../../services/api/api';
import { SignUpDataType, SignUpResponseType } from './auth.types';

const auth = {
  async SignUp(data: SignUpDataType) {
    return instance.post<SignUpResponseType>('auth/registration', {
      userName: data.userName,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  },
};

export default auth;
