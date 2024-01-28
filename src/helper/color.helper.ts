import { ColorType } from '../type/color.type';

export const color: Record<ColorType, string> = {
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

export function getRandomColor() {
  const colorKeys = Object.keys(color).filter(
    (key) =>
      key !== 'reset' &&
      !key.toLowerCase().includes('black') &&
      !key.toLowerCase().includes('white'),
  );
  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];

  return color[randomColorKey];
}

export function listColors() {
  return Object.keys(color)
    .filter((e) => e !== 'reset')
    .map((e) => `${color[e]}${e}${color.reset}`)
    .join(', ');
}
