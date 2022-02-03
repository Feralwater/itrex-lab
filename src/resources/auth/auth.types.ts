/* eslint-disable camelcase */
import { RoleName } from 'redux/reducers/reducers.types';
import { ChangePasswordFulfilled, ChangePasswordPending } from '../../redux/actions.types';

export interface SignUpInResponse {
  access_token: string;
  refresh_token: string;
}

export interface SignUpData {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignInData {
  userName: string;
  password: string;
}

export type ChangePasswordData = ChangePasswordPending;

export interface ProfileResponse {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: RoleName
}

export interface EditProfileResponse extends ProfileResponse {
  specialization_name?: string;
}

export type ChangePasswordResponse = ChangePasswordFulfilled[];

export interface JWTToken {
  name: string;
  exp: number;
  int: number;
}
