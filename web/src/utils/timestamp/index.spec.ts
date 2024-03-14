import { describe, expect, test, vi } from 'vitest';
import { getSimpleTimestamp } from '.';

describe('getSimpleTimestamp', () => {
  test('should return a formatted timestamp string', () => {
    vi.spyOn(global.Date, 'now').mockImplementationOnce(() => new Date('2022-01-01T12:34:56.789Z').valueOf());

    const result = getSimpleTimestamp(new Date('2022-01-01T12:34:56.789Z'));

    expect(result).toBe('01/01/2022 09:34:56');
  });
});
