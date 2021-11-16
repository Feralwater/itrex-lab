import React from 'react';
import { PatientType } from '../doctorViews/doctorViewFullState/DoctorViewFullState';
import { ReactComponent as Clock } from '../../assets/svgImages/clock-icon.svg';
import { ReactComponent as Board } from '../../assets/svgImages/board-icon.svg';
import { ReactComponent as Heart } from '../../assets/svgImages/heart-icon.svg';
import { statuses } from '../../mockData/patients';
import {
  AppointmentStatus,
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
} from './PatientCard.styles';
import { UserImage } from '../header/Header.styles';
import colors from '../../styles/colors';

const PatientCard: React.VFC<PatientType> = ({
  avatar,
  firstName,
  lastName,
  status,
  time,
  description,
  role,
}) => {
  const statusColor = {
    [statuses.confirmed]: `${colors.greenish_teal}`,
    [statuses.canceled]: `${colors.radical_red}`,
    [statuses.waiting]: `${colors.cornflower_blue}`,
  };
  const statusDescription = {
    [statuses.confirmed]: 'Appointment is confirmed',
    [statuses.canceled]: 'Appointment is canceled',
    [statuses.waiting]: 'Waiting for confirmation...',
  };

  function isStatus() {
    if (status) {
      return (
        <>
          <UserCardBodyAppointmentConfirm color={statusColor[status]} />
          <div>{statusDescription[status]}</div>
        </>
      );
    }
    return <div>Therapist</div>;
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
              {isStatus}
            </AppointmentStatus>
          </UserInformation>
        </UserData>
        <SettingsButton />
      </UserCardHeader>
      <UserCardBody>
        <UserCardBodyTime>
          <Clock />
          <UserCardBodyTimeText>{time}</UserCardBodyTimeText>
        </UserCardBodyTime>
        <UserCardBodyDescription isDescription={description.length > 0}>
          {role === 'doctor' ? <Board /> : <Heart />}
          <UserCardBodyDescriptionText>{description}</UserCardBodyDescriptionText>
        </UserCardBodyDescription>
      </UserCardBody>
    </UserCard>
  );
};

export default PatientCard;
