import React from 'react';
import { ROLES } from 'routes/constants';
import { AppointmentForDoctorFulfilled } from 'redux/actions.types';
import { AppointmentCardContainer } from 'components/AppointmentCard';

export interface DoctorFullStateProps{
  appointments: Array<AppointmentForDoctorFulfilled>
}

export const DoctorFullState = React.forwardRef(({ appointments }:DoctorFullStateProps, ref) => (
  <>
    { appointments.map((appointment, index) => {
      const lastElementRef = index + 1 === appointments.length ? ref : null;
      return (
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
          ref={lastElementRef}
        />
      );
    })}
  </>
));
