import { useAppDispatch, useAppSelector } from 'hooks';
import {
  appointmentsForDoctorSlice, appointmentsForPatientSlice, selectProfile,
} from 'redux/reducers';
import { useEffect } from 'react';
import { appointmentsPerPage } from 'modules/hooks/constants';
import { ROLES } from 'routes/constants';
import { useDebounce } from 'modules/hooks/useDebounce';

export const useFetchAppointments = (page: number, searchTerm?: string) => {
  const dispatch = useAppDispatch();
  const { id: userId, roleName } = useAppSelector(selectProfile);
  const slice = roleName === ROLES.DOCTOR ? appointmentsForDoctorSlice : appointmentsForPatientSlice;
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  useEffect(() => {
    if (userId) {
      dispatch(slice.actions.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
        name: debouncedSearchTerm,
      }));
    }
  }, [userId, dispatch, page, debouncedSearchTerm]);
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(slice.actions.clearState());
    }
  }, [debouncedSearchTerm]);
  useEffect(() => () => {
    dispatch(slice.actions.clearState());
  }, []);
};
