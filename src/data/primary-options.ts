import { Choice } from './Choice';

const options: Choice[] = [
  { value: 'add', label: 'add' },
  { value: 'create', label: 'create' },
  { value: 'delete', label: 'delete/remove' },
  { value: 'show', label: 'show/view' },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});