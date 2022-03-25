import instance from '../../services/api/api';
import { AllDoctors, DoctorsBySpecializationIdResponse } from './doctors.types';
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
};

export default doctors;
