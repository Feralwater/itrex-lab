import React, { Dispatch, SetStateAction, useState } from 'react';
import { ModalWindow } from 'components';
import { UserUpdateWindow } from 'modules/admin/userTable/UserUpdateWindow';
import { TableRowProps } from 'modules/admin/userTable/TableRow';
import { dictionary } from 'pages';
import { ControlCommand } from 'components/ControlCardPanel/ControlCardPanel.styles';
import { AdminCommandsList } from 'modules/admin/userTable/Table.styles';

export interface SettingsPanelProps extends TableRowProps{
  setShowSettingsModal: Dispatch<SetStateAction<boolean>>
}

export const SettingsPanel:React.VFC<SettingsPanelProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
  settingsRef,
  setShowSettingsModal,
}) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const openUpdateModalHandle = () => setShowEditModal(true);

  return (
    <AdminCommandsList ref={settingsRef}>
      <ControlCommand onClick={openUpdateModalHandle}>{dictionary.userModal.updatePatient}</ControlCommand>
      <ControlCommand>{dictionary.userModal.deletePatient}</ControlCommand>
      <ModalWindow activeModal={showEditModal} setActiveModal={setShowEditModal}>
        <UserUpdateWindow
          userID={userID}
          firstName={firstName}
          lastName={lastName}
          photo={photo}
          roleName={roleName}
          specializationName={specializationName}
          setShowEditModal={setShowEditModal}
          setShowSettingsModal={setShowSettingsModal}
        />
      </ModalWindow>
    </AdminCommandsList>
  );
};
