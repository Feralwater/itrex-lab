import React, { useEffect } from 'react';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { adminTabs } from 'modules/admin/constants';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsersSlice, selectAllUsers } from 'redux/reducers/allPatients.reducer';

export const AdminPatientsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsersSlice.actions.pending({
      offset: 0,
      limit: 1000,
    }));
  }, []);
  return (
    <div>
      <NavigatePanel buttonOnNavigatePanel={adminTabs} />
    </div>
  );
};
