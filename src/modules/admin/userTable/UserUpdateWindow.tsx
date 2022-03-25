import React, {
  ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';
import { TableRowProps } from 'modules/admin/userTable/TableRow';
import { useAppDispatch } from 'hooks';
import { getAllPatientsSlice } from 'redux/reducers/allPatients.reducer';
import { InputFormContainer, ResolutionModalButtons } from 'components';
import { dictionary } from 'pages';
import { PatientData, UserRoleAndPhoto } from 'modules/admin/userTable/Table.styles';
import { ROLES } from 'routes/constants';
import { getAllDoctorsSlice } from 'redux/reducers/allDoctors.reducer';

export interface UserUpdateWindowProps extends TableRowProps {
  setShowEditModal: Dispatch<SetStateAction<boolean>>
  setShowSettingsModal: Dispatch<SetStateAction<boolean>>
}

export const UserUpdateWindow: React.VFC<UserUpdateWindowProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
  setShowEditModal,
  setShowSettingsModal,
}) => {
  const [userName, setUserName] = useState<string>(firstName);
  const [userSurName, setUserSurName] = useState<string>(lastName);
  const [doctorSpecializationName, setDoctorSpecializationName] = useState<string | undefined>(specializationName);
  const dispatch = useAppDispatch();
  const updatePatientHandle = () => {
    dispatch(getAllPatientsSlice.actions.updatePatientPending(
      { id: userID, firstName: userName, lastName: userSurName },
    ));
    setShowEditModal(false);
    setShowSettingsModal(false);
  };
  const updateDoctorHandle = () => {
    dispatch(getAllDoctorsSlice.actions.updateDoctorPending(
      {
        id: userID, firstName: userName, lastName: userSurName, specializations: [doctorSpecializationName],
      },
    ));
    setShowEditModal(false);
    setShowSettingsModal(false);
  };
  const updateUserHandle = roleName === ROLES.DOCTOR ? updateDoctorHandle : updatePatientHandle;
  const cancelHandler = () => {
    setShowEditModal(false);
    setShowSettingsModal(false);
  };
  const firstNameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setUserName(event.currentTarget.value);
  const secondNameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setUserSurName(event.currentTarget.value);
  const specializationNameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setDoctorSpecializationName(event.currentTarget.value);

  return (
    <>
      <PatientData>
        <UserRoleAndPhoto>
          <img src={photo} alt="" />
          {roleName}
        </UserRoleAndPhoto>
        <InputFormContainer
          inputSize="small"
          icon="default"
          id="firstName"
          type="text"
          isRequire
          placeholder={dictionary.userModal.firstNamePlaceholder}
          value={userName}
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
          value={userSurName}
          label={dictionary.userModal.secondNameLabel}
          onChange={secondNameChangeHandler}
        />
        {specializationName
            && (
            <InputFormContainer
              inputSize="small"
              icon="default"
              id="specializationName"
              type="text"
              isRequire
              placeholder={dictionary.userModal.specializationNamePlaceholder}
              value={doctorSpecializationName}
              label={dictionary.userModal.secondNameLabel}
              onChange={specializationNameChangeHandler}
            />
            )}
      </PatientData>
      <ResolutionModalButtons
        disabled={false}
        activeButtonType="button"
        cancelHandler={cancelHandler}
        saveHandler={updateUserHandle}
        passiveButtonText={dictionary.userModal.cancelButtonText}
        activeButtonText={dictionary.userModal.saveButtonText}
        activeButtonIcon="/svg/board-icon.svg"
        passiveButtonIcon="/svg/close-icon.svg"
      />
    </>
  );
};
