import * as fs from 'fs';
import * as path from 'path';
import { CharmPrinter } from '../abstract/charm.printer';
import { SRC_FOLDER } from '../helper/list.helper';
import { Colorizer } from '../abstract/colorizer.middleware';
import { OptionType } from '../type/option.type';

/**
 * @example
 * ```ts
 * const { update, done, show } = makeProgress({ animal: 'tiger', start: 30 });
 *
 * show();
 *
 *
 * const something = () =>
 *   new Promise((resolve) => {
 *     setTimeout(() => {
 *       resolve(Math.round(Math.random()));
 *   }, 1000);
 * });
 *
 * (async () => {
 *   const items = Array.from({ length: 50 });
 *   for (const _ of items) {
 *     const res = await something();
 *     update();
 *
 *     if (res) {
 *      done();
 *      return;
 *     }
 *   }
 * })();
 * */
export function makeProgress({
  controlled = false,
  start = 0,
  end = 100,
  displayBar = true,
  animal = 'tiger',
  option = new OptionType(),
}: {
  controlled?: boolean;
  start?: number;
  end?: number;
  displayBar: boolean;
  animal?: string;
  option?: OptionType;
}): { update(): void; done(): void; show(): void } {
  const frames = [];
  const printer = new CharmPrinter();

  let interval: NodeJS.Timeout;
  let progress = start;
  let frame = 0;

  const setFrames = () => {
    const animalPath = path.join(SRC_FOLDER, 'zoo', animal);
    const folder = fs.readdirSync(animalPath);
    for (const filePath of folder) {
      frames.push(fs.readFileSync(path.join(animalPath, filePath), 'utf8'));
    }
  };

  const addInterval = () => {
    !controlled &&
      (interval = setInterval(
        () => {
          render();
        },
        2000 - (option.speed ?? 200),
      ));
  };

  const render = () => {
    let currentFrame = frames[frame % frames.length];

    printer.clearTerminal();
    printer.print(
      option.color === 'random'
        ? Colorizer.randomColorize(currentFrame)
        : Colorizer.colorize(option.color, currentFrame),
    );

    if (displayBar) {
      printer.print('\n');
      printer.print('loading... \n');
      printer.print('[');
      printer.print('䷢'.repeat(progress).padEnd(end, ' '));
      printer.print(']');
    }

    printer.print(' ' + progress + '%');
    printer.print('\n');

    if (!controlled && progress !== end) {
      incrementProgress();
    }

    incrementFrame();

    if (progress >= end) {
      clearInterval(interval);
    }
  };

  const setControlled = () => {
    controlled = true;
  };

  const incrementProgress = () => {
    progress++;
  };

  const incrementFrame = () => {
    frame++;
  };

  const finishProgress = () => {
    progress = end;
  };

  const finsihInterval = () => {
    clearInterval(interval);
    render();
  };

  return {
    show: () => {
      setFrames();
      addInterval();
    },

    update: () => {
      setControlled();
      incrementProgress();
    },

    done: () => {
      finishProgress();
      finsihInterval();
    },
  };
}
