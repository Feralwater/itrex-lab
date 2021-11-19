import React, { useEffect, useState } from 'react';
import apiClient from '../../../services/api/api';
import AppointmentsWrapperHeader
  from '../../publicPages/doctorPage/PatientsContainerHeader';
import ViewFullState from '../../publicPages/comonViews/fullStateView/viewFullState';
import ViewEmptyState from '../../publicPages/comonViews/emptyStateView/viewEmptyState';
import AppointmentsWrapper from './AppointmentsContainer.styles';
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
      <AppointmentsWrapperHeader role_name="patient" />
      <AppointmentsWrapper patientsLength={data.appointments.length}>
        {data.appointments.length > 0
          ? <ViewFullState appointments={data.appointments} total={data.total} />
          : <ViewEmptyState role_name="patient" />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsContainer;
