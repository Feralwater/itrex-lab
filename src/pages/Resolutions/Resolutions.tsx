import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { loginRepository } from '../../resources/loginRepository';
import DoctorNavigatePanel from '../components/NavigatePanel/DoctorNavigatePanel';
import dictionary from '../../dictionary/dictionary';
import columnsNames from './const';
import ResolutionRow from './ResolutionRow';
import { ResolutionsTable, ResolutionsTableHead, ResolutionsTableHeaderCell } from './Resolutions.styles';

const Resolutions = () => {
  const [res, setRes] = useState<any>([]);

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
      <DoctorNavigatePanel pageTitle={dictionary.doctorPage.resolutionsTitle} />
      <ResolutionsTable>
        <thead>
          <ResolutionsTableHead>
            {Object.entries(columnsNames)
              .map(([, value]) => <ResolutionsTableHeaderCell as="th">{value}</ResolutionsTableHeaderCell>)}
          </ResolutionsTableHead>
        </thead>
        <tbody>
          {res.map((r: any) => (
            <ResolutionRow
              key={r.id}
              firstName={r.patient.first_name}
              lastName={r.patient.last_name}
              resolution={r.resolution}
              visitDate={format(new Date(r.visit_date), 'MM/dd/yy')}
              nextAppointmentDate={format(new Date(r.next_appointment_date), 'MM/dd/yy')}
            />
          ))}
        </tbody>
      </ResolutionsTable>
    </div>
  );
};

export default Resolutions;
