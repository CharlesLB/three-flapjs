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

  it('should return false for "a,b"', () => {
    expect(checkLinkString('a,b')).toBe(false);
  });

  it('should return false for "a,b,a"', () => {
    expect(checkLinkString('a,b,a')).toBe(false);
  });

  it('should return false for "a, b, a"', () => {
    expect(checkLinkString('a, b, a')).toBe(false);
  });
});

describe('checkNoSpace', () => {
  it('should return true when inputString contains no spaces', () => {
    expect(checkNoSpace('hello')).toBe(true);
    expect(checkNoSpace('')).toBe(true);
    expect(checkNoSpace('1234567890')).toBe(true);
  });

  it('should return false when inputString contains spaces', () => {
    expect(checkNoSpace('hello world')).toBe(false);
    expect(checkNoSpace('  ')).toBe(false);
    expect(checkNoSpace('hello ')).toBe(false);
  });
});
