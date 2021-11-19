import { statuses } from '../../../mockData/patients';
import colors from '../../../styles/colors';

export const statusColor = {
  [statuses.confirmed]: `${colors.greenish_teal}`,
  [statuses.canceled]: `${colors.radical_red}`,
  [statuses.waiting]: `${colors.cornflower_blue}`,
};
export const statusDescription = {
  [statuses.confirmed]: 'Appointment is confirmed',
  [statuses.canceled]: 'Appointment is canceled',
  [statuses.waiting]: 'Waiting for confirmation...',
};
