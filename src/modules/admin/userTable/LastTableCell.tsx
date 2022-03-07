import React from 'react';
import { LastAdminTableCell, SettingsWrapper } from 'modules/admin/userTable/Table.styles';
import { SettingsButton } from 'components/AppointmentCard/AppointmentCard.styles';
import { SettingsPanel } from 'modules/admin/userTable/SettingsPanel';
import { TableRowProps } from 'modules/admin/userTable/TableRow';

export interface LastTableCellProps extends TableRowProps{
  openSettingsModal: () => void,
  showSettingsModal: boolean,
}

export const LastTableCell:React.VFC<LastTableCellProps> = ({
  openSettingsModal,
  showSettingsModal,
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
  settingsRef,
  setShowSettingsModal,
}) => (
  <LastAdminTableCell>
    <SettingsWrapper>
      <SettingsButton onClick={openSettingsModal} />
      {showSettingsModal && (
      <SettingsPanel
        userID={userID}
        firstName={firstName}
        lastName={lastName}
        photo={photo}
        roleName={roleName}
        specializationName={specializationName}
        settingsRef={settingsRef}
        setShowSettingsModal={setShowSettingsModal}
      />
      )}
    </SettingsWrapper>
  </LastAdminTableCell>
);
