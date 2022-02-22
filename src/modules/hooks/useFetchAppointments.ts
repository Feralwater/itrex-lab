import { useAppDispatch, useAppSelector } from 'hooks';
import {
  appointmentsForDoctorSlice, appointmentsForPatientSlice, selectProfile,
} from 'redux/reducers';
import { useEffect } from 'react';
import { appointmentsPerPage } from 'modules/hooks/constants';
import { ROLES } from 'routes/constants';

export const useFetchAppointments = (page: number, searchTerm?: string, filterQuery?: string) => {
  const dispatch = useAppDispatch();
  const { id: userId, roleName } = useAppSelector(selectProfile);
  const slice = roleName === ROLES.DOCTOR ? appointmentsForDoctorSlice : appointmentsForPatientSlice;
  const dateStatus = filterQuery === 'All' ? '' : filterQuery;
  useEffect(() => {
    if (userId) {
      dispatch(slice.actions.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
        name: searchTerm,
        dateStatus,
      }));
    }
  }, [userId, dispatch, page, searchTerm, filterQuery]);
  useEffect(() => {
    if (searchTerm) {
      dispatch(slice.actions.clearState());
    }
    if (filterQuery) {
      dispatch(slice.actions.clearState());
    }
  }, [searchTerm, filterQuery]);
  useEffect(() => () => {
    dispatch(slice.actions.clearState());
  }, []);
};
