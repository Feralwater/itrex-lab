import React from 'react';
import PatientCard from "../../patientCard/PatientCard";

export type PatientType = {
    avatar: string
    firstName: string
    lastName: string
    status: string
    time: string
    description: string
}
export type DoctorViewFullStatePropsType = {
    patients: Array<PatientType>
}

const DoctorViewFullState: React.VFC<DoctorViewFullStatePropsType> = ({patients}) => {
    return (<>
            {
                patients.map((patient, index) => <PatientCard key={index}
                                                              firstName={patient.firstName}
                                                              lastName={patient.lastName}
                                                              avatar={patient.avatar}
                                                              status={patient.status}
                                                              time={patient.time}
                                                              description={patient.description}
                />)
            }
        </>
    );
};

export default DoctorViewFullState;