import React, { useMemo } from 'react';
import { AppointmentForPatient } from 'resources/appointments/appointments.types';
import { ReactComponent as Heart } from 'assets/svg/heart-icon.svg';
import { AppointmentCard } from 'components/AppointmentCard/AppointmentCard';

interface PatientFullStateProps{
  appointments: Array<AppointmentForPatient>
}

export const PatientFullState:React.VFC<PatientFullStateProps> = ({ appointments }) => {
  const MemoHeart = useMemo(() => <Heart />, []);
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
            photo={appointment.doctor.photo}
            status={appointment.status}
            time={appointment.visit_date}
            cardIcon={MemoHeart}
            cardDescription={appointment.reason}
            shouldRenderAppointmentCardSettingsButton={false}
          />
        ))
      }
    </>
  );
};
