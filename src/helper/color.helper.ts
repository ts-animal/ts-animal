import { COLORS } from '../type/color.type';

const COLOR_KEYS = Object.keys(COLORS).filter(
  (key) =>
    key !== 'reset' &&
    !key.toLowerCase().includes('black') &&
    !key.toLowerCase().includes('white'),
);

export function getRandomColor() {
  const randomColorKey =
    COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)];

  return COLORS[randomColorKey];
}

export function listColors() {
  return Object.keys(COLORS)
    .filter((e) => e !== 'reset')
    .map((e) => `${COLORS[e]}${e}${COLORS.reset}`)
    .join(', ');
}
