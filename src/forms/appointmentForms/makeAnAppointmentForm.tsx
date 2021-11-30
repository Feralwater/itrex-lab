import React, { useEffect, useState } from 'react';
import { Field, Formik } from 'formik';
import InputText from 'components/Input/Tinput';
import {
  AppointmentFormContainer,
  AppointmentStepsContainer,
  ChooseDayStep,
  InputContainer,
  MakeAppointmentButtonContainer,
  SelectDoctorStep,
  SelectTimeslotStep,
} from 'forms/appointmentForms/makeAnAppointment.styles';
import dictionary from 'dictionary/dictionary';
import { PatientsTitle } from 'pages/patientPage/appointmentsHeader/appointmentsHeader.styles';
import AppointmentsSteps from 'pages/patientPage/appointmentsSteps/appointmentsSteps';
import DatePicker from 'pages/patientPage/components/DatePicker/datePicker';
import TimeSlots from 'pages/patientPage/components/TimeSlots/timeSlots';
import Button from '../../components/Button/Button';
import CustomSelect from '../../components/Select/Select';
import { SpecializationsType } from '../../resources/occupations/occupations.types';
import occupations from '../../resources/occupations/occupations.api';
import { DoctorsBySpecializationIdResponseType } from '../../resources/doctors/doctors.types';
import doctors from '../../resources/doctors/doctors.api';
import appointments from '../../resources/appointments/appointments.api';
import appointmentValidationSchema from './validation/appointment.validation';
import { CustomErrorMessage } from '../authForms/authForm.styles';
import { useAppDispatch } from '../../hooks';
import { appointment } from '../../redux/actions/appointment.actions';

const MakeAnAppointmentForm:React.VFC = () => {
  const [specializations, setSpecializations] = useState<Array<SpecializationsType>>([]);
  const [doctorNames, setDoctorNames] = useState<Array<DoctorsBySpecializationIdResponseType>>([]);
  const [selectedOccupationID, setSelectedOccupationID] = useState<string>('');
  const [selectedDoctorID, setSelectedDoctorID] = useState<string>('');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string|null>(null);
  const [freeTime, setFreeTime] = useState<Array<string>>([]);

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
    if (selectedOccupationID) {
      const { data } = await doctors.getDoctorsBySpecializationId(selectedOccupationID);
      setDoctorNames(data);
    } else {
      setDoctorNames([]);
    }
  };
  const getFreeTime = async () => {
    if (selectedOccupationID) {
      const { data } = await appointments.getFreeTime(selectedDate, selectedDoctorID);
      setFreeTime(data);
    } else {
      setFreeTime([]);
    }
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
  useEffect(() => {
    getFreeTime();
  }, [selectedDate, selectedDoctorID]);
  const dispatch = useAppDispatch();
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
          time: '',
        }}
        validationSchema={appointmentValidationSchema}
        onSubmit={async (values, actions) => {
          const date = values.time;
          const { reason } = values;
          const { note } = values;
          const doctorID = values.doctorName.value;
          try {
            dispatch(appointment.pending({
              date, reason, note, doctorID,
            }));
            actions.setSubmitting(false);
          } catch (e) {
            // @ts-ignore
            alert(e.message);
          }
        }}
      >
        {({
          values,
          isValid,
          dirty,
          touched,
          errors,
        }) => (
          <AppointmentFormContainer>
            <AppointmentStepsContainer>
              <SelectDoctorStep>
                <AppointmentsSteps
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
                  <Field
                    component={InputText}
                    placeholder="Leave a reason for the visit"
                    name="reason"
                    label="Reason for the visit"
                  />
                  {touched.reason && errors.reason
                  && <CustomErrorMessage name="reason" component="span" />}
                </InputContainer>
                <InputContainer>
                  <Field
                    component={InputText}
                    placeholder="Leave a note if needed"
                    name="note"
                    label="Note"
                  />
                  {touched.note && errors.note
                  && <CustomErrorMessage name="note" component="span" />}
                </InputContainer>
              </SelectDoctorStep>
              <ChooseDayStep>
                <AppointmentsSteps stepDescription={dictionary.makeAppointments.step2Description} stepNumber={2} />
                <Field
                  name="date"
                  id="date"
                  component={DatePicker}
                  doctorId={values.doctorName.value}
                  disableDate={disableDate}
                  setSelectedDate={setSelectedDate}
                />
              </ChooseDayStep>
              <SelectTimeslotStep>
                <AppointmentsSteps stepDescription={dictionary.makeAppointments.step3Description} stepNumber={3} />
                <Field
                  name="time"
                  component={TimeSlots}
                  freeTime={freeTime}
                />
              </SelectTimeslotStep>
            </AppointmentStepsContainer>
            <MakeAppointmentButtonContainer>
              <Button
                type="submit"
                size="large"
                variant="primary"
                icon="default"
                disabled={!(isValid && dirty)}
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
