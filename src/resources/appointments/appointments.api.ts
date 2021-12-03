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
    return instance.get<AppointmentsForPatient>(`appointments/patient/me?offset=${offset}&limit=${limit}`);
  },
  async getAppointmentsForDoctor(offset:number, limit:number) {
    return instance.get<AppointmentsForDoctor>(`appointments/doctor/me?offset=${offset}&limit=${limit}`);
  },
  async getFreeTime(date:string|null, doctorID:string) {
    return instance.get<FreeTimeResponse>(`appointments/time/free?date=%${date}%&doctorID=${doctorID}`);
  },
  async addAppointment(data:AppointmentData) {
    return instance.post<NewAppointmentResponse>('appointments', data);
  },
};

export default appointments;
