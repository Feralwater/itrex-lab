import AppointmentCard from 'pages/components/AppointmentCard/AppointmentCard';
import React from 'react';
import { AppointmentsResponseType } from '../../../resources/appointments/appointments.types';

const PatientFullState: React.VFC<AppointmentsResponseType> = ({ appointments }) => (
  <>
    {
        appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            doctor={appointment.doctor}
            firstName={appointment.doctor.first_name}
            lastName={appointment.doctor.last_name}
            avatar={appointment.doctor.photo}
            status={appointment.status}
            reason={appointment.reason}
            time={appointment.visit_date}
            note={appointment.note}
            role={appointment.doctor.specialization_name}
          />
        ))
            }
  </>
);

export default PatientFullState;
