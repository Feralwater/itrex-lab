import React from 'react';
import { ROLES } from 'routes/constants';
import { AppointmentForDoctorFulfilled } from 'redux/actions.types';
import { AppointmentCardContainer } from 'components/AppointmentCard';

export interface DoctorFullStateProps{
  appointments: Array<AppointmentForDoctorFulfilled>
}

export const DoctorFullState:React.VFC<DoctorFullStateProps> = ({ appointments }) => (
  <>
    { appointments.map((appointment) => (
      <AppointmentCardContainer
        photo={appointment.photo}
        key={appointment.appointmentID}
        appointmentID={appointment.appointmentID}
        firstName={appointment.firstName}
        lastName={appointment.lastName}
        role={ROLES.DOCTOR}
        status={appointment.appointmentStatus}
        time={appointment.visitDate}
        resolution={appointment.resolution}
      />
    ))}
  </>
);
