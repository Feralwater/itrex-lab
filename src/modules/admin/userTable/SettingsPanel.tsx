import React, { useState } from 'react';
import { ModalWindow } from 'components';
import { UserSettingsWindow } from 'modules/admin/userTable/UserSettingsWindow';
import { TableRowProps } from 'modules/admin/userTable/TableRow';
import { dictionary } from 'pages';
import { CommandsList, ControlCommand } from 'components/ControlCardPanel/ControlCardPanel.styles';

export const SettingsPanel:React.VFC<TableRowProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
}) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const openUpdateModalHandle = () => setShowEditModal(true);

  return (
    <>
      <CommandsList>
        <ControlCommand onClick={openUpdateModalHandle}>{dictionary.userModal.updatePatient}</ControlCommand>
        <ControlCommand>{dictionary.userModal.deletePatient}</ControlCommand>
      </CommandsList>
      <ModalWindow activeModal={showEditModal} setActiveModal={setShowEditModal}>
        <UserSettingsWindow
          userID={userID}
          firstName={firstName}
          lastName={lastName}
          photo={photo}
          roleName={roleName}
          specializationName={specializationName}
          setShowSettingsModal={setShowEditModal}
        />
      </ModalWindow>
    </>
  );
};
