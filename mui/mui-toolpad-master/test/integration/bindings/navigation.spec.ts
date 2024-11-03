import * as path from 'path';
import * as url from 'url';
import { ToolpadRuntime } from '../../models/ToolpadRuntime';
import { expect, test } from '../../playwright/localTest';

const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));

test.use({
  projectConfig: {
    template: path.resolve(currentDirectory, './fixture-navigation'),
  },
  localAppConfig: {
    cmd: 'dev',
  },
});

test('navigation action', async ({ page }) => {
  const runtimeModel = new ToolpadRuntime(page);
  await runtimeModel.goToPage('page1');

  const getPageUrlSearch = (): string => new URL(page.url()).search;

  await expect(page.getByText('welcome to page 2')).not.toBeVisible();
  expect(getPageUrlSearch()).toBe('');

  const navigationButton = page.getByRole('button', { name: 'goToPage2' });
  await navigationButton.click();

  await expect(page.getByText('welcome to page 2')).toBeVisible();
  expect(getPageUrlSearch()).toBe('?abc=zyx&def=goToPage2');
});
