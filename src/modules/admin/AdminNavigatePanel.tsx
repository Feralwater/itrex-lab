import { AdminNavigate } from 'modules/admin/AdminPage.styles';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { adminTabs } from 'modules/admin/constants';
import { Button } from 'components';
import React, { useState } from 'react';
import { CreatePatientModal } from 'modules/admin/CreatePatientModal';

export const AdminNavigatePanel:React.FC = ({ children }) => {
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
      <CreatePatientModal createPatientWindow={createPatientWindow} setCreatePatientWindow={setCreatePatientWindow} />
    </>
  );
};
