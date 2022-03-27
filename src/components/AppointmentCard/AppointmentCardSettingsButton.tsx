import React, { forwardRef } from 'react';
import { SettingsButton } from 'components/AppointmentCard/AppointmentCard.styles';
import { ControlCardPanel } from 'components/ControlCardPanel';
import { AppointmentCardSettingsButtonProps } from 'components/AppointmentCard/AppointmentCard.types';

export const AppointmentCardSettingsButton:React.VFC<AppointmentCardSettingsButtonProps> = ({
  setIsMenuOpen,
  menuRef,
  isMenuOpen,
  appointmentID,
  resolutionID,
}) => {
  const toggleMenuHandler = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div ref={menuRef}>
      <SettingsButton onClick={toggleMenuHandler} />
      {isMenuOpen && (
      <ControlCardPanel
        appointmentID={appointmentID}
        setIsMenuOpen={setIsMenuOpen}
        resolutionID={resolutionID}
      />
      )}
    </div>
  );
};
