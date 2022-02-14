import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OccupationsResponse } from 'resources/occupations/occupations.types';
import { OccupationState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  occupations: [],
  status: FETCH_STATUS.IDLE,
} as OccupationState;

export const occupationsSlice = createSlice({
  name: 'occupations',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<OccupationsResponse>) => ({
      ...state,
      occupations: action.payload.map((occupation) => ({ occupationName: occupation.specialization_name, occupationID: occupation.id })),
      responseStatus: FETCH_STATUS.FULFILLED,
    }),
    pending: (state) => ({ ...state, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectOccupations = (state: RootState) => state.occupations;
export const occupationsReducer = occupationsSlice.reducer;
