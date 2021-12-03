import React from 'react';
import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import MakeAnAppointmentForm from '../MakeAnAppointmentForm';

let inputNodeOccupations:HTMLDivElement;
let inputNodeDoctorsNames:HTMLDivElement;
let inputNodeReason:HTMLInputElement;
let inputNodeNote:HTMLInputElement;
let buttonNode:HTMLButtonElement;

describe('Make an appointmentForm form tests', () => {
  const initialState = { };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MakeAnAppointmentForm />
        </BrowserRouter>
      </Provider>,
    );
    inputNodeOccupations = getByText(/^choose an occupation$/i) as HTMLDivElement;
    inputNodeDoctorsNames = getByText(/^choose a doctor$/i) as HTMLDivElement;
    inputNodeReason = getByPlaceholderText(/^Leave a reason for the visit$/i) as HTMLInputElement;
    inputNodeNote = getByPlaceholderText(/^Leave a note if needed$/i) as HTMLInputElement;
    buttonNode = getByText(/submit/i) as HTMLButtonElement;
  });
  it('Inputs should be in the document', () => {
    expect(inputNodeOccupations).toBeInTheDocument();
    expect(inputNodeDoctorsNames).toBeInTheDocument();
    expect(inputNodeReason).toBeInTheDocument();
    expect(inputNodeNote).toBeInTheDocument();
  });
  it('inputs should accept text', async () => {
    fireEvent.change(inputNodeOccupations, { target: { textContent: 'therapist' } });
    fireEvent.change(inputNodeDoctorsNames, { target: { textContent: 'Jone Doe' } });
    fireEvent.change(inputNodeReason, { target: { value: 'reason' } });
    fireEvent.change(inputNodeNote, { target: { value: 'note' } });
    await waitFor(() => expect(inputNodeOccupations.textContent)
      .toMatch('therapist'));
    await waitFor(() => expect(inputNodeDoctorsNames.textContent)
      .toMatch('Jone Doe'));
    await waitFor(() => expect(inputNodeReason.value)
      .toMatch('reason'));
    await waitFor(() => expect(inputNodeNote.value)
      .toMatch('note'));
  });
  it('button should be disable while inputs values are incorrect', async () => {
    inputNodeOccupations.focus();
    inputNodeDoctorsNames.focus();
    inputNodeReason.focus();
    await waitFor(() => expect(buttonNode)
      .toBeDisabled());
  });
  it('initial inputs should be empty', () => {
    expect(inputNodeReason)
      .toBeEmptyDOMElement();
    expect(inputNodeNote)
      .toBeEmptyDOMElement();
  });
});
