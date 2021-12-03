import React, { useEffect } from 'react';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import PatientFullState from '../FullStateView/PatientFullState';
import PatientEmptyState from '../EmptyStateView/PatientEmptyState';
import PatientNavigatePanel from '../components/NavigatePanel/PatientNavigatePanel';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import appointmentsForPatient from '../../../redux/actions/appointmentsForPatient.actions';

const AppointmentsForPatientContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profile.id);
  const appointments = useAppSelector((state) => state.appointmentsForPatient.appointments);
  const total = useAppSelector((state) => state.appointmentsForPatient.total);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForPatient.pending({ offset: 0, limit: 20 }));
    }
  }, [userId]);

  return (
    <>
      <PatientNavigatePanel />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {appointments.length > 0
          ? <PatientFullState appointments={appointments} total={total} />
          : <PatientEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsForPatientContainer;
