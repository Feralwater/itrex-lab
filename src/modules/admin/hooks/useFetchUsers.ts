import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsersSlice, selectAllUsers } from 'redux/reducers/allPatients.reducer';
import { useEffect } from 'react';
import { userPerPage } from 'modules/admin/constants';
import { getAllDoctorsSlice, selectAllDoctors } from 'redux/reducers/allDoctors.reducer';
import { ROLES } from 'routes/constants';
import { RoleName } from 'redux/reducers/reducers.types';

export const useFetchUsers = (roleName: RoleName) => {
  const dispatch = useAppDispatch();
  const slice = roleName === ROLES.DOCTOR ? getAllDoctorsSlice : getAllUsersSlice;
  const selector = roleName === ROLES.DOCTOR ? selectAllDoctors : selectAllUsers;
  const { users, status: responseStatus, total: totalUsersCount } = useAppSelector(selector);

  useEffect(() => {
    dispatch(slice.actions.pending({
      offset: 0,
      limit: userPerPage,
    }));
  }, []);
  return { users, responseStatus, totalUsersCount };
};
