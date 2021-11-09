import React from 'react';
import Header from "../header/Header";
import {
    Body,
    BodyDoctorView,
    Patients,
} from "../doctorViews/doctorViewTemplate/DoctorViewTemplateStyles";
import {PatientsTitle} from "../doctorViews/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeaderStyles";
import AppointmentStep from "./AppointmentStep";
import {AppointmentStepsContainer, AppointmentStepsNumbers} from './MakeAppointmentStyles';
import Calendar from "../calendar/Calendar";


const MakeAppointment: React.VFC = () => {
    return (
        <>
            <Header/>
            <Body>
                <BodyDoctorView>
                    <Patients>
                        <PatientsTitle>{"Make an appointment"}</PatientsTitle>
                        <AppointmentStepsNumbers>
                            <AppointmentStep stepDescription={"Choose a day for an appointment"} stepNumber={1}/>
                            <AppointmentStep stepDescription={"Select an available timeslot"} stepNumber={2}/>
                            <AppointmentStep stepDescription={"Select a doctor and define the reason of your visit"}
                                             stepNumber={3}/>
                        </AppointmentStepsNumbers>
                        <AppointmentStepsContainer>
                            <Calendar
                                date={new Date()}
                                years={[2021, 2022]}
                                monthNames={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
                                weekDayNames={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                                onChange={Function.prototype}
                            />
                            <div>
                                time
                            </div>
                            <div>
                                selects
                            </div>
                        </AppointmentStepsContainer>
                    </Patients>
                </BodyDoctorView>
            </Body>
        </>
    );
};

export default MakeAppointment;