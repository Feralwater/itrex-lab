import { PATIENTS_API } from 'resources/patients/constants';
import instance from '../../services/api/api';
import {
  AllDoctors, Doctors, DoctorsBySpecializationIdResponse, UpdateDoctorData,
} from './doctors.types';
import { DOCTORS_API } from './constants';

const doctors = {
  async fetchDoctorsBySpecializationId(id:string) {
    return instance.get<Array<DoctorsBySpecializationIdResponse>>(DOCTORS_API.doctorsSpecializationById(id));
  },
  async fetchAllDoctors(offset: number, limit:number) {
    return instance.get<AllDoctors>(DOCTORS_API.allDoctors(), {
      params: {
        offset,
        limit,
      },
    });
  },
  async updateDoctor(id: string, data:UpdateDoctorData) {
    return instance.patch<Doctors>(PATIENTS_API.updatePatient(id), data);
  },
};

export default doctors;
