import { AppointmentCard } from 'components';
import React from 'react';
import { CardsForDoctor } from '../../resources/appointments/appointments.types';

export const DoctorFullState: React.VFC<CardsForDoctor> = ({ appointments, roleName }) => (
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
