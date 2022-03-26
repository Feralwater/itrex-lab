import { PATIENTS_API } from 'resources/patients/constants';
import { AllPatients } from 'resources/patients/patients.types';
import instance from '../../services/api/api';

const patientsAPI = {
  async fetchAllPatients(offset: number, limit:number) {
    return instance.get<AllPatients>(PATIENTS_API.allPatients(), {
      params: {
        offset,
        limit,
      },
    });
  },
};

export default patientsAPI;
