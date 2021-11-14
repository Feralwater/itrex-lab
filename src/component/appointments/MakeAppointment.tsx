import React from 'react';
import Header from "../header/Header";
import {
    Body,
    BodyDoctorView,
    Patients,
} from "../doctorViews/doctorViewTemplate/DoctorViewTemplateStyles";
import {PatientsTitle} from "../doctorViews/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeaderStyles";
import AppointmentStep from "./AppointmentStep";
import {
    AppointmentStepsContainer,
    ChooseDayStep,
    MakeAppointmentButtonContainer,
    SelectDoctorStep,
    SelectTimeslotStep,
} from './MakeAppointmentStyles';
import TimeSlots from "../timeSlots/TimeSlots";
import InputText from "../../components/Input/InputText";
import DatePicker from "../../components/DatePicker/DatePicker";
import Button from "../../components/Button/Button";
import CustomSelect from "../../components/Select/Select";
import {getDoctors, getOccupations, users} from "../../mockData/doctors";
import {addDoctorAC, addNoteAC, addOccupationAC, addReasonAC} from "../../redux/reducers/appointmentReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";


const MakeAppointment: React.VFC = () => {
    const occupation = useSelector<AppRootStateType, string>(state => state.appointment.label);
    return (
        <>
            <Header/>
            <Body>
                <BodyDoctorView>
                    <Patients>
                        <PatientsTitle>{"Make an appointment"}</PatientsTitle>
                        <AppointmentStepsContainer>
                            <SelectDoctorStep>
                                <AppointmentStep stepDescription={"Select a doctor and define the reason of your visit"}
                                                 stepNumber={1}/>
                                <CustomSelect
                                    valuesForSelect={getOccupations(users)}
                                    placeholder={'Choose an occupation'}
                                    addActionCreator={addOccupationAC}
                                />
                                <CustomSelect
                                    valuesForSelect={getDoctors(users, occupation)}
                                    placeholder={'Choose a doctor'}
                                    addActionCreator={addDoctorAC}
                                />
                                <InputText
                                    inputLabel={"Reason for the visit"}
                                    addActionCreator={addReasonAC}
                                    placeholder={"Leave a reason for the visit"}
                                />
                                <InputText
                                    inputLabel={"Note"}
                                    addActionCreator={addNoteAC}
                                    placeholder={"Leave a note if needed"}
                                />
                            </SelectDoctorStep>
                            <ChooseDayStep>
                                <AppointmentStep stepDescription={"Choose a day for an appointment"} stepNumber={2}/>
                                <DatePicker/>
                            </ChooseDayStep>
                            <SelectTimeslotStep>
                                <AppointmentStep stepDescription={"Select an available timeslot"} stepNumber={3}/>
                                <TimeSlots
                                    timeSlots={["12:00 am", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"]}
                                />
                            </SelectTimeslotStep>
                        </AppointmentStepsContainer>
                        <MakeAppointmentButtonContainer>
                            <Button
                                type={"submit"}
                                size={"small"}
                                variant={"secondary"}
                                icon={"default"}
                                disabled
                            >Submit</Button>
                        </MakeAppointmentButtonContainer>
                    </Patients>
                </BodyDoctorView>
            </Body>
        </>
    );
};

export default MakeAppointment;