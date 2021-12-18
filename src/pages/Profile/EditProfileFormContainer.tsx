import React from 'react';
import { EditProfileForm } from './EditProfileForm';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import { selectEditPatientProfile } from '../../redux/reducers/editPatientProfile.reducer';
import { selectProfile } from '../../redux/reducers';
import { EditProfileData } from './EditProfile.types';
import { ROLES } from '../../routes/constants';
import { editPatientProfile, editProfile } from '../../redux/actions';

export const EditProfileFormContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const {
    status: doctorFetchStatus, lastName: newDoctorLastName, firstName: newDoctorFirstName, photo: newDoctorPhoto,
  } = useAppSelector(selectEditProfile);
  const {
    status: patientFetchStatus, lastName: newPatientLastName, firstName: newPatientFirstName, photo: newPatientPhoto,
  } = useAppSelector(selectEditPatientProfile);
  const {
    photo, firstName, lastName, roleName,
  } = useAppSelector(selectProfile);

  const handleSubmitForm = (values: EditProfileData) => {
    const data = new FormData();
    data.append('firstName', values.firstName);
    data.append('lastName', values.lastName);
    data.append('avatar', values.avatar);
    if (roleName === ROLES.DOCTOR) {
      dispatch(editProfile.pending(data));
    }
    if (roleName === ROLES.PATIENT) {
      dispatch(editPatientProfile.pending(data));
    }
  };
  const initialValuesForDoctorEditProfile = {
    firstName: newDoctorFirstName || firstName,
    lastName: newDoctorLastName || lastName,
    avatar: '',
  };
  const initialValuesForPatientEditProfile = {
    firstName: newPatientFirstName || firstName,
    lastName: newPatientLastName || lastName,
    avatar: '',
  };
  const fetchStatus = roleName === ROLES.DOCTOR ? doctorFetchStatus : patientFetchStatus;
  const editProfileFormInitialValues = roleName === ROLES.DOCTOR ? initialValuesForDoctorEditProfile : initialValuesForPatientEditProfile;
  const profilePhoto = roleName === ROLES.DOCTOR ? (newDoctorPhoto || photo) : (newPatientPhoto || photo);
  return (
    <EditProfileForm
      handleSubmitForm={handleSubmitForm}
      status={fetchStatus}
      initialValues={editProfileFormInitialValues}
      profilePhoto={profilePhoto}
    />
  );
};
