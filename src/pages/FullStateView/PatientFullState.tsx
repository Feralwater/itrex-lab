import { AppointmentCard } from 'components';
import React from 'react';
import { AppointmentsForPatient } from '../../resources/appointments/appointments.types';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';

const PatientFullState: React.VFC<AppointmentsForPatient> = ({ appointments }) => {
  const { roleName } = useAppSelector(selectProfile);
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
            role={roleName}
          />
        ))
      }
    </>
  );
};

export default PatientFullState;
