import React, { useEffect, useState } from 'react';
import appointments from '../../../resources/appointments/appointments.api';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import PatientFullState from '../FullStateView/PatientFullState';
import PatientEmptyState from '../EmptyStateView/PatientEmptyState';
import PatientNavigatePanel from '../../components/NavigatePanel/PatientNavigatePanel';
import { useAppSelector } from '../../../hooks';
import { AppointmentsForPatient } from '../../../resources/appointments/appointments.types';

const AppointmentsForPatientContainer:React.VFC = () => {
  const [data, updateData] = useState<AppointmentsForPatient>({ appointments: [], total: 0 });
  const getAppointmentsForPatient = async () => {
    const response = await appointments.getAppointmentsForPatient();
    updateData(response?.data);
  };
  const userId = useAppSelector((state) => state.profile.id);

  useEffect(() => {
    if (userId) {
      getAppointmentsForPatient();
    }
  }, [userId]);

  return (
    <>
      <PatientNavigatePanel />
      <AppointmentsWrapper patientsLength={data.appointments.length}>
        {data.appointments.length > 0
          ? <PatientFullState appointments={data.appointments} total={data.total} />
          : <PatientEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsForPatientContainer;
