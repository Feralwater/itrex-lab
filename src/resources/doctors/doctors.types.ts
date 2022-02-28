/* eslint-disable camelcase */
import { Users } from 'resources/patients/patients.types';

export interface DoctorsBySpecializationId {
  first_name: string
  last_name: string
  id: string
}

export type DoctorsBySpecializationIdResponse = Array<DoctorsBySpecializationId>;

export interface Doctors extends Users {
  specialization_name: string
}

export interface AllDoctors {
  users: Doctors[]
  total: number
}
