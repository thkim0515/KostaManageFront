import * as path from 'path';
import * as url from 'url';
import { ToolpadEditor } from '../../models/ToolpadEditor';
import { test, expect } from '../../playwright/localTest';

const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));

test.use({
  projectConfig: {
    template: path.resolve(currentDirectory, './fixture'),
  },
  localAppConfig: {
    cmd: 'dev',
  },
});

test('File Picker component', async ({ page }) => {
  const editorModel = new ToolpadEditor(page);
  editorModel.goto();

  await editorModel.waitForOverlay();

  const filePicker = editorModel.pageRoot.locator('label');

  await expect(filePicker).toBeVisible();

  await filePicker.setInputFiles({
    name: 'test.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('hello'),
  });

  await expect(editorModel.pageRoot.getByText('test.txt')).toBeVisible();
  await expect(editorModel.pageRoot.getByText('Uploaded')).toBeVisible();
});
