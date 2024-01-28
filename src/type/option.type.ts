import { ColorType } from './color.type';

export type OptionType = {
  repeat?: number;
  speed?: number;
  color?: ColorType | 'random';
};
