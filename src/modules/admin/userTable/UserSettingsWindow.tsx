import React, {
  ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';
import { TableRowProps } from 'modules/admin/userTable/TableRow';
import { useAppDispatch } from 'hooks';
import { getAllPatientsSlice } from 'redux/reducers/allPatients.reducer';
import { InputFormContainer, ResolutionModalButtons } from 'components';
import { dictionary } from 'pages';

export interface UserSettingsWindowProps extends TableRowProps {
  setShowSettingsModal: Dispatch<SetStateAction<boolean>>
}

export const UserSettingsWindow: React.VFC<UserSettingsWindowProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
  setShowSettingsModal,
}) => {
  const [userName, setUserName] = useState<string>(firstName);
  const [userSurName, setUserSurName] = useState<string>(lastName);
  const dispatch = useAppDispatch();
  const updateUserHandle = () => {
    dispatch(getAllPatientsSlice.actions.updatePatientPending(
      { id: userID, firstName: userName, lastName: userSurName },
    ));
    setShowSettingsModal(false);
  };
  const cancelHandler = () => setShowSettingsModal(false);
  const firstNameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setUserName(event.currentTarget.value);
  const secondNameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => setUserSurName(event.currentTarget.value);

  return (
    <>
      <div>{roleName}</div>
      <img src={photo} alt="" />
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
      {specializationName && <div>{specializationName}</div>}

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
