import React, { useEffect, useState } from 'react';
import { AppointmentsResponseType } from 'resources/appointments/appointments.types';
import AppointmentsWrapperHeader
  from '../../patientPage/appointmentsHeader/appointmentsHeader';
import PatientFullState from '../../patientPage/fullStateView/patientFullState';
import PatientEmptyState from '../../patientPage/emptyStateView/patientEmptyState';
import AppointmentsWrapper from './patientsContainer.styles';
import appointments from '../../../resources/appointments/appointments.api';

const PatientsContainer:React.VFC = () => {
  const [data, updateData] = useState<AppointmentsResponseType>({ appointments: [], total: 0 });
  const getAppointments = async () => {
    const response = await appointments.getAppointments();
    updateData(response?.data);
  };
  useEffect(() => {
    getAppointments();
  }, []);

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

export default PatientsContainer;
