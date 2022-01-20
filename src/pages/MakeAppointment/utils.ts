import { FormikValues } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { Options } from '../../components/Select/Select.types';

export interface ResetDoctorNameProps {
  optionsForDoctorNamesSelect: Array<Options>;
  values: FormikValues;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  setSelectedDoctorID: Dispatch<SetStateAction<string>>;
}

export function resetDoctorName({
  optionsForDoctorNamesSelect,
  values,
  setFieldValue,
  setSelectedDoctorID,
}: ResetDoctorNameProps) {
  const isSelectedDoctorNameInList = optionsForDoctorNamesSelect.some(({ value }) => value === values.doctorName.value);
  return !isSelectedDoctorNameInList
    && values.doctorName.value
    && setFieldValue('doctorName', '')
    && setFieldValue('date', '')
    && setFieldValue('time', '')
    && setSelectedDoctorID('');
}
