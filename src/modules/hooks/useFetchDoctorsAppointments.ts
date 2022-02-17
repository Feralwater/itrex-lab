import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { appointmentsForDoctorSlice, selectAppointmentsForDoctor, selectProfile } from 'redux/reducers';
import { appointmentsPerPage } from 'modules/hooks/constants';

export const useFetchDoctorsAppointments = (page: number) => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { appointments, status: responseStatus, isMore: isMoreAppointments } = useAppSelector(selectAppointmentsForDoctor);
  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForDoctorSlice.actions.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
      }));
    }
  }, [userId, dispatch, page]);

  return { responseStatus, appointments, isMoreAppointments };
};
