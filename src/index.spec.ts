import { spawnSync } from 'child_process';

describe('main script', () => {
  test('should execute main function', () => {
    const ANIMAL = 'tiger';
    const options = '--repeat=1';
    const scriptPath = 'src/index';

    const result = spawnSync('ts-node', [scriptPath, ANIMAL, options]);

    expect(result.stdout.toString()).toBeDefined();
  });
});
