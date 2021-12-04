import AppointmentCard from 'pages/components/AppointmentCard/AppointmentCard';
import React from 'react';
import { AppointmentsForPatient } from '../../resources/appointments/appointments.types';
import { useAppSelector } from '../../hooks';

const PatientFullState: React.VFC<AppointmentsForPatient> = ({ appointments }) => {
  const role = useAppSelector((state) => state.profile.roleName);
  return (
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
            role={role}
          />
        ))
      }
    </>
  );
};

export default PatientFullState;
