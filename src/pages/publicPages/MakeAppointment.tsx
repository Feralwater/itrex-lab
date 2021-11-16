import React from 'react';
import { useSelector } from 'react-redux';
import { PatientsTitle } from './doctorViews/doctorViewTemplate/patientsContainerHeader/PatientsContainerHeader.styles';
import AppointmentStep from './AppointmentStep';
import {
  AppointmentStepsContainer,
  ChooseDayStep, InputContainer,
  MakeAppointmentButtonContainer,
  SelectDoctorStep,
  SelectTimeslotStep,
} from './MakeAppointment.styles';
import TimeSlots from '../../components/TimeSlots/TimeSlots';
import InputText from '../../components/Input/InputText';
import DatePicker from '../../components/DatePicker/DatePicker';
import Button from '../../components/Button/Button';
import CustomSelect from '../../components/Select/Select';
import { getDoctors, getOccupations, users } from '../../mockData/doctors';
import {
  addDoctorAC, addNoteAC, addOccupationAC, addReasonAC,
} from '../../redux/reducers/appointmentReducer';
import { AppRootStateType } from '../../redux/store';
import { MakeAppointmentPropsType } from './MakeAppointment.types';
import dictionary from '../../dictionary/dictionary';

const MakeAppointment: React.VFC<MakeAppointmentPropsType> = ({
  timeSlots,
}) => {
  const occupation = useSelector<AppRootStateType, string>((state) => state.appointment.label);

  return (
    <>
      <PatientsTitle>Make an appointment</PatientsTitle>
      <AppointmentStepsContainer>
        <SelectDoctorStep>
          <AppointmentStep
            stepDescription={dictionary.makeAppointments.step1Description}
            stepNumber={1}
          />
          <InputContainer>
            <CustomSelect
              valuesForSelect={getOccupations(users)}
              placeholder="Choose an occupation"
              addActionCreator={addOccupationAC}
              labelText="Occupation"
              id="Occupation"
            />
          </InputContainer>
          <InputContainer>
            <CustomSelect
              valuesForSelect={getDoctors(users, occupation)}
              placeholder="Choose a doctor"
              addActionCreator={addDoctorAC}
              labelText="Doctor`s Name"
              id="Doctor`s Name"
            />
          </InputContainer>
          <InputContainer>
            <InputText
              inputLabel="Reason for the visit"
              addActionCreator={addReasonAC}
              placeholder="Leave a reason for the visit"
            />
          </InputContainer>
          <InputContainer>
            <InputText
              inputLabel="Note"
              addActionCreator={addNoteAC}
              placeholder="Leave a note if needed"
            />
          </InputContainer>
        </SelectDoctorStep>
        <ChooseDayStep>
          <AppointmentStep stepDescription={dictionary.makeAppointments.step2Description} stepNumber={2} />
          <DatePicker />
        </ChooseDayStep>
        <SelectTimeslotStep>
          <AppointmentStep stepDescription={dictionary.makeAppointments.step3Description} stepNumber={3} />
          <TimeSlots
            timeSlots={timeSlots}
          />
        </SelectTimeslotStep>
      </AppointmentStepsContainer>
      <MakeAppointmentButtonContainer>
        <Button
          type="submit"
          size="large"
          variant="primary"
          icon="default"
        >
          Submit
        </Button>
      </MakeAppointmentButtonContainer>
    </>
  );
};

export default MakeAppointment;
