import { execSync } from 'child_process';
import { help as helpCommand } from './help.command';

describe('help command', () => {
  let spyLog: jest.SpyInstance;
  const expectedHelpMessage = `
dance {animal} {option}     show animal ascii animation.
    --speed=[0~2000]        frame speed.
    --repeat=[1~...]        repeat times. default is infinite.
    --color=[random, ...]   color. default is white.
list                        show current animal list.
help                        show current this helping message.
version                     show ts-animal version.
colors                      show supported colors.
`;

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spyLog.mockClear();
  });

  test('should log the help message on command', () => {
    const returns = helpCommand();

    expect(spyLog).toHaveBeenCalledWith(expectedHelpMessage);
    expect(returns).toEqual(expectedHelpMessage);
  });

  test('should log the help message', () => {
    const result = execSync('ts-node src/index.ts help', {
      encoding: 'utf8',
    });

    expect(result).toMatch(expectedHelpMessage);
  });
});
