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
} from 'components/AppointmentForm/MakeAnAppointment.styles';
import { PatientsTitle } from 'components/NavigatePanel/NavigatePanel.styles';
import { AppointmentsSteps, DatePicker, TimeSlots } from 'components';
import pagesDictionary from 'pages/dictionary/pagesDictionary';
import { Button } from '../Button';
import appointmentValidationSchema from './validation/appointment.validation';
import makeAppointmentsFieldsData from './fieldsData';
import { appointmentValues, MakeAnAppointmentFormProps } from './form.types';
import { PATH } from '../../routes/constants';
import { ReactComponent as RightArrow } from '../../assets/svg/rightArrowGrey-icon.svg';
import { SelectForAppointmentFormContainer } from '../Select';

export const MakeAnAppointmentForm: React.VFC<MakeAnAppointmentFormProps> = ({
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
      <NoUnderlineLink to={PATH.APPOINTMENTS}>{pagesDictionary.patientPage.buttonAppointments}</NoUnderlineLink>
      <RightArrow />
      <DisabledLink to={PATH.CREATE_APPOINTMENT}>{pagesDictionary.form.makeAppointmentTitle}</DisabledLink>
    </LinksContainer>
    <PatientsTitle>{pagesDictionary.form.makeAppointmentTitle}</PatientsTitle>
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
                stepDescription={pagesDictionary.makeAppointments.step1Description}
                stepNumber={1}
              />
              <Field
                component={SelectForAppointmentFormContainer}
                name="occupation"
                id="occupation"
                options={optionsForOccupationsSelect}
                placeholder={pagesDictionary.makeAppointmentsForm.occupationPlaceholder}
                labelText={pagesDictionary.makeAppointmentsForm.occupationLabelText}
                setSelectedValue={setSelectedOccupationID}
              />
              <Field
                component={SelectForAppointmentFormContainer}
                name="doctorName"
                id="doctorName"
                placeholder={pagesDictionary.makeAppointmentsForm.doctorNamePlaceholder}
                labelText={pagesDictionary.makeAppointmentsForm.doctorNameLabelText}
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
              <AppointmentsSteps stepDescription={pagesDictionary.makeAppointments.step2Description} stepNumber={2} />
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
              <AppointmentsSteps stepDescription={pagesDictionary.makeAppointments.step3Description} stepNumber={3} />
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
              {pagesDictionary.form.submitTitle}
            </Button>
          </MakeAppointmentButtonContainer>
        </AppointmentFormContainer>
      )}
    </Formik>
  </>
);
