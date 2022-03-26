import { useAppDispatch, useAppSelector } from 'hooks';
import {
  appointmentsForDoctorSlice, appointmentsForPatientSlice, selectProfile,
} from 'redux/reducers';
import { useEffect } from 'react';
import { appointmentsPerPage } from 'modules/hooks/constants';
import { ROLES } from 'routes/constants';
import { useDebounce } from 'modules/hooks/useDebounce';

export const useFetchAppointments = (page: number, searchTerm?: string, filterQuery?: string) => {
  const dispatch = useAppDispatch();
  const { id: userId, roleName } = useAppSelector(selectProfile);
  const slice = roleName === ROLES.DOCTOR ? appointmentsForDoctorSlice : appointmentsForPatientSlice;
  const dateStatus = filterQuery === 'All' ? '' : filterQuery;
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (userId) {
      dispatch(slice.actions.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
        name: debouncedSearchTerm,
        dateStatus,
      }));
    }
  }, [userId, dispatch, page, debouncedSearchTerm, filterQuery]);
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(slice.actions.clearState());
    }
    if (filterQuery) {
      dispatch(slice.actions.clearState());
    }
  }, [debouncedSearchTerm, filterQuery]);
  useEffect(() => () => {
    dispatch(slice.actions.clearState());
  }, []);
};
