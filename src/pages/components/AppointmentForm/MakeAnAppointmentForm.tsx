import React from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import {
  AppointmentFormContainer,
  AppointmentStepsContainer,
  ChooseDayStep,
  MakeAppointmentButtonContainer, NoUnderlineLink,
  SelectDoctorStep,
  SelectTimeslotStep, LinksContainer, DisabledLink,
} from 'pages/components/AppointmentForm/MakeAnAppointment.styles';
import dictionary from 'pages/dictionary/pagesDictionary';
import { PatientsTitle } from 'pages/components/NavigatePanel/NavigatePanel.styles';
import AppointmentsSteps from 'pages/components/AppointmentsSteps/AppointmentsSteps';
import DatePicker from 'pages/components/DatePicker/DatePicker';
import TimeSlots from 'pages/components/TimeSlots/TimeSlots';
import Button from '../../../components/Button/Button';
import CustomSelect from '../../../components/Select/Select';
import appointmentValidationSchema from './validation/appointment.validation';
import makeAppointmentsFieldsData from './fieldsData';
import { appointmentValues, MakeAnAppointmentFormProps } from './form.types';
import { PATH } from '../../../routes/constants';
import { ReactComponent as RightArrow } from '../../../assets/svgImages/rightArrowGrey-icon.svg';

const MakeAnAppointmentForm:React.VFC<MakeAnAppointmentFormProps> = ({
  handleSubmitForm,
  optionsForOccupationsSelect,
  setSelectedOccupationID,
  setSelectedDoctorID,
  optionsForDoctorNamesSelect,
  disableDate,
  setSelectedDate,
  freeTime,
}) => (
  <>
    <LinksContainer>
      <NoUnderlineLink to={PATH.APPOINTMENTS}>{dictionary.patientPage.buttonAppointments}</NoUnderlineLink>
      <RightArrow />
      <DisabledLink to={PATH.CREATE_APPOINTMENT}>{dictionary.form.makeAppointmentTitle}</DisabledLink>
    </LinksContainer>
    <PatientsTitle>{dictionary.form.makeAppointmentTitle}</PatientsTitle>
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
        date: '',
        time: '',
      } as appointmentValues}
      validationSchema={appointmentValidationSchema}
      onSubmit={(values, actions) => {
        handleSubmitForm(values);
        actions.setSubmitting(false);
      }}
    >
      {({
        values,
        isValid,
        dirty,
        touched,
        errors,
        handleSubmit,
        handleBlur,
        handleChange,
      }) => (
        <AppointmentFormContainer onSubmit={handleSubmit}>
          <AppointmentStepsContainer>
            <SelectDoctorStep>
              <AppointmentsSteps
                stepDescription={dictionary.makeAppointments.step1Description}
                stepNumber={1}
              />
              <Field
                component={CustomSelect}
                name="occupation"
                id="occupation"
                options={optionsForOccupationsSelect}
                placeholder="Choose an occupation"
                labelText="Occupation"
                setSelectedValue={setSelectedOccupationID}
              />
              <Field
                component={CustomSelect}
                name="doctorName"
                id="doctorName"
                placeholder="Choose a doctor"
                labelText="Doctor`s name"
                options={optionsForDoctorNamesSelect}
                setSelectedValue={setSelectedDoctorID}
              />
              {makeAppointmentsFieldsData.map((data) => (
                <Field
                  key={data.name}
                  value={(values as FormikValues)[data.name]}
                  isError={(touched as FormikTouched<FormikValues>)[data.name] && (errors as FormikErrors<FormikValues>)[data.name]}
                  errorText={(errors as FormikErrors<FormikValues>)[data.name]}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  {...data}
                />
              ))}
            </SelectDoctorStep>
            <ChooseDayStep>
              <AppointmentsSteps stepDescription={dictionary.makeAppointments.step2Description} stepNumber={2} />
              <Field
                name="date"
                id="date"
                component={DatePicker}
                doctorId={values.doctorName}
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
              {dictionary.form.submitTitle}
            </Button>
          </MakeAppointmentButtonContainer>
        </AppointmentFormContainer>
      )}
    </Formik>
  </>
);

export default MakeAnAppointmentForm;
