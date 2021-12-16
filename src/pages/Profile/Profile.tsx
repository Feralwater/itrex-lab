import React from 'react';
import { H1, H2, SubTitle } from 'components/CommonStyles/Topography';
import pagesDictionary from '../dictionary/pagesDictionary';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import { Button } from '../../components';
import {
  EditLink,
  ImageContainer, InfoContainer, ProfileContainer, TitlePanel,
} from './Profile.styles';
import { PATH } from '../../routes/constants';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';

export const Profile: React.VFC = () => {
  const {
    firstName: editFirstName,
    lastName: editLastName,
    photo: editPhoto,
  } = useAppSelector(selectEditProfile);
  const {
    firstName,
    lastName,
    roleName,
    photo,
  } = useAppSelector(selectProfile);
  return (
    <>
      <TitlePanel>
        <H1>{pagesDictionary.profile.pageTitle}</H1>
        <EditLink to={PATH.EDIT_PROFILE}>
          <Button
            size="small"
            variant="primary"
            icon="left"
            type="button"
            iconUrl="svg/pencil-icon.svg"
          >
            {pagesDictionary.profile.editButton}
          </Button>
        </EditLink>
      </TitlePanel>
      <ProfileContainer>
        <ImageContainer>
          <img src={editPhoto || photo} alt={pagesDictionary.profile.avatarAlt} />
        </ImageContainer>
        <InfoContainer>
          <div>
            <H2>{`${editFirstName || firstName} ${editLastName || lastName}`}</H2>
            <SubTitle>{roleName}</SubTitle>
          </div>
          <Button
            size="large"
            variant="secondary"
            icon="left"
            type="button"
            iconUrl="/svg/lock.svg"
            isBorder
          >
            {pagesDictionary.profile.changePasswordButton}
          </Button>
        </InfoContainer>
      </ProfileContainer>
    </>
  );
};
