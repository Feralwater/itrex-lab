export const componentsDictionary = {
  error404: {
    errorNumber: '404 Error',
    errorMessage: 'oops, the page you are looking for can`t be found!😭',
  },
  message: {
    messageTitleSuccess: 'Success message goes here',
    messageTitleError: 'Error message goes here',
    successMessageText: 'We show this message if something awesome has happened. You are awesome too',
    errorMessageText: 'We show this message if something irreparable has happened. But there is nothing irreparable',
    error400Text: 'Validation error. Please check data and try again',
    error401Text: 'Wrong data. Please check it and try again',
    error403Text: 'Access error. Please check it and try again',
    error404Text: 'Request error. Appointment does not exist',
    error409Text: 'Request error. Date and time are not free. Please choose another one',
    error500Text: 'Server error. Please try again later',
  },
  header: {
    avatarAlt: 'Your Profile',
    logoText: 'palm clinic',
  },
  appointmentCard: {
    avatarAlt: '',
  },
  controlCardPanel: {
    selectedPatientImageAlt: '',
  },
} as const;
