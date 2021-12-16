import { Dispatch, SetStateAction } from 'react';
import { FieldHookConfig } from 'formik';

export interface DatePickerProps {
  disableDate: boolean
  setSelectedDate: Dispatch<SetStateAction<string>>;
  field: FieldHookConfig<Date | null>;
}
