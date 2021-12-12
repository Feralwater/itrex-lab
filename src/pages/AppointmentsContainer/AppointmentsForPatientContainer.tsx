import React, { useEffect } from 'react';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { PatientFullState } from '../FullStateView';
import { PatientEmptyState } from '../EmptyStateView';
import { PatientNavigatePanel } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import appointmentsForPatient from '../../redux/actions/appointmentsForPatient.actions';
import dictionary from '../dictionary/pagesDictionary';
import { selectAppointmentsForPatient, selectProfile } from '../../redux/reducers';

export const AppointmentsForPatientContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const { id: userId } = useAppSelector(selectProfile);
  const { appointments, total: totalAppointmentsCount } = useAppSelector(selectAppointmentsForPatient);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForPatient.pending({ offset: 0, limit: 20 }));
    }
  }, [userId]);

  return (
    <>
      <PatientNavigatePanel pageTitle={dictionary.patientPage.title} />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {appointments.length > 0
          ? <PatientFullState appointments={appointments} total={totalAppointmentsCount} />
          : <PatientEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};
