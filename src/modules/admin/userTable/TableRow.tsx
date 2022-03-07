import React, {
  MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { ResolutionsTableCell, ResolutionsTableRow } from 'pages/Resolutions/Resolutions.styles';
import { RoleName } from 'redux/reducers/reducers.types';
import { LastTableCell } from './LastTableCell';

export interface TableRowProps {
  userID: string
  firstName: string
  lastName: string
  photo: string
  roleName: RoleName
  specializationName?: string
  settingsRef?: MutableRefObject<HTMLUListElement>;
}

export const TableRow: React.VFC<TableRowProps> = ({
  userID,
  firstName,
  lastName,
  photo,
  roleName,
  specializationName,
}) => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const openSettingsModal = () => setShowSettingsModal((prevState) => !prevState);
  const settingsRef = useRef() as React.MutableRefObject<HTMLUListElement> | undefined;
  useEffect(() => {
    const handle = (event:Event) => {
      if (settingsRef?.current && !settingsRef.current.contains(event.target as Element)) {
        setShowSettingsModal(false);
      }
    };
    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    };
  });
  return (
    <ResolutionsTableRow>
      <ResolutionsTableCell><img src={photo} alt="" /></ResolutionsTableCell>
      <ResolutionsTableCell>{roleName}</ResolutionsTableCell>
      <ResolutionsTableCell>{firstName}</ResolutionsTableCell>
      <ResolutionsTableCell>{lastName}</ResolutionsTableCell>
      {specializationName && <ResolutionsTableCell>{specializationName}</ResolutionsTableCell>}
      <LastTableCell
        openSettingsModal={openSettingsModal}
        showSettingsModal={showSettingsModal}
        userID={userID}
        firstName={firstName}
        lastName={lastName}
        photo={photo}
        roleName={roleName}
        specializationName={specializationName}
        settingsRef={settingsRef}
        setShowSettingsModal={setShowSettingsModal}
      />
    </ResolutionsTableRow>
  );
};