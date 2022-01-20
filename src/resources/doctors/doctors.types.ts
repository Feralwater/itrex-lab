/* eslint-disable camelcase */
export interface DoctorsBySpecializationId {
  first_name: string
  last_name: string
  id: string
}

export type DoctorsBySpecializationIdResponse = Array<DoctorsBySpecializationId>;
