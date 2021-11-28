// export type RoleName = 'Patient' | 'Doctor' | ''

import { RoleName } from 'redux/reducers/reducers.types';

export type SignUpInResponseType = {
  access_token: string
  refresh_token: string
}

export type SignUpDataType = {
  userName: string
  password: string
  firstName: string
  lastName: string
}

export type SignInDataType = {
  userName: string
  password: string
}

export type ProfileResponseType = {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: RoleName
}
