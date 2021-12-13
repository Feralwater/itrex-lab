/* eslint-disable camelcase */
export interface ResolutionData {
  resolution: string
  appointmentID: string
}

export interface EditResolutionData {
  resolution: string
  resolutionID?: string
}

export interface ResolutionResponse {
  id: string;
  appointment_id: string
  next_appointment_date: string
  resolution: string
}

export interface EditResolutionResponse {
  resolutionID: string
}

export interface Patient {
  last_name: string
  first_name: string
  id: string
  photo: string
}

export interface Doctor extends Patient{
  specialization_name: string
}

export interface ResolutionForDoctor extends ResolutionResponse{
  visit_date: string
  patient: Patient
}

export interface ResolutionForPatient extends ResolutionResponse{
  visit_date: string
  doctor: Doctor
}

export interface ResolutionsResponse {
  resolutions: Array<ResolutionForDoctor>
  total: 0
}

export interface ResolutionsForPatientResponse {
  resolutions: Array<ResolutionForPatient>
  total: 0
}
