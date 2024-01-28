import Charm from 'charm';
import { IPrinter } from './printer.interface';
import { ColorType } from '../type/color.type';
import { color, getRandomColor } from '../helper/color.helper';

export class CharmPrinter implements IPrinter {
  printer = Charm();
  color: ColorType | null = null;
  randomColor = false;

  constructor() {
    this.printer.pipe(process['stdout']);
  }

  clearTerminal() {
    this.printer.reset();
  }

  print(content: string) {
    if (this.color) content = this.colorize(this.color, content);
    if (this.randomColor) content = this.randomColorize(content);

    this.printer.write(content);
  }

  randomColorize(content: string) {
    const randomColor = getRandomColor();
    return `${randomColor}${content}${color.reset}`;
  }

  colorize(type: ColorType, content: string) {
    return `${color[type]}${content}${color.reset}`;
  }
}
