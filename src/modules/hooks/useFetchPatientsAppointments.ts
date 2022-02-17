import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { appointmentsForPatientSlice, selectAppointmentsForPatient, selectProfile } from 'redux/reducers';
import { appointmentsPerPage } from 'modules/hooks/constants';

export const useFetchPatientsAppointments = (page: number) => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { appointments, responseStatus, isMore: isMoreAppointments } = useAppSelector(selectAppointmentsForPatient);
  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForPatientSlice.actions.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
      }));
    }
  }, [userId, dispatch, page]);

  return { responseStatus, appointments, isMoreAppointments };
};
