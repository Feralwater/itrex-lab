import React from 'react';
import { PatientType } from '../../pages/publicPages/doctorViews/doctorViewFullState/DoctorViewFullState';
import { ReactComponent as Clock } from '../../assets/svgImages/clock-icon.svg';
import { ReactComponent as Board } from '../../assets/svgImages/board-icon.svg';
import { ReactComponent as Heart } from '../../assets/svgImages/heart-icon.svg';
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
import { UserImage } from '../Header/Header.styles';
import { statusColor, statusDescription } from './const';

const PatientCard: React.VFC<PatientType> = ({
  avatar,
  firstName,
  lastName,
  status,
  time,
  description,
  role,
}) => {
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
          {role === 'doctor' ? <Board /> : <div><Heart /></div>}
          <UserCardBodyDescriptionText>{description}</UserCardBodyDescriptionText>
        </UserCardBodyDescription>
      </UserCardBody>
    </UserCard>
  );
};

export default PatientCard;
