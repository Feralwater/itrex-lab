import React, { ReactElement } from 'react';
import { UserCardBodyDescription, UserCardBodyDescriptionText } from 'components/AppointmentCard/AppointmentCard.styles';

interface AppointmentCardDescriptionProps{
  cardIcon: ReactElement
  cardDescription?: string
}

export const AppointmentCardDescription:React.VFC<AppointmentCardDescriptionProps> = (
  { cardIcon, cardDescription },
) => {
  const isDescription = cardDescription ? cardDescription.length > 0 : false;
  if (isDescription) {
    return (
      <UserCardBodyDescription>
        <div>{cardIcon}</div>
        <UserCardBodyDescriptionText>{cardDescription}</UserCardBodyDescriptionText>
      </UserCardBodyDescription>
    );
  }
  return null;
};
