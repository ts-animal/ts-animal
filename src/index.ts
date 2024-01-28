#!/usr/bin/env node

import { AnimalGenerator } from './animal-generator';
import { CharmPrinter } from './abstract/charm.printer';
import { OptionArgvHelper } from './helper/option.argv.helper';
import { IPrinter } from './abstract/printer.interface';

const ANIMAL = process.argv[2];

function main(animal: string) {
  const printer: IPrinter = new CharmPrinter();
  const generator = new AnimalGenerator(
    animal,
    printer,
    OptionArgvHelper(process.argv),
  );

  generator.setFrames();
  generator.setColor();
  generator.run();
}

main(ANIMAL);
