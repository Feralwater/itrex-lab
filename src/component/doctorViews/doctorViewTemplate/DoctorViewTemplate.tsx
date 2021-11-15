import React from 'react';
import Header from "../../header/Header";
import {getPatients} from "../../../mockData/patients";
import DoctorViewFullState from "../doctorViewFullState/DoctorViewFullState";
import DoctorViewEmptyState from "../doctorViewEmptyState/DoctorViewEmptyState";
import PatientsContainerHeader from "./patientsContainerHeader/PatientsContainerHeader";
import {Body, BodyDoctorView, Patients, PatientsContainer} from "./DoctorViewTemplate.styles";

const DoctorViewTemplate = () => {
    const patients = getPatients()
    return (
        <>
            <Header/>
            <Body>
                <BodyDoctorView>
                    <Patients>
                        <PatientsContainerHeader role={"doctor"}/>
                        <PatientsContainer patientsLength={patients.length}>
                            {patients.length > 0
                                ? <DoctorViewFullState patients={patients}/>
                                : <DoctorViewEmptyState/>
                            }
                        </PatientsContainer>
                    </Patients>
                </BodyDoctorView>
            </Body>
        </>
    );
};

export default DoctorViewTemplate;