import AppointmentCard from 'pages/components/AppointmentCard/AppointmentCard';
import React from 'react';
import { AppointmentsResponseType } from '../../../../services/api/api.types';

const ViewFullState: React.VFC<AppointmentsResponseType> = ({ appointments }) => (
  <>
    {
        appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            firstName={appointment.doctor.first_name}
            lastName={appointment.doctor.last_name}
            avatar={appointment.doctor.photo}
            status={appointment.status}
            time={appointment.visit_date}
            note={appointment.note}
            role={appointment.doctor.specialization_name}
          />
        ))
            }
  </>
);

export default ViewFullState;
