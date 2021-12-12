import instance from '../../services/api/api';
import { NewDoctorProfileResponse } from './profile.types';
import { EditProfileData } from '../../pages/Profile/EditProfile.types';

const profile = {
  async editProfile(data:EditProfileData) {
    return instance.patch<NewDoctorProfileResponse>('doctors/me', data);
  },
};

export default profile;
