import instance from '../../services/api/api';
import { DoctorsBySpecializationIdResponse } from './doctors.types';

const doctors = {
  async getDoctorsBySpecializationId(id:string) {
    return instance.get<Array<DoctorsBySpecializationIdResponse>>(`doctors/specialization/${id}`);
  },
};

export default doctors;
