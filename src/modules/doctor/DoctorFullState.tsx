import React, { useMemo } from 'react';
import { AppointmentForDoctorFulfilled } from 'redux/actions.types';
import { ReactComponent as Board } from 'assets/svg/board-icon.svg';
import { MemoAppointmentCard } from 'components/AppointmentCard/AppointmentCard';

export interface DoctorFullStateProps{
  appointments: Array<AppointmentForDoctorFulfilled>
}

export const DoctorFullState:React.VFC<DoctorFullStateProps> = ({ appointments }) => {
  const MemoBoard = useMemo(() => <Board />, []);
  return (
    <>
      {appointments.map((appointment) => (
        <MemoAppointmentCard
          photo={appointment.photo}
          key={appointment.appointmentID}
          appointmentID={appointment.appointmentID}
          firstName={appointment.firstName}
          lastName={appointment.lastName}
          status={appointment.appointmentStatus}
          time={appointment.visitDate}
          cardIcon={MemoBoard}
          cardDescription={appointment.resolution?.resolution}
          resolutionID={appointment.resolution?.id}
          shouldRenderAppointmentCardSettingsButton
        />
      ))}
    </>
  );
};
