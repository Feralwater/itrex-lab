import React from 'react';
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
import { AppointmentCardPropsType } from './AppointmentCard.types';

const AppointmentCard: React.VFC<AppointmentCardPropsType> = ({
  doctor,
  firstName,
  lastName,
  avatar,
  status,
  time,
  reason,
  role,
}) => {
  function statusOrDoctor() {
    if (role === 'doctor') {
      return (
        <>
          <UserCardBodyAppointmentConfirm color={statusColor[status]} />
          <div>{statusDescription[status]}</div>
        </>
      );
    }
    return <DoctorSpecializationName>{doctor.specialization_name}</DoctorSpecializationName>;
  }

  function formatVisitTime(timeBeforeFormat: string) {
    const endVisitDate = add(new Date(timeBeforeFormat), { hours: 1 });
    const endVisitHour = format(new Date(endVisitDate), 'h');
    return format(new Date(timeBeforeFormat), `ccc LLL dd, Y h bbb - ${endVisitHour} bbb`);
  }

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
        <SettingsButton />
      </UserCardHeader>
      <UserCardBody>
        <UserCardBodyTime>
          <Clock />
          <UserCardBodyTimeText>{formatVisitTime(time)}</UserCardBodyTimeText>
        </UserCardBodyTime>
        <UserCardBodyDescription isDescription={reason.length > 0}>
          {role === 'doctor' ? <Board /> : <div><Heart /></div>}
          <UserCardBodyDescriptionText>{reason}</UserCardBodyDescriptionText>
        </UserCardBodyDescription>
      </UserCardBody>
    </UserCard>
  );
};

export default AppointmentCard;
