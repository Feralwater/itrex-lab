import React, { useEffect, useRef, useState } from 'react';
import { AppointmentCard } from 'components/AppointmentCard/AppointmentCard';
import { AppointmentCardContainerProps } from 'components/AppointmentCard/AppointmentCard.types';

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
  const toggleMenuHandler = () => setIsMenuOpen(!isMenuOpen);

  function isCardDescription() {
    if (reason) {
      return reason.length > 0;
    }
    if (resolution) {
      return resolution.resolution.length > 0;
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
      toggleMenuHandler={toggleMenuHandler}
      isCardDescription={isCardDescription()}
      time={time}
      resolution={resolution}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      reason={reason}
    />
  );
});
