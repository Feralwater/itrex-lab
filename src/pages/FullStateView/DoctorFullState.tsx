import { AppointmentCard } from 'components';
import React from 'react';
import { AppointmentsForDoctor } from '../../resources/appointments/appointments.types';

export const DoctorFullState: React.VFC<AppointmentsForDoctor> = ({ appointments, roleName }) => (
  <>
    {
        appointments.map((appointment) => (
          <div data-testid="doctor-name">
            <AppointmentCard
              key={appointment.id}
              appointmentID={appointment.id}
              firstName={appointment.patient.first_name}
              lastName={appointment.patient.last_name}
              avatar={appointment.patient.photo}
              status={appointment.status}
              time={appointment.visit_date}
              note={appointment.note}
              role={roleName}
              reason={appointment.reason}
            />
          </div>
        ))
      }
  </>
);
