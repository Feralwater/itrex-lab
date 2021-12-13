import { createSlice } from '@reduxjs/toolkit';
import { editResolution } from '../actions';
import { EditResolutionState } from './reducers.types';
import { FETCH_STATUS } from './constants';

const initialState = {
  resolutionID: '',
  status: FETCH_STATUS.IDLE,
} as EditResolutionState;

export const editResolutionSlice = createSlice({
  name: 'editResolution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editResolution.fulfilled, (state, { payload }) => ({
        ...state,
        resolutionID: payload.resolutionID,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(editResolution.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(editResolution.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED }));
  },
});

export const editResolutionReducer = editResolutionSlice.reducer;
