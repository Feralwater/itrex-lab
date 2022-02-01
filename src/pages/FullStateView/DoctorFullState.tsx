import { AppointmentCard } from 'components';
import React from 'react';
import { CardsForDoctor } from '../../resources/appointments/appointments.types';
import { ROLES } from '../../routes/constants';

export const DoctorFullState = React.forwardRef(({ appointments }:CardsForDoctor, ref) => (
  <>
    { appointments.map((appointment, index) => {
      if (appointments.length === index + 1) {
        return (
          <AppointmentCard
            key={appointment.appointmentID}
            appointmentID={appointment.appointmentID}
            firstName={appointment.firstName}
            lastName={appointment.lastName}
            avatar={appointment.photo}
            status={appointment.status}
            time={appointment.visitDate}
            resolution={appointment.resolution}
            role={ROLES.DOCTOR}
            ref={ref}
          />
        );
      }
      return (
        <AppointmentCard
          key={appointment.appointmentID}
          appointmentID={appointment.appointmentID}
          firstName={appointment.firstName}
          lastName={appointment.lastName}
          avatar={appointment.photo}
          status={appointment.status}
          time={appointment.visitDate}
          resolution={appointment.resolution}
          role={ROLES.DOCTOR}
        />
      );
    })}
  </>
));
