import { useAppDispatch, useAppSelector } from 'hooks';
import {
  appointmentsForDoctorSlice, appointmentsForPatientSlice,
  selectAppointmentsForDoctor,
  selectAppointmentsForPatient,
  selectProfile,
} from 'redux/reducers';
import { useEffect } from 'react';
import { appointmentsPerPage } from 'modules/hooks/constants';
import { ROLES } from 'routes/constants';

export const useFetchAppointments = (page: number) => {
  const dispatch = useAppDispatch();
  const { id: userId, roleName } = useAppSelector(selectProfile);
  const { appointments: doctorAppointments, status: doctorStatus, isMore: isMoreDoctorAppointments } = useAppSelector(selectAppointmentsForDoctor);
  const { appointments: patientAppointments, responseStatus: patientStatus, isMore: isMorePatientAppointments } = useAppSelector(selectAppointmentsForPatient);
  const slice = roleName === ROLES.DOCTOR ? appointmentsForDoctorSlice : appointmentsForPatientSlice;
  const responseStatus = roleName === ROLES.DOCTOR ? doctorStatus : patientStatus;
  const isMoreAppointments = roleName === ROLES.DOCTOR ? isMoreDoctorAppointments : isMorePatientAppointments;
  const appointments = roleName === ROLES.DOCTOR ? doctorAppointments : patientAppointments;
  useEffect(() => {
    if (userId) {
      dispatch(slice.actions.pending({
        offset: (page - 1) * appointmentsPerPage,
        limit: appointmentsPerPage,
      }));
    }
  }, [userId, dispatch, page]);

  return { responseStatus, appointments, isMoreAppointments };
};
