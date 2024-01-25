import * as fs from 'fs';
import * as path from 'path';

export const SRC_FOLDER = path.join('.', 'src');

export const listHelper = () => {
  return fs.readdirSync(path.join(SRC_FOLDER, 'zoo'));
};
