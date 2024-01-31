import { COLOR, getRandomColor } from '../helper/color.helper';
import { ColorType } from '../type/color.type';

export class Colorizer {
  static randomColorize(content: string) {
    const randomColor = getRandomColor();
    return `${randomColor}${content}${COLOR.reset}`;
  }

  static colorize(type: ColorType, content: string) {
    return `${COLOR[type]}${content}${COLOR.reset}`;
  }
}
