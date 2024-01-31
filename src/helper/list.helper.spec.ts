import { listHelper } from './list.helper';

describe('listHelper', () => {
  test('should return a dir path of the zoo', () => {
    const result = listHelper();

    expect(result).not.toBeNull();
    expect(result.length).not.toBeUndefined();
  });
});
