import React from 'react';
import {
  CancelLink, EditButtons, TitlePanel,
} from './Profile.styles';
import { H1, Button } from '../../components';
import pagesDictionary from '../dictionary/pagesDictionary';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import { EditProfileForm } from './EditProfileForm';
import { PATH } from '../../routes/constants';

export const ProfileEditMode = () => {
  const { photo } = useAppSelector(selectProfile);
  return (
    <>
      <TitlePanel>
        <H1>{pagesDictionary.profile.pageTitle}</H1>
        <EditButtons>
          <Button
            type="button"
            icon="left"
            size="large"
            variant="secondary"
            iconUrl="/svg/close-icon.svg"
            isBorder
          >
            <CancelLink to={PATH.PROFILE}>{pagesDictionary.resolutionModal.cancelButtonText}</CancelLink>
          </Button>
          <Button
            type="button"
            icon="left"
            size="large"
            variant="primary"
            iconUrl="/svg/save-icon.svg"
          >
            {pagesDictionary.resolutionModal.saveButtonText}
          </Button>
        </EditButtons>
      </TitlePanel>
      <EditProfileForm profilePhoto={photo} />
    </>
  );
};
