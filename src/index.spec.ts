import { execSync } from 'child_process';

describe('main script', () => {
  test('should execute main function', () => {
    const result = execSync(`ts-node src/index tiger --repeat=1`);

    expect(result).not.toBeNull();
  });
});
