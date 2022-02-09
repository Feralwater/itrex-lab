import React from 'react';
import { ROLES } from 'routes/constants';
import { AppointmentForPatient } from 'resources/appointments/appointments.types';
import { AppointmentCardContainer } from 'components/AppointmentCard';

interface PatientFullStateProps{
  appointments: Array<AppointmentForPatient>
}

export const PatientFullState = React.forwardRef(({ appointments }:PatientFullStateProps, ref) => (
  <>
    {
        appointments.map((appointment, index) => {
          const lastElementRef = index + 1 === appointments.length ? ref : null;
          return (
            <AppointmentCardContainer
              key={appointment.id}
              appointmentID={appointment.id}
              specialization={appointment.doctor.specialization_name}
              firstName={appointment.doctor.first_name}
              lastName={appointment.doctor.last_name}
              photo={appointment.doctor.photo}
              status={appointment.status}
              reason={appointment.reason}
              time={appointment.visit_date}
              role={ROLES.PATIENT}
              ref={lastElementRef}
            />
          );
        })
      }
  </>
));
