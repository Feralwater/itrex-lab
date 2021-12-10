import React from 'react';
import PatientNavigatePanel from '../../components/NavigatePanel/PatientNavigatePanel';
import pagesDictionary from '../dictionary/pagesDictionary';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import Button from '../../components/Button/Button';

const PatientProfile = () => {
  const {
    firstName,
    lastName,
    roleName,
    photo,
  } = useAppSelector(selectProfile);
  return (
    <div>
      <PatientNavigatePanel pageTitle={pagesDictionary.profile.pageTitle} />
      <img src={photo} alt={pagesDictionary.profile.avatarAlt} />
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{roleName}</div>
      <Button
        size="large"
        variant="secondary"
        icon="left"
        type="button"
      >
        {pagesDictionary.profile.changePasswordButton}
      </Button>
    </div>
  );
};

export default PatientProfile;
