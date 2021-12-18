import { FETCH_STATUS } from '../constants';
import { appointmentsForDoctorReducer } from '../appointmentsForDoctor.reducer';
import { appointmentsForDoctor } from '../../actions';
import { AppointmentsForDoctorState } from '../reducers.types';

// Arrange
const startState = {
  appointments: [],
  total: 0,
  responseStatus: FETCH_STATUS.IDLE,
} as AppointmentsForDoctorState;
const data: any = {
  appointments: [
    {
      id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      visit_date: '2021-11-29T14:00:00.000Z',
      reason: 'reason',
      note: 'note',
      patient_id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      doctor_id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      status: 'waiting',
      patient: {
        first_name: 'Name',
        last_name: 'Surname',
        photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
        id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      },
    },
    {
      id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      visit_date: '2021-11-29T14:00:00.000Z',
      reason: 'reason',
      note: 'note',
      patient_id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      doctor_id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      status: 'waiting',
      patient: {
        first_name: 'Name',
        last_name: 'Surname',
        photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
        id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
      },
    },
  ],
  total: 2,
  responseStatus: FETCH_STATUS.IDLE,
};
const endState = {
  ...data,
  responseStatus: FETCH_STATUS.FULFILLED,
};

it('should return the initial state', () => {
  // Assert
  expect(appointmentsForDoctorReducer(undefined, { type: undefined }))
    .toEqual(
      { ...startState },
    );
});

it('should handle list of appointments being added', () => {
  // Assert
  expect(appointmentsForDoctorReducer({ ...startState }, appointmentsForDoctor.fulfilled(data)))
    .toEqual(
      { ...endState },
    );
});
