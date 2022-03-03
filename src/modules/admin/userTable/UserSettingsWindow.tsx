import React, { useEffect } from 'react';
import { TableRowProps } from 'modules/admin/userTable/TableRow';
import { useAppDispatch } from 'hooks';
import { getAllPatientsSlice } from 'redux/reducers/allPatients.reducer';
import { Button } from 'components';

export const UserSettingsWindow: React.VFC<TableRowProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <img src={photo} alt="" />
      <input type="text" value={firstName} />
      <input type="text" value={lastName} />
      <div>{roleName}</div>
      {specializationName && <div>{specializationName}</div>}
      <Button
        type="button"
        icon="default"
        variant="primary"
        size="small"
        onClick={() => {
          dispatch(getAllPatientsSlice.actions.updatePatientPending(
            { id: userID, firstName: 'Zu', lastName: 'Zu' },
          ));
        }}
      >
        Submit
      </Button>
    </div>
  );
};
