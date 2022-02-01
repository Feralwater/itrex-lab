import { AppointmentCard } from 'components';
import React from 'react';
import { ROLES } from '../../routes/constants';
import { AppointmentForPatient } from '../../resources/appointments/appointments.types';

interface PatientFullStateProps{
  appointments: Array<AppointmentForPatient>
}

export const PatientFullState = React.forwardRef(({ appointments }:PatientFullStateProps, ref) => (
  <>
    {
        appointments.map((appointment, index) => {
          if (appointments.length === index + 1) {
            return (
              <AppointmentCard
                key={appointment.id}
                appointmentID={appointment.id}
                specialization={appointment.doctor.specialization_name}
                firstName={appointment.doctor.first_name}
                lastName={appointment.doctor.last_name}
                avatar={appointment.doctor.photo}
                status={appointment.status}
                reason={appointment.reason}
                time={appointment.visit_date}
                note={appointment.note}
                role={ROLES.PATIENT}
                ref={ref}
              />
            );
          }
          return (
            <AppointmentCard
              key={appointment.id}
              appointmentID={appointment.id}
              specialization={appointment.doctor.specialization_name}
              firstName={appointment.doctor.first_name}
              lastName={appointment.doctor.last_name}
              avatar={appointment.doctor.photo}
              status={appointment.status}
              reason={appointment.reason}
              time={appointment.visit_date}
              note={appointment.note}
              role={ROLES.PATIENT}
            />
          );
        })
      }
  </>
));
