import React, { useState } from 'react';
import { useAppSelector } from 'hooks';
import { selectProfile, selectResolutions } from 'redux/reducers';
import { useParams } from 'react-router';
import { selectResolutionsForPatient } from 'redux/reducers/resolutionsForPatient.reducer';
import { ROLES } from 'routes/constants';
import { useFetchResolutions } from 'pages/Resolutions/hooks/useFetchResolutions';
import { NavigatePanelToDisplay } from 'components/NavigatePanel/NavigatePanelToDisplay';
import { Resolutions } from './Resolutions';
import { resolutionsOnPage } from './constants';

export const ResolutionsContainer = () => {
  const { resolutions: resolutionsForDoctor, status: doctorResponseStatus, total: doctorsResolutionsTotalCount } = useAppSelector(selectResolutions);
  const { resolutions: resolutionsForPatient, status: patientResponseStatus } = useAppSelector(selectResolutionsForPatient);
  const { roleName } = useAppSelector(selectProfile);
  const myResolutions = roleName === ROLES.DOCTOR ? resolutionsForDoctor : resolutionsForPatient;
  const responseStatus = roleName === ROLES.DOCTOR ? doctorResponseStatus : patientResponseStatus;
  const { currentPageNumber = 1 } = useParams();
  const { total: patientsResolutionsTotalCount } = useAppSelector(selectResolutionsForPatient);
  const totalResolutionsCount = roleName === ROLES.DOCTOR ? doctorsResolutionsTotalCount : patientsResolutionsTotalCount;
  const [currentPage, setCurrentPage] = useState<number>(Number(currentPageNumber));
  const pagesCount = Math.ceil(totalResolutionsCount / resolutionsOnPage);
  const fromItem = (Number(currentPageNumber) - 1) * resolutionsOnPage + 1;
  const toItem = Math.min((Number(currentPageNumber) - 1) * resolutionsOnPage + resolutionsOnPage, totalResolutionsCount);
  useFetchResolutions(currentPage);

  return (
    <div>
      <NavigatePanelToDisplay roleName={roleName} />
      <Resolutions
        responseStatus={responseStatus}
        myResolutions={myResolutions}
        fromItem={fromItem}
        toItem={toItem}
        totalResolutionsCount={totalResolutionsCount}
        handleClick={(current) => setCurrentPage(current.selected + 1)}
        pagesCount={pagesCount}
        currentPageNumber={currentPageNumber}
      />
    </div>
  );
};
