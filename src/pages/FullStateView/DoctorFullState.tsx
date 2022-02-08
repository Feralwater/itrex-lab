import { AppointmentCard } from 'components';
import React from 'react';
import { ROLES } from 'routes/constants';
import { RoleName } from 'redux/reducers/reducers.types';
import { AppointmentForDoctorFulfilled } from 'redux/actions.types';

export interface DoctorFullStateProps{
  appointments: Array<AppointmentForDoctorFulfilled>
  roleName: RoleName
}

export const DoctorFullState = React.forwardRef(({ appointments }:DoctorFullStateProps, ref) => (
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
            status={appointment.appointmentStatus}
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
          status={appointment.appointmentStatus}
          time={appointment.visitDate}
          resolution={appointment.resolution}
          role={ROLES.DOCTOR}
        />
      );
    })}
  </>
));
