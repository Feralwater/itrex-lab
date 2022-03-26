import React from 'react';
import { useAppSelector } from 'hooks';
import { selectAppointmentsForDoctor } from 'redux/reducers';
import { SelectedPatientImage, SelectedPatientInfo } from 'components/ControlCardPanel/ControlCardPanel.styles';
import { componentsDictionary } from 'components/dictionary/componentsDictionary';

export interface PatientInfoProps{
  appointmentID:string
}
export const PatientInfo:React.VFC<PatientInfoProps> = ({ appointmentID }) => {
  const { appointments } = useAppSelector(selectAppointmentsForDoctor);
  const selectedAppointment = appointments.find((appointment) => appointment.appointmentID === appointmentID);
  return (
    <SelectedPatientInfo>
      <SelectedPatientImage
        src={selectedAppointment?.photo}
        alt={componentsDictionary.controlCardPanel.selectedPatientImageAlt}
      />
      <span>
        {selectedAppointment?.firstName}
        {' '}
        {selectedAppointment?.lastName}
      </span>
    </SelectedPatientInfo>
  );
};
