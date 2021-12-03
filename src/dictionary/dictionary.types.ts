export type DictionaryType = {
  ViewEmptyState: {
    medicalHistoryTextPart1: string
    medicalHistoryTextPart2: string
  },
  error404: {
    errorNumber: string
    errorMessage: string
  },
  message: {
    messageTitleSuccess: string
    messageTitleError: string
    errorMessageText: string
    successMessageText: string
    error400Text: string
    error401Text: string
    error403Text: string
    error500Text: string
  },
  header: {
    avatarAlt: string
    logoText: string
  },
  form: {
    restoreTitle: string
    makeAppointmentTitle: string
    restoreMessage: string
    resetLinkText: string
    forgotLinkText: string
    signInTitle: string
    signUpTitle: string
    submitTitle: string
  },
  authorisedPages: {
    sendEmailMessage1: string
    sendEmailMessage2: string
    checkEmailMessage: string
    signUpQuestion: string
    signInQuestion: string
    signUp: string
    signIn: string
  },
  errorPage: {
    errorNumber: string
    errorMessage: string
  },
  doctorPage: {
    title: string
    emptyMedicalHistoryTextLine1: string
    emptyMedicalHistoryTextLine2: string
    buttonPatients: string
    buttonResolutions: string
  },
  patientPage: {
    emptyAppointmentsHistoryTextLine1: string
    emptyAppointmentsHistoryTextLine2: string
    title: string
    buttonResolutions: string
    buttonProfile: string
    buttonAppointments: string
    createAppointments: string
  },
  makeAppointments: {
    step1Description: string
    step2Description: string
    step3Description: string
  }
}
