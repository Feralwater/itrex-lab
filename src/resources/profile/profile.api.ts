import instance from '../../services/api/api';
import { NewDoctorProfileResponse, NewPatientProfileResponse } from './profile.types';
import { PROFILE_API } from './constants';

const profile = {
  async editProfile(data: FormData) {
    return instance.patch<NewDoctorProfileResponse>(PROFILE_API.doctorsMe(), data);
  },
  async editPatientProfile(data: FormData) {
    return instance.patch<NewPatientProfileResponse>(PROFILE_API.patientsMe(), data);
  },
};

export default profile;
