import { IPrinter } from '../abstract/printer.interface';
import { CharmPrinter } from '../abstract/charm.printer';
import { AnimalGenerator } from '../animal-generator';
import { OptionArgvHelper } from '../helper/option.argv.helper';

export function dance(animal: string) {
  const printer: IPrinter = new CharmPrinter();
  const generator = new AnimalGenerator(
    animal,
    printer,
    OptionArgvHelper(process.argv),
  );

  generator.setFrames();
  generator.run();
}
