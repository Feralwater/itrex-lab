import { createSlice } from '@reduxjs/toolkit';
import { OccupationState } from './reducers.types';
import { ROLES } from '../../routes/constants';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { occupations } from '../actions';
import { OccupationsResponse } from '../../resources/occupations/occupations.types';

const initialState = {
  occupations: [],
  status: FETCH_STATUS.IDLE,
} as OccupationState;

export const occupationsSlice = createSlice({
  name: 'occupations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(occupations.fulfilled, (state, { payload }: { payload: OccupationsResponse}) => ({
        ...state,
        occupations: payload.map((occupation) => ({ occupationName: occupation.specialization_name, occupationID: occupation.id })),
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(occupations.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(occupations.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED, roleName: ROLES.PUBLIC }));
  },
});

export const selectOccupations = (state: RootState) => state.occupations;

export const occupationsReducer = occupationsSlice.reducer;
