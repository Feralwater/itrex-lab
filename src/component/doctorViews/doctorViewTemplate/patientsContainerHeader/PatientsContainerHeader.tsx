import React from 'react';
import {
    ButtonLeftPlusIcon,
    CreateAppointmentButton,
    PatientsButton,
    PatientsButtonsContainer,
    PatientsHeader,
    PatientsTitle
} from "./PatientsContainerHeaderStyles";
import {ButtonWrapper} from "../../../forms/FormStyles";

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
                <PatientsTitle>{role === "doctor" ? "My Patients" : "My Appointments"}</PatientsTitle>
                {
                    role === "patient" && <ButtonWrapper>
                        <ButtonLeftPlusIcon/>
                        <CreateAppointmentButton to={"/make-an-appointment"}
                        >Create an appointment</CreateAppointmentButton>
                    </ButtonWrapper>
                }
            </PatientsHeader>
        </>
    );
};

export default PatientsContainerHeader;