import * as fs from 'fs';
import * as path from 'path';

export const SRC_FOLDER = path.join(__dirname, '../');

export const listHelper = () => {
  return fs.readdirSync(path.join(SRC_FOLDER, 'zoo'));
};
