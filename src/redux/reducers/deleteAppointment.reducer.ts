import { createSlice } from '@reduxjs/toolkit';
import { DeleteAppointmentState } from './reducers.types';
import deleteAppointment from '../actions/deleteAppointment.actions';

const initialState: DeleteAppointmentState = {
  id: '',
  status: '',
};

export const deleteAppointmentSlice = createSlice({
  name: 'deleteAppointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAppointment.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.status = 'fulfilled';
      });

    builder
      .addCase(deleteAppointment.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(deleteAppointment.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export const deleteAppointmentReducer = deleteAppointmentSlice.reducer;
