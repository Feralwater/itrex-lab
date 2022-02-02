import { AppointmentCard } from 'components';
import React from 'react';
import { AppointmentForDoctorFulfilled } from '../../redux/actions/actions.types';
import { RoleName } from '../../redux/reducers/reducers.types';

export interface DoctorFullStateProps{
  appointments: Array<AppointmentForDoctorFulfilled>
  roleName: RoleName
}

export const DoctorFullState: React.VFC<DoctorFullStateProps> = ({ appointments, roleName }) => (
  <>
    { appointments.map((appointment) => (
      <AppointmentCard
        key={appointment.appointmentID}
        appointmentID={appointment.appointmentID}
        firstName={appointment.firstName}
        lastName={appointment.lastName}
        avatar={appointment.photo}
        status={appointment.status}
        time={appointment.visitDate}
        resolution={appointment.resolution}
        role={roleName}
      />
    ))}
  </>
);
