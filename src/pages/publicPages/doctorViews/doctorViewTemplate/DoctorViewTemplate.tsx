import React from 'react';
import { getPatients } from '../../../../mockData/patients';
import DoctorViewFullState from '../doctorViewFullState/DoctorViewFullState';
import DoctorViewEmptyState from '../doctorViewEmptyState/DoctorViewEmptyState';
import PatientsContainerHeader from './patientsContainerHeader/PatientsContainerHeader';
import PatientsContainer from './DoctorViewTemplate.styles';

const DoctorViewTemplate:React.VFC = () => {
  const patients = getPatients();
  return (
    <>
      <PatientsContainerHeader userType="doctor" />
      <PatientsContainer patientsLength={patients.length}>
        {patients.length > 0
          ? <DoctorViewFullState patients={patients} />
          : <DoctorViewEmptyState />}
      </PatientsContainer>
    </>
  );
};

export default DoctorViewTemplate;
