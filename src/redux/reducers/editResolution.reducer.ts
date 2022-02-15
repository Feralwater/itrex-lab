import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditResolutionState } from './reducers.types';
import { FETCH_STATUS } from './constants';
import { RootState } from '../store';
import { EditResolutionFulfilled, EditResolutionPending } from '../actions.types';

const initialState = {
  resolutionID: '',
  status: FETCH_STATUS.IDLE,
} as EditResolutionState;

export const editResolutionSlice = createSlice({
  name: 'editResolution',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<EditResolutionFulfilled>) => ({ ...state, ...action.payload, status: FETCH_STATUS.FULFILLED }),
    pending: (state, action: PayloadAction<EditResolutionPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectEditResolution = (state: RootState) => state.editResolution;
export const editResolutionReducer = editResolutionSlice.reducer;
