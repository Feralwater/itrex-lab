import React, { useEffect, useState } from 'react';
import { Field, Formik } from 'formik';
import InputText from 'components/Input/Input';
import {
  AppointmentFormContainer,
  AppointmentStepsContainer,
  ChooseDayStep,
  InputContainer,
  MakeAppointmentButtonContainer,
  SelectDoctorStep,
  SelectTimeslotStep,
} from 'forms/appointmentForms/makeAnAppointment.styles';
import { TIME_SLOTS } from 'mockData/doctors';
import dictionary from 'dictionary/dictionary';
import DatePicker from 'components/DatePicker/DatePicker';
import { PatientsTitle } from 'pages/publicPages/doctorPage/PatientsContainerHeader.styles';
import Button from '../../components/Button/Button';
import CustomSelect from '../../components/Select/Select';
import AppointmentStep from '../../pages/publicPages/patientPage/AppointmentStep';
import TimeSlots from '../../components/TimeSlots/TimeSlots';
import { SpecializationsType } from '../../resources/occupations/occupations.types';
import occupations from '../../resources/occupations/occupations.api';
import { DoctorsBySpecializationIdResponseType } from '../../resources/doctors/doctors.types';
import doctors from '../../resources/doctors/doctors.api';

const MakeAnAppointmentForm = () => {
  const [specializations, setSpecializations] = useState<Array<SpecializationsType>>([]);
  const [doctorNames, setDoctorNames] = useState<Array<DoctorsBySpecializationIdResponseType>>([]);
  const [selectedOccupationID, setSelectedOccupationID] = useState<string>('');
  const [selectedDoctorID, setSelectedDoctorID] = useState<string>('');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const optionsForOccupationsSelect = specializations.map((specialization: SpecializationsType) => ({
    label: specialization.specialization_name,
    value: specialization.id,
  }));
  const optionsForDoctorNamesSelect = doctorNames.map((doctorName: DoctorsBySpecializationIdResponseType) => ({
    label: [doctorName.first_name, doctorName.last_name].join(' '),
    value: doctorName.id,
  }));
  const getOccupations = async () => {
    const response = await occupations.getOccupations();
    setSpecializations(response.data);
  };
  const getDoctors = async () => {
    const response = await doctors.getDoctorsBySpecializationId(selectedOccupationID);
    setDoctorNames(response.data);
  };

  useEffect(() => {
    getOccupations();
  }, []);
  useEffect(() => {
    getDoctors();
  }, [selectedOccupationID]);
  useEffect(() => {
    setDisableDate(!selectedDoctorID);
  }, [selectedDoctorID]);

  return (
    <>
      <PatientsTitle>Make an appointment</PatientsTitle>
      <Formik
        initialValues={{
          occupation: {
            label: '',
            value: '',
          },
          doctorName: {
            label: '',
            value: '',
          },
          reason: '',
          note: '',
          date: null,
          time: null,
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 100);
        }}
      >
        {({ values }) => (
          <AppointmentFormContainer>
            <AppointmentStepsContainer>
              <SelectDoctorStep>
                <AppointmentStep
                  stepDescription={dictionary.makeAppointments.step1Description}
                  stepNumber={1}
                />
                <InputContainer>
                  <Field
                    component={CustomSelect}
                    name="occupation"
                    id="occupation"
                    options={optionsForOccupationsSelect}
                    placeholder="Choose an occupation"
                    labelText="Occupation"
                    setSelectedValue={setSelectedOccupationID}
                  />
                </InputContainer>
                <InputContainer>
                  <Field
                    component={CustomSelect}
                    name="doctorName"
                    id="doctorName"
                    placeholder="Choose a doctor"
                    labelText="Doctor`s name"
                    options={optionsForDoctorNamesSelect}
                    setSelectedValue={setSelectedDoctorID}
                  />
                </InputContainer>
                <InputContainer>
                  <InputText
                    placeholder="Leave a reason for the visit"
                    name="reason"
                    label="Reason for the visit"
                  />
                </InputContainer>
                <InputContainer>
                  <InputText
                    placeholder="Leave a note if needed"
                    name="note"
                    label="Note"
                  />
                </InputContainer>
              </SelectDoctorStep>
              <ChooseDayStep>
                <AppointmentStep stepDescription={dictionary.makeAppointments.step2Description} stepNumber={2} />
                <Field
                  name="date"
                  id="date"
                  component={DatePicker}
                  doctorId={values.doctorName.value}
                  disableDate={disableDate}
                />
              </ChooseDayStep>
              <SelectTimeslotStep>
                <AppointmentStep stepDescription={dictionary.makeAppointments.step3Description} stepNumber={3} />
                <Field
                  name="time"
                  component={TimeSlots}
                  timeSlots={TIME_SLOTS}
                  doctorId={values.doctorName.value}
                  date={values.date}
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
          </AppointmentFormContainer>
        )}
      </Formik>
    </>
  );
};

export default MakeAnAppointmentForm;
