import { Dispatch, SetStateAction } from 'react';
import { FieldHookConfig } from 'formik';

export interface DatePickerContainerProps {
  disableDate: boolean
  setSelectedDate: Dispatch<SetStateAction<string>>;
  field: FieldHookConfig<Date | null>;
}
