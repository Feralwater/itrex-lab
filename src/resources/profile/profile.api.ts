import instance from '../../services/api/api';
import { NewProfileResponse } from './profile.types';
import { PROFILE_API } from './constants';
import { InitEditProfile } from '../../redux/reducers/reducers.types';

const profile = {
  async editDoctorProfile(data: FormData | InitEditProfile) {
    return instance.patch<NewProfileResponse>(PROFILE_API.doctorsMe(), data);
  },
  async editPatientProfile(data: FormData | InitEditProfile) {
    return instance.patch<NewProfileResponse>(PROFILE_API.patientsMe(), data);
  },
};

export default profile;
