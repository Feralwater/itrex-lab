import React from 'react';
import { ROLES } from 'routes/constants';
import { AppointmentCardHeader } from 'components/AppointmentCard/AppointmentCardHeader';
import { AppointmentCardProps } from 'components/AppointmentCard/AppointmentCard.types';
import { ReactComponent as Clock } from '../../assets/svg/clock-icon.svg';
import { ReactComponent as Board } from '../../assets/svg/board-icon.svg';
import { ReactComponent as Heart } from '../../assets/svg/heart-icon.svg';
import {
  SettingsButton,
  UserCard,
  UserCardBody,
  UserCardBodyDescription,
  UserCardBodyDescriptionText,
  UserCardBodyTime,
  UserCardBodyTimeText,
  UserCardHeader,
  UserCardImageContainer,
  UserCardName,
  UserData,
  UserInformation,
} from './AppointmentCard.styles';
import { UserImage } from '../Header/Header.styles';
import { ControlCardPanel } from '../ControlCardPanel';
import { componentsDictionary } from '../dictionary/componentsDictionary';
import { formatVisitTime } from './utils';

export const AppointmentCard = React.forwardRef(({
  photo,
  appointmentID,
  firstName,
  lastName,
  role,
  toggleMenuHandler,
  isCardDescription,
  time,
  reason,
  resolution,
  isMenuOpen,
  setIsMenuOpen,
  menuRef,
  status,
  specialization,
}: AppointmentCardProps, ref) => (
  <UserCard ref={ref as React.RefObject<HTMLDivElement>}>
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
      <div ref={menuRef}>
        {role === ROLES.DOCTOR && <SettingsButton onClick={toggleMenuHandler} />}
        {isMenuOpen && (
        <ControlCardPanel
          appointmentID={appointmentID}
          setIsMenuOpen={setIsMenuOpen}
          resolutionID={resolution?.id}
        />
        )}
      </div>
    </UserCardHeader>
    <UserCardBody>
      <UserCardBodyTime>
        <Clock />
        <UserCardBodyTimeText>{formatVisitTime(time)}</UserCardBodyTimeText>
      </UserCardBodyTime>
      <UserCardBodyDescription isDescription={isCardDescription}>
        {role === ROLES.DOCTOR ? <div><Board /></div> : <div><Heart /></div>}
        {role === ROLES.DOCTOR
          ? <UserCardBodyDescriptionText>{resolution?.resolution}</UserCardBodyDescriptionText>
          : <UserCardBodyDescriptionText>{reason}</UserCardBodyDescriptionText>}
      </UserCardBodyDescription>
    </UserCardBody>
  </UserCard>
));
