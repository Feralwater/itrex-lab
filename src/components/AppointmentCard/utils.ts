import { add, format } from 'date-fns';
import { endVisitHourFormat, visitTimeFormat } from './constants';

export function formatVisitTime(timeBeforeFormat: string) {
  const endVisitDate = add(new Date(timeBeforeFormat), { hours: 1 });
  const endVisitHour = format(new Date(endVisitDate), endVisitHourFormat);
  return format(new Date(timeBeforeFormat), visitTimeFormat(endVisitHour));
}
