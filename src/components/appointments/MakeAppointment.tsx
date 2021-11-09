import React, {useState} from 'react';
import Header from "../header/Header";
import {
    Body,
    BodyDoctorView,
    Patients,
} from "../doctorViews/doctorViewTemplate/DoctorViewTemplateStyles";
import {PatientsTitle} from "../doctorViews/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeaderStyles";
import AppointmentStep from "./AppointmentStep";
import {AppointmentStepsContainer, AppointmentStepsNumbers} from './MakeAppointmentStyles';
import CustomCalendar from "../calendar/CustomCalendar";
import TimeSlots from "../timeSlots/TimeSlots";


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
                            <div>
                                <CustomCalendar/>
                            </div>
                            <div>
                                <TimeSlots
                                    timeSlots={["12:00 pm", "1:00 pm", "12:00 pm", "1:00 pm", "12:00 pm", "1:00 pm", "12:00 pm", "1:00 pm", "12:00 pm", "1:00 pm"]}
                                />
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