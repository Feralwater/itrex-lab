import { PATIENTS_API } from 'resources/patients/constants';
import { AllPatients, UpdatePatientData, Users } from 'resources/patients/patients.types';
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
  async updatePatient(id: string, data:UpdatePatientData) {
    return instance.patch<Users>(PATIENTS_API.updatePatient(id), data);
  },
  async deletePatient(id: string) {
    return instance.delete<string>(PATIENTS_API.deletePatient(id));
  },
};

export default patientsAPI;
