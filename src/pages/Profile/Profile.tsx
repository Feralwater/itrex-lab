import React, { useState } from 'react';
import { H1, H2, SubTitle } from 'components/CommonStyles/Topography';
import pagesDictionary from '../dictionary/pagesDictionary';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import { Button, ModalWindow } from '../../components';
import {
  EditLink,
  ImageContainer, InfoContainer, ProfileContainer, TitlePanel,
} from './Profile.styles';
import { PATH, ROLES } from '../../routes/constants';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import ChangePasswordModal from './ChangePasswordModal';
import { loginRepository } from '../../resources/loginRepository';
import { profile } from '../../redux/actions';

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
  const [activeChangePasswordModal, setActiveChangePasswordModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const closeModalHandler = () => setActiveChangePasswordModal(true);
  const logoutHandler = () => {
    loginRepository.removeAccessToken();
    loginRepository.removeRefreshToken();
    dispatch(profile.pending({
      first_name: '',
      id: '',
      last_name: '',
      photo: '',
      role_name: ROLES.PUBLIC,
    }));
  };
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
          <EditLink to={PATH.EDIT_PROFILE}>
            <Button
              size="small"
              variant="primary"
              icon="left"
              type="button"
              iconUrl="/svg/pencil-icon.svg"
            >
              {pagesDictionary.profile.editButton}
            </Button>
          </EditLink>
        </div>
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
            onClick={closeModalHandler}
          >
            {pagesDictionary.profile.changePasswordButton}
          </Button>
        </InfoContainer>
      </ProfileContainer>
      <ModalWindow activeModal={activeChangePasswordModal} setActiveModal={setActiveChangePasswordModal}>
        <ChangePasswordModal setActiveChangePasswordModal={setActiveChangePasswordModal} />
      </ModalWindow>
    </>
  );
};
