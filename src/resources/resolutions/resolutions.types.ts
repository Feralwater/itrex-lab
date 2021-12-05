export interface ResolutionData {
  resolution: string;
  appointmentID: string;
}

export interface ResolutionResponse {
  appointment_id: string;
  next_appointment_date: string;
  resolution: string;
  id: string;
}

export interface Patient{
  last_name: string,
  first_name: string,
  id: string,
  photo: string
}

export interface ResolutionForDoctor{
  id: string;
  appointment_id: string;
  next_appointment_date: string;
  resolution: string;
  visit_date: string;
  patient: Patient;
}

export interface ResolutionsResponse{
  resolutions: Array<ResolutionForDoctor>
  total: 0
}
