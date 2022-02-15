import React from 'react';
import { AppointmentCardHeader } from 'components/AppointmentCard/AppointmentCardHeader';
import { AppointmentCardProps } from 'components/AppointmentCard/AppointmentCard.types';
import { AppointmentCardSettingsButton } from 'components/AppointmentCard/AppointmentCardSettingsButton';
import { ROLES } from 'routes/constants';
import { AppointmentCardDescription } from 'components/AppointmentCard/AppointmentCardDescription';
import { ReactComponent as Clock } from '../../assets/svg/clock-icon.svg';

import {
  UserCard,
  UserCardBody,
  UserCardBodyTime,
  UserCardBodyTimeText,
  UserCardHeader,
  UserCardImageContainer,
  UserCardName,
  UserData,
  UserInformation,
} from './AppointmentCard.styles';
import { UserImage } from '../Header/Header.styles';
import { componentsDictionary } from '../dictionary/componentsDictionary';
import { formatVisitTime } from './utils';

export const AppointmentCard:React.VFC<AppointmentCardProps> = ({
  photo,
  appointmentID,
  firstName,
  lastName,
  role,
  time,
  isMenuOpen,
  setIsMenuOpen,
  menuRef,
  status,
  specialization,
  cardIcon,
  cardDescription,
  resolutionID,
}) => (
  <UserCard>
    <UserCardHeader>
      <UserData>
        <UserCardImageContainer>
          <UserImage src={photo} alt={componentsDictionary.appointmentCard.avatarAlt} />
        </UserCardImageContainer>
        <UserInformation>
          <UserCardName>{`${firstName} ${lastName}`}</UserCardName>
          <AppointmentCardHeader status={status} specialization={specialization} />
        </UserInformation>
      </UserData>
      {role === ROLES.DOCTOR && (
      <AppointmentCardSettingsButton
        appointmentID={appointmentID}
        setIsMenuOpen={setIsMenuOpen}
        resolutionID={resolutionID}
        menuRef={menuRef}
        isMenuOpen={isMenuOpen}
      />
      )}
    </UserCardHeader>
    <UserCardBody>
      <UserCardBodyTime>
        <Clock />
        <UserCardBodyTimeText>{formatVisitTime(time)}</UserCardBodyTimeText>
      </UserCardBodyTime>
      <AppointmentCardDescription
        cardIcon={cardIcon}
        cardDescription={cardDescription}
      />
    </UserCardBody>
  </UserCard>
);
