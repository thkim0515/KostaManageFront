import { test, expect } from 'vitest';
import path from 'path';
import os from 'os';
import { bashResolvePath } from './cli';

test('bashResolvePath', async () => {
  const homeAbsoluteUrl = bashResolvePath('~/test');
  const cwdAbsoluteUrl = bashResolvePath('./test');
  expect(homeAbsoluteUrl).toEqual(path.resolve(os.homedir(), 'test'));
  expect(cwdAbsoluteUrl).toEqual(path.resolve(process.cwd(), './test'));
});
