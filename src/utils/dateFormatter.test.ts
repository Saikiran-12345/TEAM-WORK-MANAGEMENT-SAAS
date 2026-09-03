import { expect, test, describe } from \'vitest\';
import { formatRelativeTime } from \'./dateFormatter\';

describe(\'formatRelativeTime\', () => {
  test(\'formats dates correctly\', () => {
    const tomorrow = new Date(Date.now() + 86400000);
    expect(formatRelativeTime(tomorrow)).toContain(\'1\');
  });
});
