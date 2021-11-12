import React, {useState} from 'react';
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
    SelectDoctorStep,
    SelectTimeslotStep,
} from './MakeAppointmentStyles';
import TimeSlots from "../timeSlots/TimeSlots";
import CustomSelect from "../customSelect/CustomSelect";
import {SelectStyles} from "../customSelect/CustomSelectStyles";
import SuperInputText from "../input/SuperInputText";
import {useDispatch} from "react-redux";
import DatePicker from "../../components/datePicker/DatePicker";
import Button from "../../components/button/Button";


const MakeAppointment: React.VFC = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useDispatch();
    return (
        <>
            <Header/>
            <Body>
                <BodyDoctorView>
                    <Patients>
                        <PatientsTitle>{"Make an appointment"}</PatientsTitle>
                        <AppointmentStepsContainer>
                            <ChooseDayStep>
                                <AppointmentStep stepDescription={"Choose a day for an appointment"} stepNumber={1}/>
                                <DatePicker/>
                            </ChooseDayStep>
                            <SelectTimeslotStep>
                                <AppointmentStep stepDescription={"Select an available timeslot"} stepNumber={2}/>
                                <TimeSlots
                                    timeSlots={["12:00 am", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"]}
                                />
                            </SelectTimeslotStep>
                            <SelectDoctorStep>

                                <AppointmentStep stepDescription={"Select a doctor and define the reason of your visit"}
                                                 stepNumber={3}/>
                                <CustomSelect selectStyles={SelectStyles}/>
                                {/*<CustomSelect selectStyles={SelectStyles}/>*/}
                                <SuperInputText onChangeText={setText}/>
                                <SuperInputText onChangeText={dispatch}/>
                                <Button
                                    type={"submit"}
                                    size={"small"}
                                    variant={"secondary"}
                                    icon={"default"}
                                    disabled
                                >Submit</Button>
                            </SelectDoctorStep>
                        </AppointmentStepsContainer>
                    </Patients>
                </BodyDoctorView>
            </Body>
        </>
    );
};

export default MakeAppointment;