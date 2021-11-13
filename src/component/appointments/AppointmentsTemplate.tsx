import React from 'react';
import Header from "../header/Header";
import {
    Body,
    BodyDoctorView,
    Patients,
    PatientsContainer
} from "../doctorViews/doctorViewTemplate/DoctorViewTemplateStyles";
import PatientsContainerHeader from "../doctorViews/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeader";
import DoctorViewFullState from "../doctorViews/doctorViewFullState/DoctorViewFullState";
import DoctorViewEmptyState from "../doctorViews/doctorViewEmptyState/DoctorViewEmptyState";
import {getAppointments} from "../../mockData/appointments";
import MessageTemplate from "../../components/Message/Message";

const AppointmentsTemplate = () => {
    const appointments = getAppointments()
    return (
        <>
            <Header/>
            <Body>
                <BodyDoctorView>
                    <Patients>
                        <PatientsContainerHeader role={"patient"}/>
                        <PatientsContainer patientsLength={appointments.length}>
                            {appointments.length > 0
                                ? <DoctorViewFullState patients={appointments}/>
                                : <DoctorViewEmptyState/>
                            }
                        </PatientsContainer>
                        <MessageTemplate isSuccess={true}/>
                    </Patients>
                </BodyDoctorView>
            </Body>
        </>
    );
};

export default AppointmentsTemplate;