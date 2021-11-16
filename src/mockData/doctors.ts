import { addBusinessDays, isSameDay } from 'date-fns';

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

export const TIME_SLOTS = ['12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm'];

const MAX_DATE_DELTA_IN_COMPARE_CURRENT = 11;
const COUNT_TIMESLOTS = 20;
const MAX_INDEX_OF_TIMESLOT = TIME_SLOTS.length - 1;

const AVAILABLE_TIMESLOTS = users.flatMap((doctor) => (new Array(COUNT_TIMESLOTS)).fill(0).map(() => {
  const dayOfMonth = addBusinessDays(new Date(), Math.floor(Math.random() * MAX_DATE_DELTA_IN_COMPARE_CURRENT));
  const indexOfTimeSlot = Math.floor(Math.random() * MAX_INDEX_OF_TIMESLOT);
  const doctorID = doctor.id;
  return {
    dayOfMonth,
    indexOfTimeSlot,
    doctorID,
  };
}));

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

export function getDoctors(doctors: Array<DoctorType>, occupation: string): { selectedValue: string, doctorID: string }[] {
  return doctors.filter((doctor) => doctor.occupation === occupation).map((d) => ({
    selectedValue: `${d.firstName} ${d.secondName}`,
    doctorID: d.id,
  }));
}

export function getOccupations(doctors: Array<DoctorType>): { selectedValue: string, doctorID: string }[] {
  return doctors.map((d) => ({ selectedValue: d.occupation, doctorID: d.id }));
}

export function getDateOfAppointmentsByDoctorId(doctorID: string) {
  return AVAILABLE_TIMESLOTS.filter((slot) => slot.doctorID === doctorID);
}

export function getDateOfAppointmentsByDoctorIdAndDate(doctorID: string, date: Date | null) {
  return getDateOfAppointmentsByDoctorId(doctorID)
    .filter((slot) => date && isSameDay(slot.dayOfMonth, date));
}
