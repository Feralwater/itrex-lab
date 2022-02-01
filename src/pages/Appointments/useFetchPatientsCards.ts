import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAppointmentsForPatient, selectProfile } from '../../redux/reducers';
import { appointmentsPerPage } from './constants';
import { appointmentsForPatient } from '../../redux/actions';

export const useFetchPatientsCards = (page: number) => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { appointments, responseStatus, isMore: isMoreAppointments } = useAppSelector(selectAppointmentsForPatient);
  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForPatient.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
      }));
    }
  }, [userId, dispatch, page]);

  return { responseStatus, appointments, isMoreAppointments };
};
