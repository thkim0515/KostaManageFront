import * as path from 'path';
import * as fs from 'fs/promises';
import kebabCase from 'lodash/kebabCase';
import type { ComponentConfig } from '@toolpad/studio-runtime';
import * as builtins from '@toolpad/studio-components';
import * as toolpadCore from '@toolpad/studio-runtime';
import invariant from 'invariant';
import { escapeCell, writePrettifiedFile } from './utils';

const AUTO_GENERATED_WARNING =
  'ATTENTION: DO NOT EDIT! This file has been auto-generated using `pnpm docs:build:api`.';

const currentDirectory = __dirname;
const projectRoot = path.resolve(currentDirectory, '..', '..');
const docsRoot = path.resolve(projectRoot, 'docs');
const absolutePathRoot = '/toolpad/studio/reference/components';
const componentDocsRoot = path.resolve(docsRoot, `data${absolutePathRoot}`);
const componentPagesRoot = path.resolve(docsRoot, `pages${absolutePathRoot}`);

async function writePageFile(mdFilePath: string) {
  const slug = path.basename(mdFilePath, '.md');
  const pageFilePath = path.resolve(componentPagesRoot, `${slug}.js`);
  const relativeMdPath = path.relative(componentPagesRoot, mdFilePath);
  await writePrettifiedFile(
    pageFilePath,
    `/* ${AUTO_GENERATED_WARNING} */

import * as React from 'react';
import MarkdownDocs from '@mui/monorepo/docs/src/modules/components/MarkdownDocs';
import * as pageProps from '${relativeMdPath}?muiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
`,
  );
}

export async function buildStudioComponentsReference() {
  await fs.rm(componentDocsRoot, { recursive: true, force: true });
  await fs.mkdir(componentDocsRoot, { recursive: true });
  await fs.rm(componentPagesRoot, { recursive: true, force: true });
  await fs.mkdir(componentPagesRoot, { recursive: true });

  const components = Object.entries(builtins).filter(([, binding]) =>
    toolpadCore.isToolpadComponent(binding),
  );

  await Promise.all(
    components.map(async ([name, binding]) => {
      if (toolpadCore.isToolpadComponent(binding)) {
        const slug = kebabCase(name);
        const config: ComponentConfig<any> = binding[toolpadCore.TOOLPAD_COMPONENT];

        let md = '';

        md += [
          `<!-- ${AUTO_GENERATED_WARNING} -->`,
          '',
          `# ${name}`,
          '',
          `<p class="description">API docs for the Toolpad Studio ${name} component.</p>`,
          '',
          config.helperText,
          '',
          '## Properties',
          '',
          '| Name | Type | Default | Description |',
          '|:-----|:-----|:--------|:------------|',
          ...Object.entries(config.argTypes ?? {}).map(([argName, argType]) => {
            invariant(argType, 'argType not found');
            invariant(argType.type, 'argType type not found');
            const formattedName = `<span class="prop-name">${escapeCell(argName)}</span>`;
            const defaultValue = argType.default;
            const formattedType = `<span class="prop-type">${escapeCell(argType.type)}</span>`;

            const formattedDefaultValue =
              typeof defaultValue === 'undefined'
                ? ''
                : `<span class="prop-default">${escapeCell(JSON.stringify(defaultValue))}</span>`;

            return `| ${[
              formattedName,
              formattedType,
              formattedDefaultValue,
              escapeCell(argType.helperText || ''),
            ].join(' | ')} |`;
          }),
        ].join('\n');

        const mdFilePath = path.resolve(componentDocsRoot, `${slug}.md`);
        await writePrettifiedFile(mdFilePath, md);

        await writePageFile(mdFilePath);
      }
    }),
  );

  const indexMd = [
    '# Index',
    '',
    `<p class="description">This page contains an index to the available components in Toolpad.</p>`,
    '',
    '## Components',
    '',
    ...components.map(([name]) => {
      return `- [${name}](${absolutePathRoot}/${kebabCase(name)}/)`;
    }),
  ].join('\n');

  const indexMdFilePath = path.resolve(componentDocsRoot, `index.md`);
  await writePrettifiedFile(indexMdFilePath, indexMd);
  await writePageFile(indexMdFilePath);

  const manifest = {
    '//': AUTO_GENERATED_WARNING,
    pages: [
      { pathname: absolutePathRoot, title: 'Index' },
      {
        pathname: `${absolutePathRoot}/components-group`,
        subheader: 'Components',
        children: components.map(([name]) => ({
          title: name,
          pathname: `${absolutePathRoot}/${kebabCase(name)}`,
        })),
      },
    ],
  };

  const configJsonPath = path.resolve(componentDocsRoot, `manifest.json`);
  await writePrettifiedFile(configJsonPath, JSON.stringify(manifest, null, 2));
}
