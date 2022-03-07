import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from 'hooks';
import { ResolutionModalButtons } from 'components';
import { dictionary } from 'pages';

export interface UserDeleteWindowProps {
  userID: string
  firstName: string
  lastName: string
  setShowDeleteModal: Dispatch<SetStateAction<boolean>>
  setShowSettingsModal: Dispatch<SetStateAction<boolean>>
}

export const UserDeleteWindow: React.VFC<UserDeleteWindowProps> = ({
  userID,
  firstName,
  lastName,
  setShowDeleteModal,
  setShowSettingsModal,
}) => {
  const dispatch = useAppDispatch();
  const deleteUserHandle = () => {
    // dispatch(getAllPatientsSlice.actions.updatePatientPending(
    //   { id: userID, firstName: userName, lastName: userSurName },
    // ));
    setShowDeleteModal(false);
    setShowSettingsModal(false);
  };
  const cancelHandler = () => {
    setShowDeleteModal(false);
    setShowSettingsModal(false);
  };

  return (
    <div>
      {`${`${dictionary.userModal.deleteUserQuestion} ${firstName} ${lastName}`}?`}
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
    </div>
  );
};
