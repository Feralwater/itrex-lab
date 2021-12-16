import { FieldHookConfig } from 'formik';

export interface TimeSlotsProps {
  freeTime: Array<string>;
  date: string;
  value: string;
  field: FieldHookConfig<string | null>;
}
