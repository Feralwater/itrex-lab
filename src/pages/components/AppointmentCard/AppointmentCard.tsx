import React, { useEffect, useRef, useState } from 'react';
import { add, format } from 'date-fns';
import { ReactComponent as Clock } from '../../../assets/svgImages/clock-icon.svg';
import { ReactComponent as Board } from '../../../assets/svgImages/board-icon.svg';
import { ReactComponent as Heart } from '../../../assets/svgImages/heart-icon.svg';

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
import { UserImage } from '../../../components/Header/Header.styles';
import { statusColor, statusDescription } from './const';
import { AppointmentCardProps } from './AppointmentCard.types';
import ControlCardPanel from '../ControlCardPanel/ControlCardPanel';

const AppointmentCard: React.VFC<AppointmentCardProps> = ({
  specialization,
  appointmentID,
  firstName,
  lastName,
  avatar,
  status,
  time,
  role,
  reason,
  doctorsResolutions,
}) => {
  function statusOrDoctor() {
    if (role === 'DOCTOR') {
      return (
        <>
          <UserCardBodyAppointmentConfirm color={statusColor[status]} />
          <div>{statusDescription[status]}</div>
        </>
      );
    }
    return <DoctorSpecializationName>{specialization}</DoctorSpecializationName>;
  }

  function formatVisitTime(timeBeforeFormat: string) {
    const endVisitDate = add(new Date(timeBeforeFormat), { hours: 1 });
    const endVisitHour = format(new Date(endVisitDate), 'h');
    return format(new Date(timeBeforeFormat), `ccc LLL dd, Y h aaa - ${endVisitHour} aaa`);
  }

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const resolution = doctorsResolutions?.find((res) => res.appointment_id === appointmentID);

  function isCardDescription() {
    if (role === 'DOCTOR' && resolution) {
      return resolution.resolution.length > 0;
    }
    if (role === 'PATIENT' && reason) {
      return reason.length > 0;
    }
    return false;
  }

  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement> | undefined;
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
            <UserImage src={avatar} alt="user avatar" />
          </UserCardImageContainer>
          <UserInformation>
            <UserCardName>{`${firstName} ${lastName}`}</UserCardName>
            <AppointmentStatus>
              {statusOrDoctor()}
            </AppointmentStatus>
          </UserInformation>
        </UserData>
        <div ref={menuRef}>
          {role === 'DOCTOR' && <SettingsButton onClick={() => setIsMenuOpen(!isMenuOpen)} />}
          {isMenuOpen && (<ControlCardPanel appointmentID={appointmentID} />)}
        </div>
      </UserCardHeader>
      <UserCardBody>
        <UserCardBodyTime>
          <Clock />
          <UserCardBodyTimeText>{formatVisitTime(time)}</UserCardBodyTimeText>
        </UserCardBodyTime>
        <UserCardBodyDescription isDescription={isCardDescription()}>
          {role === 'DOCTOR' ? <div><Board /></div> : <div><Heart /></div>}
          <UserCardBodyDescriptionText>{role === 'DOCTOR' ? resolution?.resolution : reason}</UserCardBodyDescriptionText>
        </UserCardBodyDescription>
      </UserCardBody>
    </UserCard>
  );
};

export default AppointmentCard;
