import instance from '../../services/api/api';
import { DoctorsBySpecializationIdResponseType } from './doctors.types';

const doctors = {
  async getDoctorsBySpecializationId(id:string) {
    return instance.get<Array<DoctorsBySpecializationIdResponseType>>(`doctors/specialization/${id}`);
  },
};

export default doctors;
