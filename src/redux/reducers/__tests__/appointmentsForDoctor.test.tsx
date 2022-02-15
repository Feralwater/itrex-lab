import { FETCH_STATUS } from '../constants';
import { appointmentsForDoctor } from '../../actions';
import { appointmentsForDoctorState } from '../reducers.types';
import { appointmentsForDoctorReducer } from '../appointmentsForDoctor.reducer';

// Arrange
const startState = {
  cards: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
} as appointmentsForDoctorState;
const data: any = {
  cards: [
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
  status: FETCH_STATUS.IDLE,
};
const endState = {
  ...data,
  status: FETCH_STATUS.FULFILLED,
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
