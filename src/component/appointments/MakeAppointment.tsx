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
import InputText from "../../components/Input/InputText";
import {useDispatch} from "react-redux";
import DatePicker from "../../components/DatePicker/DatePicker";
import Button from "../../components/Button/Button";
import CustomSelect from "../../components/Select/Select";
import {getDoctors, getOccupations, users} from "../../mockData/doctors";
import {addDoctorAC, addNoteAC, addOccupationAC, addReasonAC} from "../../redux/reducers/appointmentReducer";


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
                                <CustomSelect
                                    valuesForSelect={getOccupations(users)}
                                    placeholder={'Choose an occupation'}
                                    addActionCreator={addOccupationAC}
                                />
                                <CustomSelect
                                    valuesForSelect={getDoctors(users)}
                                    placeholder={'Choose a doctor'}
                                    addActionCreator={addDoctorAC}
                                />
                                <InputText
                                    addActionCreator={addReasonAC}
                                    onChangeText={setText}
                                    placeholder={"Headache, pant"}
                                />
                                <InputText
                                    addActionCreator={addNoteAC}
                                    onChangeText={dispatch}
                                    placeholder={"Leave a note if needed"}
                                />
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