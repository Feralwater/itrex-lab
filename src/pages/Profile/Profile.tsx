import React from 'react';
import { H1, H2, SubTitle } from 'components/CommonStyles/Topography';
import pagesDictionary from '../dictionary/pagesDictionary';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import Button from '../../components/Button/Button';
import {
  EditLink,
  ImageContainer, InfoContainer, ProfileContainer, TitlePanel,
} from './Profile.styles';
import { PATH } from '../../routes/constants';

const Profile: React.VFC = () => {
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
        <Button
          size="small"
          variant="primary"
          icon="left"
          type="button"
          iconUrl="svgImages/pencil-icon.svg"
        >
          <EditLink to={PATH.EDIT_DOCTOR_PROFILE}>
            {pagesDictionary.profile.editButton}
          </EditLink>
        </Button>
      </TitlePanel>
      <ProfileContainer>
        <ImageContainer>
          <img src={photo} alt={pagesDictionary.profile.avatarAlt} />
        </ImageContainer>
        <InfoContainer>
          <div>
            <H2>{`${firstName} ${lastName}`}</H2>
            <SubTitle>{roleName}</SubTitle>
          </div>
          <Button
            size="large"
            variant="secondary"
            icon="left"
            type="button"
            iconUrl="/svgImages/lock.svg"
            isBorder
          >
            {pagesDictionary.profile.changePasswordButton}
          </Button>
        </InfoContainer>
      </ProfileContainer>
    </>
  );
};

export default Profile;
