import { describe, expect, it } from 'vitest';
import { twoDigits } from '.';

describe('twoDigits', () => {
  it('should prepend a leading zero to single-digit numbers', () => {
    expect(twoDigits(5)).toBe('05');
    expect(twoDigits(9)).toBe('09');
  });

  it('should not modify two-digit numbers', () => {
    expect(twoDigits(10)).toBe('10');
    expect(twoDigits(99)).toBe('99');
  });
});
