import { FieldHookConfig } from 'formik';

export interface TimeSlotsProps {
  freeTime: Array<string>;
  date: string;
  value: string;
  occupation: string;
  doctorName: string;
  field: FieldHookConfig<string | null>;
}
