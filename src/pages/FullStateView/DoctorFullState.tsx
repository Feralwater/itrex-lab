import { AppointmentCard } from 'components';
import React from 'react';
import { AppointmentsForDoctor } from '../../resources/appointments/appointments.types';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';

const DoctorFullState: React.VFC<AppointmentsForDoctor> = ({ appointments, doctorsResolutions }) => {
  const { roleName } = useAppSelector(selectProfile);
  return (
    <>
      {
        appointments.map((appointment) => (
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
            doctorsResolutions={doctorsResolutions}
          />
        ))
      }
    </>
  );
};

export default DoctorFullState;
