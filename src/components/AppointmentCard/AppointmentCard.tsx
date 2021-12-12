import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Clock } from '../../assets/svgImages/clock-icon.svg';
import { ReactComponent as Board } from '../../assets/svgImages/board-icon.svg';
import { ReactComponent as Heart } from '../../assets/svgImages/heart-icon.svg';

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
import { AppointmentCardProps } from './AppointmentCard.types';
import ControlCardPanel from '../ControlCardPanel/ControlCardPanel';
import { ROLES } from '../../routes/constants';
import componentsDictionary from '../dictionary/componentsDictionary';
import { formatVisitTime } from './utils';
import { useAppSelector } from '../../hooks';
import { selectResolutions } from '../../redux/reducers';

export const AppointmentCard: React.VFC<AppointmentCardProps> = ({
  specialization,
  appointmentID,
  firstName,
  lastName,
  avatar,
  status,
  time,
  role,
  reason,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { resolutions: doctorsResolutions } = useAppSelector(selectResolutions);
  const resolution = doctorsResolutions?.find((res) => res.appointment_id === appointmentID);
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
    const handler = (event:any) => {
      if (menuRef?.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <UserCard>
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
          {role === ROLES.DOCTOR && <SettingsButton onClick={() => setIsMenuOpen(!isMenuOpen)} />}
          {isMenuOpen && (<ControlCardPanel appointmentID={appointmentID} setIsMenuOpen={setIsMenuOpen} />)}
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
};
