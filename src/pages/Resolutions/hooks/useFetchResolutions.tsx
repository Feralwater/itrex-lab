import { useAppDispatch, useAppSelector } from 'hooks';
import { resolutionsSlice, selectProfile } from 'redux/reducers';
import { resolutionsOnPage } from 'pages/Resolutions/constants';
import { useEffect } from 'react';
import { PATH, ROLES } from 'routes/constants';
import { resolutionsForPatientSlice } from 'redux/reducers/resolutionsForPatient.reducer';
import { useNavigate } from 'react-router-dom';

export const useFetchResolutions = (currentPage:number) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { roleName } = useAppSelector(selectProfile);
  const slice = roleName === ROLES.DOCTOR ? resolutionsSlice : resolutionsForPatientSlice;
  useEffect(() => {
    dispatch(slice.actions.pending({
      offset: (currentPage - 1) * resolutionsOnPage,
      limit: resolutionsOnPage,
    }));
    if (roleName === ROLES.DOCTOR) {
      navigate(`${PATH.DOCTOR_RESOLUTIONS.replace(':currentPageNumber', '')}${currentPage}`);
    }
    if (roleName === ROLES.PATIENT) {
      navigate(`${PATH.PATIENT_RESOLUTIONS.replace(':currentPageNumber', '')}${currentPage}`);
    }
  }, [currentPage]);
};
