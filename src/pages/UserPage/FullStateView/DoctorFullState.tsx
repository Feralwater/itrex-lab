import AppointmentCard from 'pages/components/AppointmentCard/AppointmentCard';
import React from 'react';
import { AppointmentsForDoctor } from '../../../resources/appointments/appointments.types';
import { useAppSelector } from '../../../hooks';

const DoctorFullState: React.VFC<AppointmentsForDoctor> = ({ appointments }) => {
  const role = useAppSelector((state) => state.profile.roleName);
  return (
    <>
      {
        appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            firstName={appointment.patient.first_name}
            lastName={appointment.patient.last_name}
            avatar={appointment.patient.photo}
            status={appointment.status}
            reason={appointment.reason}
            time={appointment.visit_date}
            note={appointment.note}
            role={role}
          />
        ))
      }
    </>
  );
};

export default DoctorFullState;
