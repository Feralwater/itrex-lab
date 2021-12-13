import instance from '../../services/api/api';
import { NewDoctorProfileResponse } from './profile.types';
import { EditProfileData } from '../../pages/Profile/EditProfile.types';
import { PROFILE_API } from './constants';

const profile = {
  async editProfile(data:EditProfileData) {
    return instance.patch<NewDoctorProfileResponse>(PROFILE_API.doctorsMe(), data);
  },
};

export default profile;
