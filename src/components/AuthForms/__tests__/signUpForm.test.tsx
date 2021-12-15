import React from 'react';
import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SignUpForm } from '../singUpForm';

// Arrange
let inputNodeFirsName:HTMLInputElement;
let inputNodeLastName:HTMLInputElement;
let inputNodeEmail:HTMLInputElement;
let inputNodeConfirmPassword:HTMLInputElement;
let inputNodePassword:HTMLInputElement;
let buttonNode:HTMLButtonElement;
const initialState = { };
let store;

describe('Sign Up form tests', () => {
  // Act
  const mockStore = configureStore();
  const mockSubmitFunction = jest.fn();
  beforeEach(() => {
    store = mockStore(initialState);
    const { getByPlaceholderText, getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm handleSubmitForm={mockSubmitFunction} />
        </BrowserRouter>
      </Provider>,
    );
    inputNodeFirsName = getByPlaceholderText(/first name/i) as HTMLInputElement;
    inputNodeLastName = getByPlaceholderText(/last name/i) as HTMLInputElement;
    inputNodeEmail = getByPlaceholderText(/email/i) as HTMLInputElement;
    inputNodePassword = getByPlaceholderText(/^password$/i) as HTMLInputElement;
    inputNodeConfirmPassword = getByPlaceholderText(/^confirm password$/i) as HTMLInputElement;
    buttonNode = getByRole('button') as HTMLButtonElement;
  });
  it('Inputs should be in the document', () => {
    // Assert
    expect(inputNodeFirsName).toBeInTheDocument();
    expect(inputNodeLastName).toBeInTheDocument();
    expect(inputNodeEmail).toBeInTheDocument();
    expect(inputNodePassword).toBeInTheDocument();
    expect(inputNodeConfirmPassword).toBeInTheDocument();
  });
  it('inputs should accept text', async () => {
    // Act
    fireEvent.change(inputNodeFirsName, { target: { value: 'first name' } });
    fireEvent.change(inputNodeLastName, { target: { value: 'last name' } });
    fireEvent.change(inputNodeEmail, { target: { value: 'email@email.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'password' } });
    fireEvent.change(inputNodeConfirmPassword, { target: { value: 'password' } });
    // Assert
    await waitFor(() => expect(inputNodeFirsName.value)
      .toMatch('first name'));
    await waitFor(() => expect(inputNodeLastName.value)
      .toMatch('last name'));
    await waitFor(() => expect(inputNodeEmail.value)
      .toMatch('email@email.com'));
    await waitFor(() => expect(inputNodePassword.value)
      .toMatch('password'));
    await waitFor(() => expect(inputNodeConfirmPassword.value)
      .toMatch('password'));
    await waitFor(() => expect(inputNodeConfirmPassword.value)
      .toMatch(inputNodePassword.value));
  });
  it('button should be disable if inputs was not focused', async () => {
    // Act
    inputNodeFirsName.focus();
    inputNodeLastName.focus();
    inputNodeEmail.focus();
    inputNodePassword.focus();
    inputNodeConfirmPassword.focus();
    // Assert
    await waitFor(() => expect(buttonNode)
      .toBeDisabled());
  });
  it('initial inputs should be empty', () => {
    // Assert
    expect(inputNodeFirsName)
      .toBeEmptyDOMElement();
    expect(inputNodeLastName)
      .toBeEmptyDOMElement();
    expect(inputNodeEmail)
      .toBeEmptyDOMElement();
    expect(inputNodePassword)
      .toBeEmptyDOMElement();
    expect(inputNodeConfirmPassword)
      .toBeEmptyDOMElement();
  });
  it('button should be disable if inputs values are incorrect', async () => {
    // Act
    fireEvent.change(inputNodeFirsName, { target: { value: '123' } });
    fireEvent.change(inputNodeLastName, { target: { value: '456' } });
    fireEvent.change(inputNodeEmail, { target: { value: 'email.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'password' } });
    fireEvent.change(inputNodeConfirmPassword, { target: { value: 'passwords' } });
    // Assert
    await waitFor(() => expect(buttonNode).toBeDisabled());
  });
  it('rendering and submitting form is correct', async () => {
    // Act
    fireEvent.change(inputNodeFirsName, { target: { value: 'Mister' } });
    fireEvent.change(inputNodeLastName, { target: { value: 'Smite' } });
    fireEvent.change(inputNodeEmail, { target: { value: 'email@gmail.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'password' } });
    fireEvent.change(inputNodeConfirmPassword, { target: { value: 'password' } });
    userEvent.click(buttonNode);
    // Assert
    await waitFor(() => expect(mockSubmitFunction).toHaveBeenCalledWith({
      firstName: 'Mister',
      lastName: 'Smite',
      userName: 'email@gmail.com',
      password: 'password',
    }));
    await waitFor(() => expect(mockSubmitFunction).toHaveBeenCalledTimes(1));
  });
  it('button should be disable if password and confirm inputs values are not the same', async () => {
    // Act
    fireEvent.change(inputNodeFirsName, { target: { value: 'Mister' } });
    fireEvent.change(inputNodeLastName, { target: { value: 'Smite' } });
    fireEvent.change(inputNodeEmail, { target: { value: 'email@gmail.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'password' } });
    fireEvent.change(inputNodeConfirmPassword, { target: { value: 'passwords' } });
    // Assert
    await waitFor(() => expect(buttonNode).toBeDisabled());
  });
});
