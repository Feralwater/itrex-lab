import instance from '../../services/api/api';
import { NewDoctorProfileResponse } from './profile.types';
import { PROFILE_API } from './constants';

const profile = {
  async editProfile(data: FormData) {
    return instance.patch<NewDoctorProfileResponse>(PROFILE_API.doctorsMe(), data);
  },
};

export default profile;
