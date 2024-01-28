import { IPrinter } from './printer.interface';
import * as Charm from 'charm';

export class CharmPrinter implements IPrinter {
  printer = Charm();

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
