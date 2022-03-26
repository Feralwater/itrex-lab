import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { profileSlice, selectProfile } from 'redux/reducers';
import { EditProfileForm } from './EditProfileForm';
import { EditProfileData, EditProfileFormContainerProps } from './EditProfile.types';

export const EditProfileFormContainer:React.VFC<EditProfileFormContainerProps> = ({ closeEditModeHandler }) => {
  const dispatch = useAppDispatch();
  const {
    status, lastName, firstName, photo,
  } = useAppSelector(selectProfile);

  const handleSubmitForm = useCallback((values: EditProfileData) => {
    const data = new FormData();
    data.append('firstName', values.firstName);
    data.append('lastName', values.lastName);
    data.append('avatar', values.photo);
    dispatch(profileSlice.actions.editProfilePending(data));
    closeEditModeHandler();
  }, []);
  const editProfileFormInitialValues = {
    firstName,
    lastName,
    avatar: photo,
  };
  };
  const editProfileFormInitialValues = { firstName, lastName, photo };

  return (
    <EditProfileForm
      closeEditModeHandler={closeEditModeHandler}
      handleSubmitForm={handleSubmitForm}
      status={status}
      initialValues={editProfileFormInitialValues}
      profilePhoto={photo}
    />
  );
};
