export const APPOINTMENTS_API = {
  appointmentsPatientMe: () => 'appointments/patient/me',
  appointmentsDoctorMe: () => 'appointments/doctor/me',
  appointmentsTimeFree: () => 'appointments/time/free',
  appointments: () => 'appointments',
  appointmentsById: (id:string) => `appointments/${id}`,
  updateAppointmentStatus: (id:string) => `appointments/${id}`,
};
