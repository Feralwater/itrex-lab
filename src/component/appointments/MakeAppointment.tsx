import React from 'react';
import Header from "../header/Header";
import {
    Body,
    BodyDoctorView,
    Patients,
} from "../doctorViews/doctorViewTemplate/DoctorViewTemplate.styles";
import {PatientsTitle} from "../doctorViews/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeaderStyles";
import AppointmentStep from "./AppointmentStep";
import {
    AppointmentStepsContainer,
    ChooseDayStep, InputContainer,
    MakeAppointmentButtonContainer,
    SelectDoctorStep,
    SelectTimeslotStep,
} from './MakeAppointment.styles';
import TimeSlots from "../timeSlots/TimeSlots";
import InputText from "../../components/Input/InputText";
import DatePicker from "../../components/DatePicker/DatePicker";
import Button from "../../components/Button/Button";
import CustomSelect from "../../components/Select/Select";
import {getDoctors, getOccupations, users} from "../../mockData/doctors";
import {addDoctorAC, addNoteAC, addOccupationAC, addReasonAC} from "../../redux/reducers/appointmentReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {MakeAppointmentPropsType} from "./MakeAppointment.types";


const MakeAppointment: React.VFC<MakeAppointmentPropsType> = ({
                                                                  timeSlots
                                                              }) => {
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
                                <InputContainer>
                                    <CustomSelect
                                        valuesForSelect={getOccupations(users)}
                                        placeholder={'Choose an occupation'}
                                        addActionCreator={addOccupationAC}
                                        label={"Occupation"}
                                        id={"Occupation"}
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <CustomSelect
                                        valuesForSelect={getDoctors(users, occupation)}
                                        placeholder={'Choose a doctor'}
                                        addActionCreator={addDoctorAC}
                                        label={"Doctor`s Name"}
                                        id={"Doctor`s Name"}
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <InputText
                                        inputLabel={"Reason for the visit"}
                                        addActionCreator={addReasonAC}
                                        placeholder={"Leave a reason for the visit"}
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <InputText
                                        inputLabel={"Note"}
                                        addActionCreator={addNoteAC}
                                        placeholder={"Leave a note if needed"}
                                    />
                                </InputContainer>
                            </SelectDoctorStep>
                            <ChooseDayStep>
                                <AppointmentStep stepDescription={"Choose a day for an appointment"} stepNumber={2}/>
                                <DatePicker/>
                            </ChooseDayStep>
                            <SelectTimeslotStep>
                                <AppointmentStep stepDescription={"Select an available timeslot"} stepNumber={3}/>
                                <TimeSlots
                                    timeSlots={timeSlots}
                                />
                            </SelectTimeslotStep>
                        </AppointmentStepsContainer>
                        <MakeAppointmentButtonContainer>
                            <Button
                                type={"submit"}
                                size={"small"}
                                variant={"primary"}
                                icon={"default"}
                            >Submit</Button>
                        </MakeAppointmentButtonContainer>
                    </Patients>
                </BodyDoctorView>
            </Body>
        </>
    );
};

export default MakeAppointment;