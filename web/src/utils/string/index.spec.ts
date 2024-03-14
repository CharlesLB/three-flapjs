import { describe, expect, it } from 'vitest';
import { checkLinkString, checkNoSpace, twoDigits } from '.';

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

describe('checkLinkString', () => {
  it('should return true for "a"', () => {
    expect(checkLinkString('a')).toBe(true);
  });

  it('should return true for "a, b"', () => {
    expect(checkLinkString('a, b')).toBe(true);
  });

  it('should return true for "a,b"', () => {
    expect(checkLinkString('a,b')).toBe(true);
  });

  it('should return false for "a,b,a"', () => {
    expect(checkLinkString('a,b,a')).toBe(false);
  });

  it('should return false for "a, b, a"', () => {
    expect(checkLinkString('a, b, a')).toBe(false);
  });

  it('should return false for "ab, bd, af"', () => {
    expect(checkLinkString('ab, bd, af')).toBe(false);
  });

  it('should return false for "ab, bd, af"', () => {
    expect(checkLinkString('ab, , af')).toBe(false);
  });
});
