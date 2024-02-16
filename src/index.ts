#!/usr/bin/env node

import { CommandType } from './type/command.type';
import { dance } from './command/dance.command';
import { list } from './command/list.command';
import { colors } from './command/colors.command';
import { help } from './command/help.command';
import { v } from './command/version.command';
import { makeProgress } from './progress';

const COMMAND: CommandType = process.argv[2] as CommandType;
const ANIMAL = process.argv[3];

switch (COMMAND) {
  case CommandType.dance:
    dance(ANIMAL);
    break;
  case CommandType.list:
    list();
    break;
  case CommandType.colors:
    colors();
    break;
  case CommandType.help:
    help();
    break;
  case CommandType.version:
    v();
    break;
  default:
    console.error('Not Supported Command');
    help();
    break;
}

export { makeProgress };
