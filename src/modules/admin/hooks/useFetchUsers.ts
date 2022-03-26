import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllUsersSlice, selectAllUsers } from 'redux/reducers/allPatients.reducer';
import { useEffect } from 'react';
import { userPerPage } from 'modules/admin/constants';

export const useFetchUsers = () => {
  const dispatch = useAppDispatch();
  const { users, status: responseStatus } = useAppSelector(selectAllUsers);
  useEffect(() => {
    dispatch(getAllUsersSlice.actions.pending({
      offset: 0,
      limit: userPerPage,
    }));
  }, []);
  return { users, responseStatus };
};
