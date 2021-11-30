import React from 'react';
import {
  fireEvent, render, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import SignInForm from '../SignInForm';

describe('Login form tests', () => {
  const initialState = {
    profile: {
      role_name: 'Patient',
    },
  };
  const mockStore = configureStore();
  let store;

  it('Inputs should be in the document', () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );
    const inputNodeEmail = component.getByPlaceholderText(/email/ig);
    const inputNodePassword = component.getByPlaceholderText(/password/ig);
    expect(inputNodeEmail).toBeInTheDocument();
    expect(inputNodePassword).toBeInTheDocument();
  });
  it('inputs should accept text', async () => {
    store = mockStore(initialState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );
    const emailInputNode = getByPlaceholderText(/email/i) as HTMLInputElement;
    const passwordInputNode = getByPlaceholderText(/password/i) as HTMLInputElement;
    fireEvent.change(emailInputNode, { target: { value: 'testing email' } });
    fireEvent.change(passwordInputNode, { target: { value: 'testing password' } });
    await waitFor(() => expect(emailInputNode.value).toMatch('testing email'));
    await waitFor(() => expect(passwordInputNode.value).toMatch('testing password'));
  });
  it('shouldn`t be error message on the document', () => {
    store = mockStore(initialState);
    const { queryByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );
    const errorEmailNode = queryByText(/(Email is invalid|Email is required)/i) as HTMLSpanElement;
    const errorPasswordNode = queryByText(
      /Password must be at least 2 characters|Password must be 30 characters or less|Password is required/i,
    ) as HTMLSpanElement;
    expect(errorEmailNode).toBeNull();
    expect(errorPasswordNode).toBeNull();
  });
  it('button should be disable while inputs values are incorrect', async () => {
    store = mockStore(initialState);
    const { getByRole, getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );
    const buttonNode = getByRole('button') as HTMLButtonElement;
    const emailInputNode = getByPlaceholderText(/email/i) as HTMLInputElement;
    const passwordInputNode = getByPlaceholderText(/password/i) as HTMLInputElement;
    emailInputNode.focus();
    passwordInputNode.focus();
    // fireEvent.change(emailInputNode, { target: { value: 'email.gmail.com' } });
    // fireEvent.change(passwordInputNode, { target: { value: 'p' } });
    await waitFor(() => expect(buttonNode).toBeDisabled());
  });
  it('initial inputs should be empty', () => {
    store = mockStore(initialState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );
    const emailInputNode = getByPlaceholderText(/email/i) as HTMLInputElement;
    const passwordInputNode = getByPlaceholderText(/password/i) as HTMLInputElement;
    expect(emailInputNode).toBeEmptyDOMElement();
    expect(passwordInputNode).toBeEmptyDOMElement();
  });
  it('renders learn forgot password link', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );
    const linkElement = getByText(/forgot password/i);
    expect(linkElement).toBeInTheDocument();
  });
});
