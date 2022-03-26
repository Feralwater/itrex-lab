/* eslint-disable camelcase */
import { RoleName } from 'redux/reducers/reducers.types';

export interface Users {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: RoleName
}
export interface AllPatients {
  users: Users[]
  total: number
}
