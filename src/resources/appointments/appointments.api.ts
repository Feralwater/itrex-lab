import instance from '../../services/api/api';
import { AppointmentsResponseType, FreeTimeResponseType } from './appointments.types';

const appointments = {
  async getAppointments(offset:number, limit:number) {
    return instance.get<AppointmentsResponseType>(`appointments/patient/me?offset=${offset}&limit=${limit}`);
  },
  async getFreeTime(date:string, doctorID:string) {
    return instance.get<FreeTimeResponseType>(`appointments/time/free?date=%${date}%&doctorID=${doctorID}`);
  },
};

export default appointments;
