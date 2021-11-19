import React from 'react';
import { ReactComponent as Clock } from '../../../assets/svgImages/clock-icon.svg';
import { ReactComponent as Board } from '../../../assets/svgImages/board-icon.svg';
import { ReactComponent as Heart } from '../../../assets/svgImages/heart-icon.svg';
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
} from './AppointmentCard.styles';
import { UserImage } from '../../../components/Header/Header.styles';
import { statusColor, statusDescription } from './const';

const AppointmentCard: React.VFC<any> = ({
  firstName,
  lastName,
  avatar,
  status,
  time,
  note,
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
        <UserCardBodyDescription isDescription={note.length > 0}>
          {role === 'doctor' ? <Board /> : <div><Heart /></div>}
          <UserCardBodyDescriptionText>{note}</UserCardBodyDescriptionText>
        </UserCardBodyDescription>
      </UserCardBody>
    </UserCard>
  );
};

export default AppointmentCard;
