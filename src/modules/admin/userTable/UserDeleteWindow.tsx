import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from 'hooks';
import { ResolutionModalButtons } from 'components';
import { dictionary } from 'pages';
import { getAllPatientsSlice } from 'redux/reducers/allPatients.reducer';
import { AgreeQuestion } from 'modules/admin/userTable/Table.styles';
import { getAllDoctorsSlice } from 'redux/reducers/allDoctors.reducer';
import { RoleName } from 'redux/reducers/reducers.types';
import { ROLES } from 'routes/constants';

export interface UserDeleteWindowProps {
  userID: string
  firstName: string
  lastName: string
  roleName: RoleName
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>
  setShowSettingsModal: Dispatch<SetStateAction<boolean>>
}

export const UserDeleteWindow: React.VFC<UserDeleteWindowProps> = ({
  userID,
  firstName,
  lastName,
  setShowDeleteModal,
  setShowSettingsModal,
  roleName,
}) => {
  const dispatch = useAppDispatch();
  const deleteUserHandle = () => {
    if (roleName === ROLES.PATIENT) {
      dispatch(getAllPatientsSlice.actions.deletePatientPending(userID));
    }
    if (roleName === ROLES.DOCTOR) {
      dispatch(getAllDoctorsSlice.actions.deleteDoctorPending(userID));
    }
    setShowDeleteModal(false);
    setShowSettingsModal(false);
  };
  const cancelHandler = () => {
    setShowDeleteModal(false);
    setShowSettingsModal(false);
  };

  return (
    <>
      <AgreeQuestion>
        {`${`${dictionary.userModal.deleteUserQuestion} ${firstName} ${lastName}`}?`}
      </AgreeQuestion>
      <ResolutionModalButtons
        disabled={false}
        activeButtonType="button"
        cancelHandler={cancelHandler}
        saveHandler={deleteUserHandle}
        passiveButtonText={dictionary.userModal.cancelButtonText}
        activeButtonText={dictionary.userModal.agreeButtonText}
        activeButtonIcon="/svg/save-icon.svg"
        passiveButtonIcon="/svg/close-icon.svg"
      />
    </>
  );
};
