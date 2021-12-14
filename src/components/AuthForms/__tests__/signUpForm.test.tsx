import React from 'react';
import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { SignUpForm } from '../singUpForm';

let inputNodeFirsName:HTMLInputElement;
let inputNodeLastName:HTMLInputElement;
let inputNodeEmail:HTMLInputElement;
let inputNodeConfirmPassword:HTMLInputElement;
let inputNodePassword:HTMLInputElement;
let buttonNode:HTMLButtonElement;

describe('Sign Up form __tests__', () => {
  const initialState = { };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    const { getByPlaceholderText, getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
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
    expect(inputNodeFirsName).toBeInTheDocument();
    expect(inputNodeLastName).toBeInTheDocument();
    expect(inputNodeEmail).toBeInTheDocument();
    expect(inputNodePassword).toBeInTheDocument();
    expect(inputNodeConfirmPassword).toBeInTheDocument();
  });
  it('inputs should accept text', async () => {
    fireEvent.change(inputNodeFirsName, { target: { value: 'first name' } });
    fireEvent.change(inputNodeLastName, { target: { value: 'last name' } });
    fireEvent.change(inputNodeEmail, { target: { value: 'email@email.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'password' } });
    fireEvent.change(inputNodeConfirmPassword, { target: { value: 'password' } });
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
  it('button should be disable while inputs values are incorrect', async () => {
    inputNodeFirsName.focus();
    inputNodeLastName.focus();
    inputNodeEmail.focus();
    inputNodePassword.focus();
    inputNodeConfirmPassword.focus();
    await waitFor(() => expect(buttonNode)
      .toBeDisabled());
  });
  it('initial inputs should be empty', () => {
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
});
