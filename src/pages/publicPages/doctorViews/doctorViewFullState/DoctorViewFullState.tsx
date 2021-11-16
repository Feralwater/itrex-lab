import React from 'react';
import PatientCard from '../../../../components/PatientCard/PatientCard';

export type PatientType = {
    avatar: string
    firstName: string
    lastName: string
    status?: string
    doctor?: string
    time: string
    description: string
    role: string
}
export type DoctorViewFullStatePropsType = {
    patients: Array<PatientType>
}

const DoctorViewFullState: React.VFC<DoctorViewFullStatePropsType> = ({ patients }) => (
  <>
    {
                patients.map((patient) => (
                  <PatientCard
                    key={patient.firstName}
                    firstName={patient.firstName}
                    lastName={patient.lastName}
                    avatar={patient.avatar}
                    status={patient.status}
                    time={patient.time}
                    description={patient.description}
                    role={patient.role}
                  />
                ))
            }
  </>
);

export default DoctorViewFullState;
