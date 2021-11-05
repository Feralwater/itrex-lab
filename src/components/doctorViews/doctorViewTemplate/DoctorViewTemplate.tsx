import React from 'react';
import Header from "../../header/Header";
import {getPatients} from "../../../actions/patients";
import DoctorViewFullState from "../doctorViewFullState/DoctorViewFullState";
import DoctorViewEmptyState from "../doctorViewEmptyState/DoctorViewEmptyState";
import PatientsContainerHeader from "./patientsContainerHeader/PatientsContainerHeader";
import {Body, BodyDoctorView, Patients, PatientsContainer} from "./DoctorViewTemplateStyles";

const DoctorViewTemplate = () => {
    const patients = getPatients()
    return (
        <>
            <Header/>
            <Body>
                <BodyDoctorView>
                    <Patients>
                        <PatientsContainerHeader/>
                        <PatientsContainer patientsLength={patients.length}>
                            {patients.length > 0 ? <DoctorViewFullState patients={patients}/> : <DoctorViewEmptyState/>}
                        </PatientsContainer>
                    </Patients>
                </BodyDoctorView>
            </Body>
        </>
    );
};

export default DoctorViewTemplate;
// className={patients.length > 0 ? style.patients__container : style.patients__container_empty}