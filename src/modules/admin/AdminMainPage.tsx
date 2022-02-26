import React from 'react';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { adminTabs } from 'modules/admin/constants';

export const AdminMainPage = () => (
  <div>
    <NavigatePanel buttonOnNavigatePanel={adminTabs} />
  </div>
);
