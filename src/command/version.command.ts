import { version } from '../../package.json';

export function v() {
  const print = 'v' + version;
  console.log(print);

  return print;
}
