import React from 'react';
import { FETCH_STATUS } from 'redux/reducers/constants';
import { ResolutionsLoaderContainer } from 'pages/Resolutions/Resolutions.styles';
import Loader from 'react-loader-spinner';
import { colors } from 'components/CommonStyles';
import { UserTable } from 'modules/admin/userTable/UserTable';
import { useFetchUsers } from 'modules/admin/hooks/useFetchUsers';
import { ROLES } from 'routes/constants';
import { AdminNavigatePanel } from 'modules/admin/AdminNavigatePanel';
import { dictionary } from 'pages';

export const AdminPatientsPage = () => {
  const { users, responseStatus } = useFetchUsers(ROLES.PATIENT);

  return (
    <>
      <AdminNavigatePanel>
        {dictionary.adminPage.addPatientButton}
      </AdminNavigatePanel>
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
