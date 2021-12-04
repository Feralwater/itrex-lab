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
