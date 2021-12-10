import React, { useEffect } from 'react';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import PatientFullState from '../FullStateView/PatientFullState';
import PatientEmptyState from '../EmptyStateView/PatientEmptyState';
import PatientNavigatePanel from '../../components/NavigatePanel/PatientNavigatePanel';
import { useAppDispatch, useAppSelector } from '../../hooks';
import appointmentsForPatient from '../../redux/actions/appointmentsForPatient.actions';
import dictionary from '../dictionary/pagesDictionary';
import { selectAppointmentsForPatient, selectProfile } from '../../redux/reducers';

const AppointmentsForPatientContainer:React.VFC = () => {
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

export default AppointmentsForPatientContainer;
