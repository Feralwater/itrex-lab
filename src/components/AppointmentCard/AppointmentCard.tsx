import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Clock } from '../../assets/svg/clock-icon.svg';
import { ReactComponent as Board } from '../../assets/svg/board-icon.svg';
import { ReactComponent as Heart } from '../../assets/svg/heart-icon.svg';

import {
  AppointmentStatus,
  DoctorSpecializationName,
  SettingsButton,
  UserCard,
  UserCardBody,
  UserCardBodyAppointmentConfirm,
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
import { statusColor, statusDescription } from './constants';
import { ControlCardPanel } from '../ControlCardPanel';
import { ROLES } from '../../routes/constants';
import { componentsDictionary } from '../dictionary/componentsDictionary';
import { formatVisitTime } from './utils';
import { AppointmentCardProps } from './AppointmentCard.types';

export const AppointmentCard = React.forwardRef(({
  specialization,
  appointmentID,
  firstName,
  lastName,
  avatar,
  status,
  time,
  role,
  resolution,
  reason,
}: AppointmentCardProps, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement> | undefined;

  function statusOrDoctor() {
    if (role === ROLES.DOCTOR) {
      return (
        <>
          <UserCardBodyAppointmentConfirm color={statusColor[status]} />
          <div>{statusDescription[status]}</div>
        </>
      );
    }
    return <DoctorSpecializationName>{specialization}</DoctorSpecializationName>;
  }

  function isCardDescription() {
    if (role === ROLES.DOCTOR && resolution) {
      return resolution.resolution.length > 0;
    }
    if (role === ROLES.PATIENT && reason) {
      return reason.length > 0;
    }
    return false;
  }

  useEffect(() => {
    const handler = (event:Event) => {
      if (menuRef?.current && !menuRef.current.contains(event.target as Element)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const toggleMenuHandler = () => setIsMenuOpen(!isMenuOpen);

  return (
    <UserCard ref={ref as React.RefObject<HTMLDivElement>}>
      <UserCardHeader>
        <UserData>
          <UserCardImageContainer>
            <UserImage src={avatar} alt={componentsDictionary.appointmentCard.avatarAlt} />
          </UserCardImageContainer>
          <UserInformation>
            <UserCardName>{`${firstName} ${lastName}`}</UserCardName>
            <AppointmentStatus>
              {statusOrDoctor()}
            </AppointmentStatus>
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
        <UserCardBodyDescription isDescription={isCardDescription()}>
          {role === ROLES.DOCTOR ? <div><Board /></div> : <div><Heart /></div>}
          {role === ROLES.DOCTOR
            ? <UserCardBodyDescriptionText>{resolution?.resolution}</UserCardBodyDescriptionText>
            : <UserCardBodyDescriptionText>{reason}</UserCardBodyDescriptionText>}
        </UserCardBodyDescription>
      </UserCardBody>
    </UserCard>
  );
});
