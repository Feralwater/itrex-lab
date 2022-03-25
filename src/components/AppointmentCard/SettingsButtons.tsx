import React, { useEffect, useRef, useState } from 'react';
import { AppointmentCardSettingsButton } from 'components/AppointmentCard/AppointmentCardSettingsButton';

interface SettingsButtonsProps{
  shouldRenderAppointmentCardSettingsButton: boolean,
  appointmentID: string,
  resolutionID?: string,
}

export const SettingsButtons:React.VFC<SettingsButtonsProps> = (
  {
    shouldRenderAppointmentCardSettingsButton,
    appointmentID, resolutionID,
  },
) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement> | undefined;

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
  if (shouldRenderAppointmentCardSettingsButton) {
    return (
      <AppointmentCardSettingsButton
        appointmentID={appointmentID}
        setIsMenuOpen={setIsMenuOpen}
        resolutionID={resolutionID}
        menuRef={menuRef}
        isMenuOpen={isMenuOpen}
      />
    );
  }
  return null;
};
