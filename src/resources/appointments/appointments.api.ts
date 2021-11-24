import instance from '../../services/api/api';
import { AppointmentsResponseType, FreeTimeResponseType, NewAppointmentResponseType } from './appointments.types';

const appointments = {
  async getAppointments(offset:number, limit:number) {
    return instance.get<AppointmentsResponseType>(`appointments/patient/me?offset=${offset}&limit=${limit}`);
  },
  async getFreeTime(date:string|null, doctorID:string) {
    return instance.get<FreeTimeResponseType>(`appointments/time/free?date=%${date}%&doctorID=${doctorID}`);
  },
  async addAppointments(
    date: string,
    reason: string,
    note: string,
    doctorID: string,
  ) {
    return instance.post<NewAppointmentResponseType>('appointments', {
      date, reason, note, doctorID,
    });
  },
};

export default appointments;
