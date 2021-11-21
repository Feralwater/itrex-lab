import React, { useEffect, useState } from 'react';
import { AppointmentsResponseType } from 'resources/appointments/appointments.types';
import { useSelector } from 'react-redux';
import AppointmentsWrapperHeader
  from '../AppointmentsContainerHeader/AppointmentsContainerHeader';
import ViewFullState from '../../publicPages/comonViews/fullStateView/viewFullState';
import ViewEmptyState from '../../publicPages/comonViews/emptyStateView/viewEmptyState';
import AppointmentsWrapper from './AppointmentsContainer.styles';
import appointments from '../../../resources/appointments/appointments.api';
import { RootStateType } from '../../../redux/store';

const AppointmentsContainer:React.VFC = () => {
  const [data, updateData] = useState<AppointmentsResponseType>({ appointments: [], total: 0 });
  const roleName = useSelector<RootStateType, string>((state) => state.profile.role_name);
  const getAppointments = async () => {
    const response = await appointments.getAppointments(0, 12);
    updateData(response.data);
  };
  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      <AppointmentsWrapperHeader role_name={roleName} />
      <AppointmentsWrapper patientsLength={data.appointments.length}>
        {data.appointments.length > 0
          ? <ViewFullState appointments={data.appointments} total={data.total} />
          : <ViewEmptyState role_name={roleName} />}
      </AppointmentsWrapper>
    </>
  );
};

export default AppointmentsContainer;
