import React from 'react';
import {PatientsButton, PatientsButtonsContainer, PatientsHeader, PatientsTitle} from "./PatientsContainerHeaderStyles";

type PatientsContainerHeaderPropsType = {
    role: string
}

const PatientsContainerHeader: React.VFC<PatientsContainerHeaderPropsType> = ({role}) => {
    function chooseButtons(role: string) {
        switch (role) {
            case "doctor":
                return (<>
                        <PatientsButton to={''} color={"blue"}>Patients</PatientsButton>
                        <PatientsButton to={''} color={"white"}>Resolutions</PatientsButton>
                    </>
                )
            case "patient":
                return (<>
                        <PatientsButton to={''} color={"white"}>Profile</PatientsButton>
                        <PatientsButton to={''} color={"blue"}>Appointments</PatientsButton>
                        <PatientsButton to={''} color={"white"}>Resolutions</PatientsButton>
                    </>
                )
            default:
                return <></>
        }
    }

    return (
        <>
            <PatientsButtonsContainer>
                {chooseButtons(role)}
            </PatientsButtonsContainer>
            <PatientsHeader>
                <PatientsTitle>{role === "doctor" ? "my patients" : "my appointments"}</PatientsTitle>
            </PatientsHeader>
        </>
    );
};

export default PatientsContainerHeader;