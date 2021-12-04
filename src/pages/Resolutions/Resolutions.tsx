import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loginRepository } from '../../resources/loginRepository';

const Resolutions = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios.get(
      'https://reactlabapi.herokuapp.com/api/resolutions/doctor/me?offset=0&limit=10',
      {
        headers: {
          Authorization: `Bearer ${loginRepository.getAccessToken()}`,
        },
      },
    )
      .then((resp) => setRes(resp.data.resolutions));
  }, []);
  return (
    <div>
      {res.map((r:any) => (
        <>
          <span>{r.patient.first_name}</span>
          {' '}
          {' '}
          <span>{r.patient.last_name}</span>
          {' '}
          {' '}
          <span>{r.resolution}</span>
          {' '}
          {' '}
          <span>{r.visit_date}</span>
          {' '}
          {' '}
          <span>{r.next_appointment_date}</span>
        </>
      ))}
    </div>
  );
};

export default Resolutions;
