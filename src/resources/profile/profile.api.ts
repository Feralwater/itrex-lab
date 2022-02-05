import instance from '../../services/api/api';
import { PROFILE_API } from './constants';
import { InitEditProfile } from '../../redux/reducers/reducers.types';
import { EditProfileResponse } from '../auth/auth.types';

const profile = {
  async editDoctorProfile(data: FormData | InitEditProfile) {
    return instance.patch<EditProfileResponse>(PROFILE_API.doctorsMe(), data);
  },
  async editPatientProfile(data: FormData | InitEditProfile) {
    return instance.patch<EditProfileResponse>(PROFILE_API.patientsMe(), data);
  },
};

export default profile;
