import { createSlice } from '@reduxjs/toolkit';
import { cardsForDoctor } from '../actions';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { CardsForDoctorState } from './reducers.types';

const initialState = {
  cards: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
} as CardsForDoctorState;

export const cardsForDoctorSlice = createSlice({
  name: 'cardsForDoctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardsForDoctor.fulfilled, (state, { payload }) => ({
        ...state,
        cards: [...state.cards, ...payload.cards],
        total: payload.total,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(cardsForDoctor.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(cardsForDoctor.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED }));
  },
});

export const selectCardsForDoctor = (state: RootState) => state.cardsForDoctor;

export const cardsForDoctorReducer = cardsForDoctorSlice.reducer;
