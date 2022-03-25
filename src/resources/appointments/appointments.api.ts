import {
  AppointmentData,
  AppointmentsForDoctor,
  AppointmentsForPatient,
  FreeTimeResponse,
  NewAppointmentResponse,
} from './appointments.types';
import { APPOINTMENTS_API } from './constants';
import instance from '../../services/api/api';

const appointments = {
  async fetchAppointmentsForPatient(offset:number, limit:number) {
    return instance.get<AppointmentsForPatient>(APPOINTMENTS_API.appointmentsPatientMe(), {
      params: {
        offset,
        limit,
      },
    });
  },
  async fetchAppointmentsForDoctor(offset:number, limit:number, name?:string) {
    return instance.get<AppointmentsForDoctor>(APPOINTMENTS_API.appointmentsDoctorMe(), {
      params: {
        offset,
        limit,
        name,
      },
    });
  },
  async fetchFreeTime(date:string | null, doctorID:string) {
    return instance.get<FreeTimeResponse>(APPOINTMENTS_API.appointmentsTimeFree(), {
      params: {
        date,
        doctorID,
      },
    });
  },
  async addAppointment(data:AppointmentData) {
    return instance.post<NewAppointmentResponse>(APPOINTMENTS_API.appointments(), data);
  },
  async deleteAppointment(id:string) {
    return instance.delete<string>(APPOINTMENTS_API.appointmentsById(id));
  },
};

export default appointments;
