import React, { useEffect, useState } from 'react';
import apiClient from '../../../services/api/api';
import AppointmentsWrapperHeader
  from '../../publicPages/doctorPages/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeader';
import ViewFullState from '../../publicPages/doctorPages/doctorViewFullState/DoctorViewFullState';
import ViewEmptyState from '../../publicPages/doctorPages/doctorViewEmptyState/DoctorViewEmptyState';
import AppointmentsWrapper from '../../publicPages/doctorPages/doctorViewTemplate/DoctorViewTemplate.styles';
import { AppointmentsResponseType } from '../../../services/api/api.types';

const AppointmentsContainer:React.VFC = () => {
  const [data, updateData] = useState<AppointmentsResponseType>({ appointments: [], total: 0 });
  const getAppointments = async () => {
    const response = await apiClient.getAppointments(0, 0);
    updateData(response.data);
  };
  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      <AppointmentsWrapperHeader userType="patient" />
      <AppointmentsWrapper patientsLength={data.appointments.length}>
        {data.appointments.length > 0
          ? <ViewFullState appointments={data.appointments} total={data.total} />
          : <ViewEmptyState />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsContainer;
