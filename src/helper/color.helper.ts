import { ColorType } from '../type/color.type';

export const COLOR: Record<ColorType, string> = {
  reset: '\x1b[0m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',
};

const COLOR_KEYS = Object.keys(COLOR).filter(
  (key) =>
    key !== 'reset' &&
    !key.toLowerCase().includes('black') &&
    !key.toLowerCase().includes('white'),
);

export function getRandomColor() {
  const randomColorKey =
    COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)];

  return COLOR[randomColorKey];
}

export function listColors() {
  return Object.keys(COLOR)
    .filter((e) => e !== 'reset')
    .map((e) => `${COLOR[e]}${e}${COLOR.reset}`)
    .join(', ');
}
