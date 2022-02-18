import { useAppDispatch, useAppSelector } from 'hooks';
import {
  appointmentsForDoctorSlice, appointmentsForPatientSlice, selectProfile,
} from 'redux/reducers';
import { useEffect } from 'react';
import { appointmentsPerPage } from 'modules/hooks/constants';
import { ROLES } from 'routes/constants';

export const useFetchAppointments = (page: number, searchTerm?: string) => {
  const dispatch = useAppDispatch();
  const { id: userId, roleName } = useAppSelector(selectProfile);
  const slice = roleName === ROLES.DOCTOR ? appointmentsForDoctorSlice : appointmentsForPatientSlice;

  useEffect(() => {
    if (userId) {
      dispatch(slice.actions.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
        name: searchTerm,
      }));
    }
  }, [userId, dispatch, page, searchTerm]);
  useEffect(() => () => {
    dispatch(slice.actions.clearState());
  }, []);
};
