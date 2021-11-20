const OCCUPATIONS = {
  THERAPIST: 'therapist',
  DERMATOLOGIST: 'dermatologist',
  CARDIOLOGIST: 'cardiologist',
};

const ROLES = {
  DOCTOR: 'doctor',
  PATIENT: 'patient',
};

export const users: Array<DoctorType> = [
  {
    id: '2',
    avatar: 'img/doctor-avatar.png',
    firstName: 'Miranda',
    secondName: 'Nelson',
    role: ROLES.DOCTOR,
    occupation: OCCUPATIONS.THERAPIST,
  },
  {
    id: '1',
    avatar: 'img/user-avatar.png',
    firstName: 'Larry',
    secondName: 'Prinston',
    role: ROLES.DOCTOR,
    occupation: OCCUPATIONS.DERMATOLOGIST,
  },
  {
    id: '3',
    avatar: 'img/doctor-avatar.png',
    firstName: 'Lorem',
    secondName: 'Ipsum',
    role: ROLES.DOCTOR,
    occupation: OCCUPATIONS.CARDIOLOGIST,
  },
];

export function getMe(): DoctorType {
  return users[1];
}

type DoctorType = {
    id: string
    avatar: string
    firstName: string
    secondName: string
    role: string
    occupation: string
}
