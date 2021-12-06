import { colors } from '../../../components/CommonStyles/theme';

export const statuses = {
  confirmed: 'confirmed',
  canceled: 'canceled',
  waiting: 'waiting',
};
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
