import * as path from 'path';
import * as url from 'url';
import { ToolpadRuntime } from '../../models/ToolpadRuntime';
import { test, expect } from '../../playwright/localTest';

const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));

test.use({
  projectConfig: {
    template: path.resolve(currentDirectory, './fixture-list'),
  },
  localAppConfig: {
    cmd: 'dev',
  },
});

test('list component behavior', async ({ page }) => {
  const runtimeModel = new ToolpadRuntime(page);
  await runtimeModel.goToPage('list');

  const firstInput = page.getByLabel('textField0');
  const secondInput = page.getByLabel('textField1');
  const globalInput = page.getByLabel('global');
  const firstButton = page.getByRole('button', { name: 'set0' });
  const secondButton = page.getByRole('button', { name: 'set1' });

  await expect(page.getByText(':one', { exact: true })).not.toBeVisible();
  await firstInput.type('one');
  await expect(page.getByText(':one', { exact: true })).toBeVisible();

  await expect(page.getByText(':two', { exact: true })).not.toBeVisible();
  await secondInput.type('two');
  await expect(page.getByText(':two', { exact: true })).toBeVisible();

  await expect(page.getByText('foo:one', { exact: true })).not.toBeVisible();
  await expect(page.getByText('foo:two', { exact: true })).not.toBeVisible();
  await globalInput.type('foo');
  await expect(page.getByText('foo:one', { exact: true })).toBeVisible();
  await expect(page.getByText('foo:two', { exact: true })).toBeVisible();

  await expect(page.getByText('set local foo:foo:one', { exact: true })).not.toBeVisible();
  await expect(page.getByText('set global foo:foo:one', { exact: true })).not.toBeVisible();
  await expect(page.getByText('set local foo:foo:two', { exact: true })).not.toBeVisible();
  await expect(page.getByText('set global foo:foo:two', { exact: true })).not.toBeVisible();
  await firstButton.click();
  await expect(page.getByText('set local foo:foo:one', { exact: true })).toBeVisible();
  await expect(page.getByText('set global foo:foo:one', { exact: true })).toBeVisible();
  await expect(page.getByText('set local foo:foo:two', { exact: true })).not.toBeVisible();
  await expect(page.getByText('set global foo:foo:two', { exact: true })).not.toBeVisible();
  await secondButton.click();
  await expect(page.getByText('set local foo:foo:one', { exact: true })).toBeVisible();
  await expect(page.getByText('set global foo:foo:one', { exact: true })).not.toBeVisible();
  await expect(page.getByText('set local foo:foo:two', { exact: true })).toBeVisible();
  await expect(page.getByText('set global foo:foo:two', { exact: true })).toBeVisible();
});
