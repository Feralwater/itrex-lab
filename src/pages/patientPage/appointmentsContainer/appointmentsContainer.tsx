import React, { useEffect, useState } from 'react';
import { AppointmentsResponseType } from 'resources/appointments/appointments.types';
import appointments from '../../../resources/appointments/appointments.api';
import AppointmentsWrapper from './appointmentsContainer.styles';
import PatientFullState from '../fullStateView/patientFullState';
import PatientEmptyState from '../emptyStateView/patientEmptyState';
import AppointmentsWrapperHeader from '../appointmentsHeader/appointmentsHeader';
import { useAppSelector } from '../../../hooks';

const AppointmentsContainer:React.VFC = () => {
  const [data, updateData] = useState<AppointmentsResponseType>({ appointments: [], total: 0 });
  const getAppointments = async () => {
    const response = await appointments.getAppointments();
    updateData(response?.data);
  };
  const userId = useAppSelector((state) => state.profile.id);

  useEffect(() => {
    if (userId) {
      getAppointments();
    }
  }, [userId]);

  return (
    <>
      <AppointmentsWrapperHeader />
      <AppointmentsWrapper patientsLength={data.appointments.length}>
        {data.appointments.length > 0
          ? <PatientFullState appointments={data.appointments} total={data.total} />
          : <PatientEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsContainer;
