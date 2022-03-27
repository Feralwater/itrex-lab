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
