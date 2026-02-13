import { add } from './calculate';

describe('add function', () => {
  it('should return correct sum for 2 and 3', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should throw error for invalid input', () => {
    expect(() => add('2' as any, 3)).toThrow('Invalid input');
    expect(() => add(2, '3' as any)).toThrow('Invalid input');
    expect(() => add('2' as any, '3' as any)).toThrow('Invalid input');
    expect(() => add(null as any, 3)).toThrow('Invalid input');
    expect(() => add(2, undefined as any)).toThrow('Invalid input');
  });
});
