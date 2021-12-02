import React, { useEffect, useState } from 'react';
import appointments from '../../../resources/appointments/appointments.api';
import { AppointmentsForDoctor } from '../../../resources/appointments/appointments.types';
import DoctorFullState from '../FullStateView/DoctorFullState';
import DoctorEmptyState from '../EmptyStateView/DoctorEmptyState';
import DoctorNavigatePanel from '../../components/NavigatePanel/DoctorNavigatePanel';
import AppointmentsWrapper from './AppointmentsContainer.styles';

const AppointmentsForDoctorContainer:React.VFC = () => {
  const [data, updateData] = useState<AppointmentsForDoctor>({ appointments: [], total: 0 });
  const getAppointmentsForDoctor = async () => {
    const response = await appointments.getAppointmentsForDoctor();
    updateData(response?.data);
  };
  useEffect(() => {
    getAppointmentsForDoctor();
  }, []);

  return (
    <>
      <DoctorNavigatePanel />
      <AppointmentsWrapper patientsLength={data.appointments.length}>
        {data.appointments.length > 0
          ? <DoctorFullState appointments={data.appointments} total={data.total} />
          : <DoctorEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsForDoctorContainer;
