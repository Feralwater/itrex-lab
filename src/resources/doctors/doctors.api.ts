import instance from '../../services/api/api';
import { DoctorsBySpecializationIdResponse } from './doctors.types';
import { DOCTORS_API } from './constants';

const doctors = {
  async fetchDoctorsBySpecializationId(id:string) {
    return instance.get<Array<DoctorsBySpecializationIdResponse>>(DOCTORS_API.doctorsSpecializationById(id));
  },
};

export default doctors;
