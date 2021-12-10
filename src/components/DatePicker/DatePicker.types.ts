import { Dispatch, SetStateAction } from 'react';

export interface DatePickerProps {
  doctorId: string
  disableDate: boolean
  setSelectedDate: Dispatch<SetStateAction<string>>;
  [x: string]: any;
}
