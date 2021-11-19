import React from 'react';
import { Field, Formik } from 'formik';
import InputText from 'components/Input/Input';
import {
  AppointmentFormContainer,
  AppointmentStepsContainer, ChooseDayStep, InputContainer,
  MakeAppointmentButtonContainer, SelectDoctorStep, SelectTimeslotStep,
} from 'forms/appointmentForms/makeAnAppointment.styles';
import {
  getOccupations, users, TIME_SLOTS, getDoctors,
} from 'mockData/doctors';
import dictionary from 'dictionary/dictionary';
import DatePicker from 'components/DatePicker/DatePicker';
import { PatientsTitle } from 'pages/publicPages/doctorPage/PatientsContainerHeader.styles';
import Button from '../../components/Button/Button';
import CustomSelect from '../../components/Select/Select';
import AppointmentStep from '../../pages/publicPages/patientPage/AppointmentStep';
import TimeSlots from '../../components/TimeSlots/TimeSlots';

const occupations: any = getOccupations(users)
  .map((v: any) => ({
    value: v.doctorID,
    label: v.selectedValue,
  }));

const MakeAnAppointmentForm = () => (
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
                  options={occupations}
                  placeholder="Leave a reason for the visit"
                  labelText="Reason for the visit"
                />
              </InputContainer>
              <InputContainer>
                <Field
                  component={CustomSelect}
                  name="doctorName"
                  id="doctorName"
                  placeholder="Leave a note if needed"
                  labelText="Note"
                  options={getDoctors(users, values.occupation.label)
                    .map((v) => ({
                      value: v.doctorID,
                      label: v.selectedValue,
                    }))}
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

export default MakeAnAppointmentForm;
