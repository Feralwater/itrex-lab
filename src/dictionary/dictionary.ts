import { DictionaryType } from './dictionary.types';

const dictionary: DictionaryType = {
  ViewEmptyState: {
    medicalHistoryTextPart1: 'You have no AppointmentsForDoctorContainer yet.',
    medicalHistoryTextPart2: 'To create a patient profile, please contact your administrator.',
  },
  error404: {
    errorNumber: '404 Error',
    errorMessage: 'oops, the page you are looking for can`t be found!😭',
  },
  message: {
    messageTitleSuccess: 'Success message goes here',
    messageTitleError: 'Error message goes here',
    successMessageText: 'We show this message if something awesome has happened. You are awesome too',
    errorMessageText: 'We show this message if something irreparable has happened. But there is nothing irreparable',
    error400Text: 'Validation error. Login should be mail',
    error401Text: 'Wrong data. Please check it and try again',
    error403Text: 'Access error. Please check it and try again',
    error500Text: 'Server error. Please try again later',
  },
  header: {
    avatarAlt: 'user`s avatar',
    logoText: 'palm clinic',
  },
  form: {
    restoreTitle: 'Restore Password',
    makeAppointmentTitle: 'Make an appointment',
    restoreMessage: ' Please use your email address, and we’ll send you the link to reset your password',
    resetLinkText: 'Send Reset Link',
    forgotLinkText: 'Forgot Password?',
    signInTitle: 'Sign In',
    signUpTitle: 'Sign Up',
    submitTitle: 'Submit',
  },
  authorisedPages: {
    sendEmailMessage1: 'An email has been sent to',
    sendEmailMessage2: 'Check your inbox, and click the reset link provided.',
    checkEmailMessage: 'Check your inbox, and click the reset link provided.',
    signUpQuestion: 'Don`t have an account?',
    signUp: 'Sign up',
    signInQuestion: 'Already have an account?',
    signIn: 'Sign in',
  },
  errorPage: {
    errorNumber: '404 Error',
    errorMessage: 'oops, the page you are looking for can`t be found!😭',
  },
  doctorPage: {
    title: 'My Patients',
    emptyMedicalHistoryTextLine1: 'You have no AppointmentsForDoctorContainer yet.',
    emptyMedicalHistoryTextLine2: 'To create a patient profile, please contact your administrator.',
    buttonPatients: 'Patients',
    buttonResolutions: 'Resolutions',
  },
  patientPage: {
    emptyAppointmentsHistoryTextLine1: 'You have no appointments yet.',
    emptyAppointmentsHistoryTextLine2: 'To create an appointment, please push the button +Create an appointment.',
    title: 'My appointments',
    buttonResolutions: 'Resolutions',
    buttonProfile: 'Profile',
    buttonAppointments: 'Appointments',
    createAppointments: 'Create an appointment',
  },
  makeAppointments: {
    step1Description: 'Select a doctor and define the reason of your visit',
    step2Description: 'Choose a day for an appointment',
    step3Description: 'Select an available timeslot',
  },
};

export default dictionary;
