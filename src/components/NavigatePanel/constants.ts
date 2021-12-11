export const searchOptions = [
  {
    label: 'Date',
    value: 'Date',
  },
  {
    label: 'Name',
    value: 'Name',
  },
];

export const optionsForSearchSelect = searchOptions.map((option) => ({
  label: option.label,
  value: option.value,
}));
