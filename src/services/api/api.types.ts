export type SignUpResponseType = {
  access_token: string
  refresh_token: string
}

export type SignUpDataType = {
  userName: string
  password: string
  firstName: string
  lastName: string
}

export type AppointmentType = {
  id: 'string',
  reason: 'string',
  note: 'string',
  patient_id: 'string',
  doctor_id: 'string',
  visit_date: 'string',
  status: 'string',
  doctor: {
    last_name: 'string',
    first_name: 'string',
    id: 'string',
    photo: 'string',
    specialization_name: 'string',
  }
}

export type AppointmentsResponseType = {
  appointments: Array<AppointmentType>,
  total: number
}
