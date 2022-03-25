import { AdminNavigate } from 'modules/admin/AdminPage.styles';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { adminTabs } from 'modules/admin/constants';
import { Button } from 'components';
import React, { useState } from 'react';
import { CreateUserModal } from 'modules/admin/CreateUserModal';
import { RoleName } from 'redux/reducers/reducers.types';

interface AdminNavigatePanelProps {
  roleName: RoleName
}

export const AdminNavigatePanel:React.FC<AdminNavigatePanelProps> = ({ roleName, children }) => {
  const [createPatientWindow, setCreatePatientWindow] = useState<boolean>(false);
  const openCreatePatientWindow = () => setCreatePatientWindow(true);

  return (
    <>
      <AdminNavigate>
        <NavigatePanel buttonOnNavigatePanel={adminTabs} />
        <Button
          type="button"
          icon="left"
          size="small"
          variant="primary"
          iconUrl="/svg/plus-icon.svg"
          onClick={openCreatePatientWindow}
        >
          {children}
        </Button>
      </AdminNavigate>
      <CreateUserModal
        createPatientWindow={createPatientWindow}
        setCreatePatientWindow={setCreatePatientWindow}
        roleName={roleName}
      />
    </>
  );
};
