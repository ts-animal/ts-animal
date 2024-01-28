import { ColorType } from './color.type';

export class OptionType {
  repeat? = Infinity;
  speed? = 1800;
  color?: ColorType | 'random' = 'white';
}
