import React, { useEffect, useRef, useState } from 'react';
import { AppointmentCard } from 'components/AppointmentCard/AppointmentCard';
import { AppointmentCardContainerProps } from 'components/AppointmentCard/AppointmentCard.types';
import { ROLES } from 'routes/constants';
import { ReactComponent as Board } from '../../assets/svg/board-icon.svg';
import { ReactComponent as Heart } from '../../assets/svg/heart-icon.svg';

export const AppointmentCardContainer = React.forwardRef(({
  photo,
  appointmentID,
  firstName,
  lastName,
  status,
  role,
  specialization,
  resolution,
  reason,
  time,
}: AppointmentCardContainerProps, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement> | undefined;
  const cardDescription = reason || resolution?.resolution;
  const cardIcon = role === ROLES.DOCTOR ? <Board /> : <Heart />;

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

  return (
    <AppointmentCard
      menuRef={menuRef}
      photo={photo}
      appointmentID={appointmentID}
      firstName={firstName}
      lastName={lastName}
      ref={ref}
      status={status}
      specialization={specialization}
      role={role}
      time={time}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      cardIcon={cardIcon}
      cardDescription={cardDescription}
      resolutionID={resolution?.id}
    />
  );
});
