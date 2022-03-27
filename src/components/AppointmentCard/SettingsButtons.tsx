import React, { useCallback, useRef, useState } from 'react';
import { AppointmentCardSettingsButton } from 'components/AppointmentCard/AppointmentCardSettingsButton';
import { UseClickOutside } from 'components/ControlCardPanel/hooks/useClickOutside';

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

  const onClickOutside = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  UseClickOutside({ elRef: menuRef, callback: onClickOutside });
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
