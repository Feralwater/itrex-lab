import React from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import {
  AppointmentFormContainer,
  AppointmentStepsContainer,
  ChooseDayStep,
  NoUnderlineLink,
  SelectDoctorStep,
  SelectTimeslotStep, LinksContainer, DisabledLink,
} from 'components/AppointmentForm/MakeAppointment.styles';
import {
  AppointmentsSteps, DatePicker, H1, SubmitOrLoader, TimeSlots,
} from 'components';
import pagesDictionary from 'pages/dictionary/pagesDictionary';
import appointmentValidationSchema from './validation/appointment.validation';
import makeAppointmentsFieldsData from './fieldsData';
import { MakeAppointmentFormProps } from './form.types';
import { PATH } from '../../routes/constants';
import { ReactComponent as RightArrow } from '../../assets/svg/rightArrowGrey-icon.svg';
import { SelectForAppointmentFormContainer } from '../Select';
import { initialValuesForAppointmentForm } from './constants';

export const MakeAppointmentForm: React.VFC<MakeAppointmentFormProps> = ({
  handleSubmitForm,
  optionsForOccupationsSelect,
  setSelectedOccupationID,
  setSelectedDoctorID,
  optionsForDoctorNamesSelect,
  disableDate,
  setSelectedDate,
  freeTime,
  makeAppointmentFetchStatus,
}) => (
  <>
    <LinksContainer>
      <NoUnderlineLink to={PATH.APPOINTMENTS}>{pagesDictionary.patientPage.buttonAppointments}</NoUnderlineLink>
      <RightArrow />
      <DisabledLink to={PATH.CREATE_APPOINTMENT}>{pagesDictionary.form.makeAppointmentTitle}</DisabledLink>
    </LinksContainer>
    <H1>{pagesDictionary.form.makeAppointmentTitle}</H1>
    <Formik
      initialValues={initialValuesForAppointmentForm}
      validationSchema={appointmentValidationSchema}
      onSubmit={(values, actions) => {
        handleSubmitForm(values);
        setSelectedDoctorID('');
        actions.resetForm();
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
                value={values.occupation.value ? values.occupation : ''}
              />
              <Field
                component={SelectForAppointmentFormContainer}
                name="doctorName"
                id="doctorName"
                placeholder={pagesDictionary.makeAppointmentsForm.doctorNamePlaceholder}
                labelText={pagesDictionary.makeAppointmentsForm.doctorNameLabelText}
                options={optionsForDoctorNamesSelect}
                setSelectedValue={setSelectedDoctorID}
                value={values.doctorName.value ? values.doctorName : ''}
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
                value={values.date}
              />
            </ChooseDayStep>
            <SelectTimeslotStep>
              <AppointmentsSteps stepDescription={pagesDictionary.makeAppointments.step3Description} stepNumber={3} />
              <Field
                name="time"
                component={TimeSlots}
                freeTime={freeTime}
                value={values.time}
                date={values.date}
              />
            </SelectTimeslotStep>
          </AppointmentStepsContainer>
          <SubmitOrLoader
            dirty={dirty}
            isValid={isValid}
            status={makeAppointmentFetchStatus}
            pickedTime={!!values.time}
          >
            {pagesDictionary.form.submitTitle}
          </SubmitOrLoader>
        </AppointmentFormContainer>
      )}
    </Formik>
  </>
);
