import instance from '../../services/api/api';
import { AppointmentsResponseType } from './appointments.types';

const appointments = {
  async getAppointments(offset:number, limit:number) {
    return instance.get<AppointmentsResponseType>(`appointments/patient/me?offset=${offset}&limit=${limit}`);
  },
};

export default appointments;
