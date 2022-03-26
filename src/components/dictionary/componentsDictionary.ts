export const componentsDictionary = {
  message: {
    messageTitleSuccess: 'Success message goes here',
    successMessageBodyMakeAppointment: 'You have created a new appointment. Please, wait for doctor\'s confirmation.',
    successMessageBodyChangePassword: 'You have successfully changed your password.',
    successMessageBodyEditProfile: 'You have successfully updated your profile.',
    successMessageBodyCreateResolution: 'You have successfully created new resolution.',
    successMessageBodyEditResolution: 'You have successfully edited resolution.',
    successMessageBodyDeleteAppointment: 'You have successfully deleted appointment.',
    successMessageBodyUpdateAppointmentStatus: 'You have successfully update appointment status.',
    messageTitleError: 'Error message goes here',
    errorMessageText: 'We show this message if something irreparable has happened. But there is nothing irreparable',
    errorMessageEditProfile: 'Failed to update the profile. Check the data and try again',
    errorMessageLogin: 'Login or password is incorrect. Please check it and try again',
  },
  header: {
    photoAlt: 'Your Profile',
    logoText: 'palm clinic',
  },
  appointmentCard: {
    photoAlt: '',
  },
  controlCardPanel: {
    selectedPatientImageAlt: '',
    errorMessage: 'Must be 2-200 characters',
  },
  changeAppointmentStatus: {
    title: 'Change appointment status',
    subTitle: 'Select status',
  },
} as const;
