import React from 'react';
import {
  CancelLink, EditButtons, TitlePanel,
} from './Profile.styles';
import { H1 } from '../../components/CommonStyles/Topography';
import pagesDictionary from '../dictionary/pagesDictionary';
import Button from '../../components/Button/Button';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import EditProfileForm from './EditProfileForm';
import { PATH } from '../../routes/constants';

const ProfileEditMode = () => {
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
            iconUrl="/svgImages/close-icon.svg"
            isBorder
          >
            <CancelLink to={PATH.PROFILE}>{pagesDictionary.resolutionModal.cancelButtonText}</CancelLink>
          </Button>
          <Button
            type="button"
            icon="left"
            size="large"
            variant="primary"
            iconUrl="/svgImages/save-icon.svg"
          >
            {pagesDictionary.resolutionModal.saveButtonText}
          </Button>
        </EditButtons>
      </TitlePanel>
      <EditProfileForm profilePhoto={photo} />
    </>
  );
};

export default ProfileEditMode;
