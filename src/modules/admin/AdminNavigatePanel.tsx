import { AdminNavigate } from 'modules/admin/AdminPage.styles';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { adminTabs } from 'modules/admin/constants';
import { Button } from 'components';
import React from 'react';

export const AdminNavigatePanel:React.FC = ({ children }) => (
  <AdminNavigate>
    <NavigatePanel buttonOnNavigatePanel={adminTabs} />
    <Button
      type="button"
      icon="left"
      size="small"
      variant="primary"
      iconUrl="/svg/plus-icon.svg"
    >
      {children}
    </Button>
  </AdminNavigate>
);
