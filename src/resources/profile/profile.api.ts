import instance from '../../services/api/api';
import { PROFILE_API } from './constants';
import { EditProfileResponse } from '../auth/auth.types';

const profile = {
  async editDoctorProfile(data: FormData) {
    return instance.patch<EditProfileResponse>(PROFILE_API.doctorsMe(), data);
  },
  async editPatientProfile(data: FormData) {
    return instance.patch<EditProfileResponse>(PROFILE_API.patientsMe(), data);
  },
};

export default profile;
