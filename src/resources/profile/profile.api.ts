import instance from '../../services/api/api';
import { NewProfileResponse } from './profile.types';
import { PROFILE_API } from './constants';

const profile = {
  async editDoctorProfile(data: FormData) {
    return instance.patch<NewProfileResponse>(PROFILE_API.doctorsMe(), data);
  },
  async editPatientProfile(data: FormData) {
    return instance.patch<NewProfileResponse>(PROFILE_API.patientsMe(), data);
  },
};

export default profile;
