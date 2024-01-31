import Charm from 'charm';
import { IPrinter } from './printer.interface';
import { ColorType } from '../type/color.type';

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
    this.printer.write(content);
  }
}
