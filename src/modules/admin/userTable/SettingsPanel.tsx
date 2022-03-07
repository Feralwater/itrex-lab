import React, { useState } from 'react';
import { ModalWindow } from 'components';
import { UserSettingsWindow } from 'modules/admin/userTable/UserSettingsWindow';
import { TableRowProps } from 'modules/admin/userTable/TableRow';

export const SettingsPanel:React.VFC<TableRowProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
}) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  return (
    <>
      <tr onClick={() => setShowEditModal(true)}>update</tr>
      <tr>delete</tr>
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
