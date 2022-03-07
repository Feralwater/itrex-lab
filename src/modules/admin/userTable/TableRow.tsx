import React, { useState } from 'react';
import {
  ResolutionsTableCell, ResolutionsTableRow,
} from 'pages/Resolutions/Resolutions.styles';
import { SettingsButton } from 'components/AppointmentCard/AppointmentCard.styles';
import { RoleName } from 'redux/reducers/reducers.types';
import { SettingsPanel } from 'modules/admin/userTable/SettingsPanel';
import { LastAdminTableCell, SettingsWrapper } from 'modules/admin/userTable/Table.styles';

export interface TableRowProps {
  userID: string
  firstName: string
  lastName: string
  photo: string
  roleName: RoleName
  specializationName?: string
}

export const TableRow: React.VFC<TableRowProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
}) => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const openSettingsModal = () => setShowSettingsModal((prevState) => !prevState);
  return (
    <ResolutionsTableRow>
      <ResolutionsTableCell><img src={photo} alt="" /></ResolutionsTableCell>
      <ResolutionsTableCell>{roleName}</ResolutionsTableCell>
      <ResolutionsTableCell>{firstName}</ResolutionsTableCell>
      <ResolutionsTableCell>{lastName}</ResolutionsTableCell>
      {specializationName && <ResolutionsTableCell>{specializationName}</ResolutionsTableCell>}
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
          />
          )}
        </SettingsWrapper>
      </LastAdminTableCell>
    </ResolutionsTableRow>
  );
};
