import React from 'react';
import {
  act,
  fireEvent, render, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { MakeAppointmentForm } from '../MakeAppointmentForm';

// Arrange
let inputNodeOccupations:HTMLDivElement;
let inputNodeDoctorsNames:HTMLDivElement;
let inputNodeReason:HTMLInputElement;
let inputNodeNote:HTMLInputElement;
let buttonNode:HTMLButtonElement;
let store;
const initialState = { };

describe('Make an MakeAppointment form tests', () => {
  // Act
  const mockSubmitFunction = jest.fn();
  const setStateMock = jest.fn();
  const mockStore = configureStore();
  beforeEach(() => {
    store = mockStore(initialState);
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MakeAppointmentForm
            handleSubmitForm={mockSubmitFunction}
            optionsForOccupationsSelect={[]}
            setSelectedOccupationID={setStateMock}
            setSelectedDoctorID={setStateMock}
            optionsForDoctorNamesSelect={[]}
            disableDate={false}
            setSelectedDate={setStateMock}
            freeTime={[]}
            makeAppointmentFetchStatus="fulfilled"
          />
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
    // Assert
    expect(inputNodeOccupations).toBeInTheDocument();
    expect(inputNodeDoctorsNames).toBeInTheDocument();
    expect(inputNodeReason).toBeInTheDocument();
    expect(inputNodeNote).toBeInTheDocument();
  });
  it('inputs should accept text', async () => {
    // Act
    act(() => {
      fireEvent.change(inputNodeOccupations, { target: { textContent: 'therapist' } });
      fireEvent.change(inputNodeDoctorsNames, { target: { textContent: 'Jone Doe' } });
      fireEvent.change(inputNodeReason, { target: { value: 'reason' } });
      fireEvent.change(inputNodeNote, { target: { value: 'note' } });
    });
    // Assert
    await waitFor(() => expect(inputNodeOccupations.textContent).toMatch('therapist'));
    await waitFor(() => expect(inputNodeDoctorsNames.textContent).toMatch('Jone Doe'));
    await waitFor(() => expect(inputNodeReason.value).toMatch('reason'));
    await waitFor(() => expect(inputNodeNote.value).toMatch('note'));
  });
  it('button should be disable if inputs was not focused', async () => {
    // Act
    inputNodeOccupations.focus();
    inputNodeDoctorsNames.focus();
    inputNodeReason.focus();
    // Assert
    await waitFor(() => expect(buttonNode).toBeDisabled());
  });
  it('initial inputs should be empty', () => {
    // Assert
    expect(inputNodeReason).toBeEmptyDOMElement();
    expect(inputNodeNote).toBeEmptyDOMElement();
  });
  it('initial selects should be with correct values', () => {
    // Assert
    expect(inputNodeOccupations.textContent).toMatch('Choose an occupation');
    expect(inputNodeDoctorsNames.textContent).toMatch('Choose a doctor');
  });
});
