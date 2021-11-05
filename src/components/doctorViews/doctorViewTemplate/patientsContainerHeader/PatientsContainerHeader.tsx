import React from 'react';
import {PatientsButton, PatientsButtonsContainer, PatientsHeader, PatientsTitle} from "./PatientsContainerHeaderStyles";

const PatientsContainerHeader = () => {
    return (
        <>
            <PatientsButtonsContainer>
                <PatientsButton to={''} color={"blue"}>Patients</PatientsButton>
                <PatientsButton to={''} color={"white"}>Resolutions</PatientsButton>
            </PatientsButtonsContainer>
            <PatientsHeader>
                <PatientsTitle>my patients</PatientsTitle>
            </PatientsHeader>
        </>
    );
};

export default PatientsContainerHeader;