import { listHelper } from '../helper/list.helper';

export function list() {
  const print = listHelper().join(', ');
  console.log(print);

  return print;
}
