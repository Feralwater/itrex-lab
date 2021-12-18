/* eslint-disable camelcase */
export interface NewPatientProfileResponse {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: string,
}

export interface NewDoctorProfileResponse extends NewPatientProfileResponse{
  specialization_name: string
}
