import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsersSlice, selectAllUsers } from 'redux/reducers/allPatients.reducer';
import { useEffect } from 'react';
import { userPerPage } from 'modules/admin/constants';
import { selectAllDoctors } from 'redux/reducers/allDoctors.reducer';
import { ROLES } from 'routes/constants';
import { RoleName } from 'redux/reducers/reducers.types';

export const useFetchUsers = (roleName: RoleName) => {
  const dispatch = useAppDispatch();
  const { users: allPatients, status: patientsResponseStatus, total: totalPatientsCount } = useAppSelector(selectAllUsers);
  const { users: allDoctors, status: doctorsResponseStatus, total: totalDoctorsCount } = useAppSelector(selectAllDoctors);
  const users = roleName === ROLES.DOCTOR ? allDoctors : allPatients;
  const responseStatus = roleName === ROLES.DOCTOR ? doctorsResponseStatus : patientsResponseStatus;
  const totalUsersCount = roleName === ROLES.DOCTOR ? totalDoctorsCount : totalPatientsCount;

  useEffect(() => {
    dispatch(getAllUsersSlice.actions.pending({
      offset: 0,
      limit: userPerPage,
    }));
  }, []);
  return { users, responseStatus, totalUsersCount };
};
