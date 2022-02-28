import React, { useEffect } from 'react';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { adminTabs } from 'modules/admin/constants';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsersSlice, selectAllUsers } from 'redux/reducers/allPatients.reducer';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { ResolutionsLoaderContainer } from 'pages/Resolutions/Resolutions.styles';
import Loader from 'react-loader-spinner';
import { colors } from 'components/CommonStyles';
import { UserTable } from 'modules/admin/userTable/UserTable';

export const AdminPatientsPage = () => {
  const dispatch = useAppDispatch();
  const { users, status: responseStatus } = useAppSelector(selectAllUsers);
  useEffect(() => {
    dispatch(getAllUsersSlice.actions.pending({
      offset: 0,
      limit: 8,
    }));
  }, []);
  return (
    <>
      <NavigatePanel buttonOnNavigatePanel={adminTabs} />
      {responseStatus !== FETCH_STATUS.LOADING
        ? <UserTable users={users} />
        : (
          <ResolutionsLoaderContainer>
            <Loader
              type="MutatingDots"
              color={colors.cornflower_blue}
              secondaryColor={colors.radical_red}
              timeout={5000}
              height={150}
              width={150}
            />
          </ResolutionsLoaderContainer>
        )}
    </>
  );
};
