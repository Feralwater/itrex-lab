import { AdminNavigate, CreatePatientFields } from 'modules/admin/AdminPage.styles';
import { NavigatePanel } from 'components/NavigatePanel/NavigatePanel';
import { adminTabs } from 'modules/admin/constants';
import {
  Button, InputFormContainer, ModalWindow, ResolutionModalButtons,
} from 'components';
import React, { ChangeEvent, useState } from 'react';
import { dictionary } from 'pages';

export const AdminNavigatePanel:React.FC = ({ children }) => {
  const [createPatientWindow, setCreatePatientWindow] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const firstNameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setFirstName(event.currentTarget.value);
  const lastNameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setLastName(event.currentTarget.value);
  const emailChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);
  const passwordChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);
  const openCreatePatientWindow = () => setCreatePatientWindow(true);
  const cancelHandler = () => setCreatePatientWindow(false);
  const createPatientHandle = () => {
    setCreatePatientWindow(false);
  };
  return (
    <>
      <AdminNavigate>
        <NavigatePanel buttonOnNavigatePanel={adminTabs} />
        <Button
          type="button"
          icon="left"
          size="small"
          variant="primary"
          iconUrl="/svg/plus-icon.svg"
          onClick={openCreatePatientWindow}
        >
          {children}
        </Button>
      </AdminNavigate>
      <ModalWindow activeModal={createPatientWindow} setActiveModal={setCreatePatientWindow}>
        <CreatePatientFields>
          <InputFormContainer
            inputSize="small"
            icon="default"
            id="patientFirstName"
            type="text"
            isRequire
            placeholder={dictionary.userModal.firstNamePlaceholder}
            value={firstName}
            label={dictionary.userModal.firstNameLabel}
            onChange={firstNameChangeHandler}
          />
          <InputFormContainer
            inputSize="small"
            icon="default"
            id="lastName"
            type="text"
            isRequire
            placeholder={dictionary.userModal.secondNamePlaceholder}
            value={lastName}
            label={dictionary.userModal.secondNameLabel}
            onChange={lastNameChangeHandler}
          />
          <InputFormContainer
            inputSize="small"
            icon="default"
            id="email"
            type="email"
            isRequire
            placeholder={dictionary.userModal.emailPlaceholder}
            value={email}
            label={dictionary.userModal.emailLabel}
            onChange={emailChangeHandler}
          />
          <InputFormContainer
            inputSize="small"
            icon="default"
            id="password"
            type="password"
            isRequire
            placeholder={dictionary.userModal.passwordPlaceholder}
            value={password}
            label={dictionary.userModal.passwordLabel}
            onChange={passwordChangeHandler}
          />
        </CreatePatientFields>
        <ResolutionModalButtons
          disabled={false}
          activeButtonType="button"
          cancelHandler={cancelHandler}
          saveHandler={createPatientHandle}
          passiveButtonText={dictionary.userModal.cancelButtonText}
          activeButtonText={dictionary.userModal.saveButtonText}
          activeButtonIcon="/svg/board-icon.svg"
          passiveButtonIcon="/svg/close-icon.svg"
        />
      </ModalWindow>
    </>
  );
};
