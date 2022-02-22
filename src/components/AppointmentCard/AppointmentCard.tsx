import React, { memo } from 'react';
import { AppointmentCardHeader } from 'components/AppointmentCard/AppointmentCardHeader';
import { AppointmentCardProps } from 'components/AppointmentCard/AppointmentCard.types';
import { AppointmentCardDescription } from 'components/AppointmentCard/AppointmentCardDescription';
import { SettingsButtons } from 'components/AppointmentCard/SettingsButtons';
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

export const AppointmentCard:React.VFC<AppointmentCardProps> = memo(({
  photo,
  appointmentID,
  firstName,
  lastName,
  time,
  status,
  specialization,
  cardIcon,
  cardDescription,
  resolutionID,
  shouldRenderAppointmentCardSettingsButton,
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
      <SettingsButtons
        shouldRenderAppointmentCardSettingsButton={shouldRenderAppointmentCardSettingsButton}
        appointmentID={appointmentID}
        resolutionID={resolutionID}
      />
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
));
