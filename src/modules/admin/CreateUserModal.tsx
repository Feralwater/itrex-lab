import React, {
  ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';
import { InputFormContainer, ModalWindow, ResolutionModalButtons } from 'components';
import { CreatePatientFields } from 'modules/admin/AdminPage.styles';
import { dictionary } from 'pages';
import { useAppDispatch } from 'hooks';
import { getAllPatientsSlice } from 'redux/reducers/allPatients.reducer';
import { RoleName } from 'redux/reducers/reducers.types';
import { ROLES } from 'routes/constants';
import { getAllDoctorsSlice } from 'redux/reducers/allDoctors.reducer';

interface CreateUserModalProps {
  createPatientWindow: boolean
  setCreatePatientWindow: Dispatch<SetStateAction<boolean>>;
  roleName: RoleName
}

export const CreateUserModal: React.VFC<CreateUserModalProps> = ({
  createPatientWindow, setCreatePatientWindow, roleName,
}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [specialization, setSpecialization] = useState<string>('');
  const firstNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setFirstName(event.currentTarget.value);
  const lastNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setLastName(event.currentTarget.value);
  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setUserName(event.currentTarget.value);
  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);
  const specializationChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setSpecialization(event.currentTarget.value);
  const dispatch = useAppDispatch();
  const cancelHandler = () => setCreatePatientWindow(false);
  const createPatientHandle = () => {
    if (roleName === ROLES.DOCTOR) {
      dispatch(getAllDoctorsSlice.actions.createDoctorPending({
        firstName, lastName, userName, password, specializations: [specialization],
      }));
    }
    if (roleName === ROLES.PATIENT) {
      dispatch(getAllPatientsSlice.actions.createPatientPending({
        firstName, lastName, userName, password,
      }));
    }
    setCreatePatientWindow(false);
  };
  return (
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
          value={userName}
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
        {roleName === ROLES.DOCTOR && (
        <InputFormContainer
          inputSize="small"
          icon="default"
          id="specializations"
          type="text"
          isRequire
          placeholder={dictionary.userModal.specializationNamePlaceholder}
          value={specialization}
          label={dictionary.userModal.specializationNameLabel}
          onChange={specializationChangeHandler}
        />
        )}
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
  );
};
