import instance from '../../services/api/api';
import {
  AppointmentDataType,
  AppointmentsResponseType,
  FreeTimeResponseType,
  NewAppointmentResponseType,
} from './appointments.types';

const appointments = {
  async getAppointments(offset:number, limit:number) {
    return instance.get<AppointmentsResponseType>(`appointments/patient/me?offset=${offset}&limit=${limit}`);
  },
  async getFreeTime(date:string|null, doctorID:string) {
    return instance.get<FreeTimeResponseType>(`appointments/time/free?date=%${date}%&doctorID=${doctorID}`);
  },
  async addAppointments(data:AppointmentDataType) {
    return instance.post<NewAppointmentResponseType>('appointments', data);
  },
};

export default appointments;
