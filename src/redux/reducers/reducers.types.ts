export type ProfileStateType = {
  id: string
  first_name: string
  last_name: string
  photo: string
  role_name: string
}
export type LoginStateType = {
  accessToken: string
  refreshToken?: string
  status: 'idle' | 'loading' | 'failed' | 'fulfilled'
  id: string
  first_name: string
  last_name: string
  photo: string
  role_name: string
}
export type AppointmentStateType = {
  id: string
  patient_id: string
  doctor_id: string
  visit_date: string
  reason: string
  note: string
  status: string
  responseStatus: 'idle' | 'loading' | 'failed' | 'fulfilled'
}
