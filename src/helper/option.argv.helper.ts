import { OptionType } from '../type/option.type';
import { help } from '../command/help.command';

export const OptionArgvHelper = (argv: string[]): OptionType => {
  const o: OptionType = new OptionType();

  for (const arg of argv) {
    if (!arg.includes('--')) continue;

    const [k, v] = arg.replace('--', '').split('=');

    if (!Object.keys(o).includes(k)) {
      console.error('UnknownOption');
      help();
      process.exit(1);
    }

    o[k] = v;
  }

  return o;
};
