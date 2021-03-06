import { useAppDispatch, useAppSelector } from 'hooks';
import { resolutionsForDoctorSlice, selectProfile } from 'redux/reducers';
import { resolutionsOnPage } from 'pages/Resolutions/constants';
import { Dispatch, SetStateAction } from 'react';
import { ROLES } from 'routes/constants';
import { resolutionsForPatientSlice } from 'redux/reducers/resolutionsForPatient.reducer';

interface OnPageChange{
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const useOnPageChange = ({ setCurrentPage }:OnPageChange) => {
  const dispatch = useAppDispatch();
  const { roleName } = useAppSelector(selectProfile);
  const slice = roleName === ROLES.DOCTOR ? resolutionsForDoctorSlice : resolutionsForPatientSlice;
  const onPageChange = (current: { selected: number }) => {
    setCurrentPage(current.selected + 1);
    dispatch(slice.actions.pending({
      offset: current.selected * resolutionsOnPage,
      limit: resolutionsOnPage,
    }));
  };
  return { onPageChange };
};
