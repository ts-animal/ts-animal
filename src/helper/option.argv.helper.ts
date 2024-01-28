import { OptionType } from '../type/option.type';

export const OptionArgvHelper = (argv: string[]): OptionType => {
  const o: OptionType = {} as OptionType;

  for (const arg of argv) {
    if (!arg.includes('--')) continue;

    const [k, v] = arg.replace('--', '').split('=');
    o[k] = v;
  }

  return o;
};
