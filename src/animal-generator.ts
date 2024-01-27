import * as fs from 'fs';
import * as path from 'path';
import { listHelper, SRC_FOLDER } from './helper/list.helper';
import { IPrinter } from './abstract/printer.interface';
import { OptionType } from './type/option.type';

export class AnimalGenerator {
  frames = [];

  constructor(
    private readonly animal: string,
    private readonly printer: IPrinter,
    private readonly option?: OptionType,
  ) {
    if (!listHelper().includes(animal))
      throw new Error(`We don't know ${animal}`);

    return this;
  }

  setFrames() {
    const animalPath = path.join(SRC_FOLDER, 'zoo', this.animal);
    const folder = fs.readdirSync(animalPath);
    for (const filePath of folder) {
      this.frames.push(
        fs.readFileSync(path.join(animalPath, filePath), 'utf8'),
      );
    }
  }

  run() {
    let i = 0;

    const interval = setInterval(
      () => {
        this.printer.clearTerminal();
        this.printer.print(this.frames[i % this.frames.length]);
        i++;
        if (
          this.option.repeat &&
          i / this.frames.length >= this.option.repeat
        ) {
          clearInterval(interval);
        }
      },
      2000 - (this.option.speed ?? 200),
    );
  }
}
