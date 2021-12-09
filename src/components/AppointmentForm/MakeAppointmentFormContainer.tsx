import React, { useEffect, useState } from 'react';
import { Specializations } from '../../resources/occupations/occupations.types';
import { DoctorsBySpecializationIdResponse } from '../../resources/doctors/doctors.types';
import occupations from '../../resources/occupations/occupations.api';
import doctors from '../../resources/doctors/doctors.api';
import appointments from '../../resources/appointments/appointments.api';
import { useAppDispatch } from '../../hooks';
import { appointmentValues } from './form.types';
import appointment from '../../redux/actions/appointment.actions';
import MakeAnAppointmentForm from './MakeAnAppointmentForm';

const MakeAppointmentFormContainer:React.VFC = () => {
  const [specializations, setSpecializations] = useState<Array<Specializations>>([]);
  const [doctorNames, setDoctorNames] = useState<Array<DoctorsBySpecializationIdResponse>>([]);
  const [selectedOccupationID, setSelectedOccupationID] = useState<string>('');
  const [selectedDoctorID, setSelectedDoctorID] = useState<string>('');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [freeTime, setFreeTime] = useState<Array<string>>([]);

  const optionsForOccupationsSelect = specializations.map((specialization: Specializations) => ({
    label: specialization.specialization_name,
    value: specialization.id,
  }));
  const optionsForDoctorNamesSelect = doctorNames.map((doctorName: DoctorsBySpecializationIdResponse) => ({
    label: [doctorName.first_name, doctorName.last_name].join(' '),
    value: doctorName.id,
  }));
  const getOccupations = async () => {
    const response = await occupations.getOccupations();
    setSpecializations(response.data);
  };
  const getDoctors = async () => {
    if (selectedOccupationID) {
      const { data } = await doctors.getDoctorsBySpecializationId(selectedOccupationID);
      setDoctorNames(data);
    } else {
      setDoctorNames([]);
    }
  };
  const getFreeTime = async () => {
    if (selectedOccupationID) {
      const { data } = await appointments.getFreeTime(selectedDate, selectedDoctorID);
      setFreeTime(data);
    } else {
      setFreeTime([]);
    }
  };

  useEffect(() => {
    getOccupations();
  }, []);
  useEffect(() => {
    getDoctors();
  }, [selectedOccupationID]);
  useEffect(() => {
    setDisableDate(!selectedDoctorID);
  }, [selectedDoctorID]);
  useEffect(() => {
    getFreeTime();
  }, [selectedDate, selectedDoctorID]);
  const dispatch = useAppDispatch();
  const handleSubmitForm = (formValues: appointmentValues) => {
    const {
      time: date, reason, note, doctorName: { value: doctorID },
    } = formValues;
    dispatch(appointment.pending({
      date, reason, note, doctorID,
    }));
  };
  return (
    <MakeAnAppointmentForm
      handleSubmitForm={handleSubmitForm}
      optionsForOccupationsSelect={optionsForOccupationsSelect}
      setSelectedOccupationID={setSelectedOccupationID}
      setSelectedDoctorID={setSelectedDoctorID}
      optionsForDoctorNamesSelect={optionsForDoctorNamesSelect}
      disableDate={disableDate}
      setSelectedDate={setSelectedDate}
      freeTime={freeTime}
    />
  );
};

export default MakeAppointmentFormContainer;
