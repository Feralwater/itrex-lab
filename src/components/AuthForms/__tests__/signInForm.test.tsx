import React from 'react';
import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SignInForm } from '../SignInForm';

// Arrange
let inputNodeEmail:HTMLInputElement;
let inputNodePassword:HTMLInputElement;
let buttonNode:HTMLButtonElement;
const status = 'fulfilled';
const initialState = { };
let store;

describe('Sign In form tests', () => {
  // Act
  const mockSubmitFunction = jest.fn();
  const mockStore = configureStore();
  beforeEach(() => {
    store = mockStore(initialState);
    const { getByPlaceholderText, getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm handleSubmitForm={mockSubmitFunction} status={status} />
        </BrowserRouter>
      </Provider>,
    );
    inputNodeEmail = getByPlaceholderText(/email/i) as HTMLInputElement;
    inputNodePassword = getByPlaceholderText(/^password$/i) as HTMLInputElement;
    buttonNode = getByRole('button') as HTMLButtonElement;
  });
  it('Inputs should be in the document', () => {
    // Assert
    expect(inputNodeEmail).toBeInTheDocument();
    expect(inputNodePassword).toBeInTheDocument();
  });
  it('inputs should accept text', async () => {
    // Act
    fireEvent.change(inputNodeEmail, { target: { value: 'email@email.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'password' } });
    // Assert
    await waitFor(() => expect(inputNodeEmail.value)
      .toMatch('email@email.com'));
    await waitFor(() => expect(inputNodePassword.value)
      .toMatch('password'));
  });
  it('button should be disable if inputs was not focused', async () => {
    // Act
    inputNodeEmail.focus();
    inputNodePassword.focus();
    // Assert
    await waitFor(() => expect(buttonNode)
      .toBeDisabled());
  });
  it('initial inputs should be empty', () => {
    // Assert
    expect(inputNodeEmail)
      .toBeEmptyDOMElement();
    expect(inputNodePassword)
      .toBeEmptyDOMElement();
  });
  it('button should be disable if inputs values are incorrect', async () => {
    // Act
    fireEvent.change(inputNodeEmail, { target: { value: 'email.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'p' } });
    // Assert
    await waitFor(() => expect(buttonNode)
      .toBeDisabled());
  });
  it('rendering and submitting a basic Formik form', async () => {
    // Act
    fireEvent.change(inputNodeEmail, { target: { value: 'email@email.com' } });
    fireEvent.change(inputNodePassword, { target: { value: 'password' } });
    userEvent.click(buttonNode);
    // Assert
    await waitFor(() => expect(mockSubmitFunction).toHaveBeenCalledWith({
      userName: 'email@email.com',
      password: 'password',
    }));
    await waitFor(() => expect(mockSubmitFunction).toHaveBeenCalledTimes(1));
  });
});
