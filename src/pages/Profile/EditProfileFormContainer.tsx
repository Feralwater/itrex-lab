import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { profileSlice, selectProfile } from 'redux/reducers';
import { EditProfileForm } from './EditProfileForm';
import { EditProfileData, EditProfileFormContainerProps } from './EditProfile.types';

export const EditProfileFormContainer:React.VFC<EditProfileFormContainerProps> = ({ closeEditModeHandler }) => {
  const dispatch = useAppDispatch();
  const {
    status: fetchStatus, lastName, firstName, photo,
  } = useAppSelector(selectProfile);

  const handleSubmitForm = (values: EditProfileData) => {
    const data = new FormData();
    data.append('firstName', values.firstName);
    data.append('lastName', values.lastName);
    data.append('avatar', values.avatar);
    dispatch(profileSlice.actions.editProfilePending(data));
    closeEditModeHandler();
  };
  const editProfileFormInitialValues = {
    firstName,
    lastName,
    avatar: photo,
  };

  return (
    <EditProfileForm
      closeEditModeHandler={closeEditModeHandler}
      handleSubmitForm={handleSubmitForm}
      status={fetchStatus}
      initialValues={editProfileFormInitialValues}
      profilePhoto={photo}
    />
  );
};
