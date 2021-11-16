import React from 'react';
import PatientsContainer from './doctorViews/doctorViewTemplate/DoctorViewTemplate.styles';
import PatientsContainerHeader from './doctorViews/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeader';
import DoctorViewFullState from './doctorViews/doctorViewFullState/DoctorViewFullState';
import DoctorViewEmptyState from './doctorViews/doctorViewEmptyState/DoctorViewEmptyState';
import getAppointments from '../../mockData/appointments';
import MessageTemplate from '../../components/Message/Message';

const AppointmentsTemplate:React.VFC = () => {
  const appointments = getAppointments();
  return (
    <>
      <PatientsContainerHeader userType="patient" />
      <PatientsContainer patientsLength={appointments.length}>
        {appointments.length > 0
          ? <DoctorViewFullState patients={appointments} />
          : <DoctorViewEmptyState />}
      </PatientsContainer>
      <MessageTemplate isSuccess />
    </>
  );
};

export default AppointmentsTemplate;
