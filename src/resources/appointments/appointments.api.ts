import instance from '../../services/api/api';
import {
  AppointmentData,
  AppointmentsForDoctor,
  AppointmentsForPatient,
  FreeTimeResponse,
  NewAppointmentResponse,
} from './appointments.types';

const appointments = {
  async getAppointmentsForPatient(offset:number, limit:number) {
    return instance.get<AppointmentsForPatient>('appointments/patient/me', {
      params: {
        offset,
        limit,
      },
    });
  },
  async getAppointmentsForDoctor(offset:number, limit:number) {
    return instance.get<AppointmentsForDoctor>('appointments/doctor/me', {
      params: {
        offset,
        limit,
      },
    });
  },
  async getFreeTime(date:string|null, doctorID:string) {
    return instance.get<FreeTimeResponse>('appointments/time/free', {
      params: {
        date,
        doctorID,
      },
    });
  },
  async addAppointment(data:AppointmentData) {
    return instance.post<NewAppointmentResponse>('appointments', data);
  },
  async deleteAppointment(id:string) {
    return instance.delete<string>(`appointments/${id}`);
  },
};

export default appointments;
