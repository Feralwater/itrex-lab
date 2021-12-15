import { AppointmentCard } from 'components';
import React from 'react';
import { AppointmentsForPatient } from '../../resources/appointments/appointments.types';

export const PatientFullState: React.VFC<AppointmentsForPatient> = ({ appointments, roleName }) => (
  <>
    {
        appointments.map((appointment) => (
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
            role={roleName}
          />
        ))
      }
  </>
);
