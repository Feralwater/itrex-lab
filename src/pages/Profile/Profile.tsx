import React, { useRef } from 'react';
import { H1, H2, SubTitle } from 'components/CommonStyles/Topography';
import { Button, ModalWindow, OpenCloseHandle } from 'components';
import { dictionary as pagesDictionary } from '../dictionary/pagesDictionary';
import {
  ImageContainer, InfoContainer, ProfileContainer, TitlePanel,
} from './Profile.styles';
import { ProfileProps } from './EditProfile.types';
import { ChangePasswordModal } from '..';

export const Profile: React.VFC<ProfileProps> = ({
  roleName,
  firstName,
  lastName,
  photo,
  logoutHandler,
  openEditModeHandler,
}) => {
  const modal = useRef<OpenCloseHandle>(null);
  const openModalHandler = () => modal.current?.open();

  return (
    <>
      <TitlePanel>
        <H1>{pagesDictionary.profile.pageTitle}</H1>
        <div>
          <Button
            size="small"
            variant="primary"
            icon="left"
            type="button"
            iconUrl="/svg/exit.svg"
            onClick={logoutHandler}
          >
            logout
          </Button>
          {' '}
          <Button
            size="small"
            variant="primary"
            icon="left"
            type="button"
            iconUrl="/svg/pencil-icon.svg"
            onClick={openEditModeHandler}
          >
            {pagesDictionary.profile.editButton}
          </Button>
        </div>
      </TitlePanel>
      <ProfileContainer>
        <ImageContainer>
          <img src={photo} alt={pagesDictionary.profile.photoAlt} />
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
            iconUrl="/svg/lock.svg"
            isBorder
            onClick={openModalHandler}
          >
            {pagesDictionary.profile.changePasswordButton}
          </Button>
        </InfoContainer>
      </ProfileContainer>
      <ModalWindow ref={modal}>
        <ChangePasswordModal ref={modal} />
      </ModalWindow>
    </>
  );
};
