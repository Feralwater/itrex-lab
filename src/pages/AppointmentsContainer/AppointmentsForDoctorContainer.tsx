import React, { useEffect } from 'react';
import DoctorFullState from '../FullStateView/DoctorFullState';
import DoctorEmptyState from '../EmptyStateView/DoctorEmptyState';
import DoctorNavigatePanel from '../components/NavigatePanel/DoctorNavigatePanel';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentsForDoctor } from '../../redux/actions/appointmentsForDoctors.actions';

const AppointmentsForDoctorContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profile.id);
  const appointments = useAppSelector((state) => state.appointmentsForDoctor.appointments);
  const total = useAppSelector((state) => state.appointmentsForDoctor.total);

  useEffect(() => {
    if (userId) {
      dispatch(appointmentsForDoctor.pending({ offset: 0, limit: 20 }));
    }
  }, [userId, total]);

  return (
    <>
      <DoctorNavigatePanel />
      <AppointmentsWrapper patientsLength={appointments.length}>
        {appointments.length > 0
          ? <DoctorFullState appointments={appointments} total={total} />
          : <DoctorEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsForDoctorContainer;
