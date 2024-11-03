import * as fs from 'fs/promises';
import * as path from 'path';
import * as url from 'url';
import readline from 'readline';
import { Readable } from 'stream';
import { execa } from 'execa';
import { test, expect, afterEach } from 'vitest';
import * as os from 'os';
import terminate from 'terminate';

type ExecaChildProcess = ReturnType<typeof execa>;

const TEST_TIMEOUT = process.env.CI ? 60000 : 600000;

const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));

const cliPath = path.resolve(currentDirectory, '../dist/index.js');

let testDir: string | undefined;
let cp: ExecaChildProcess | undefined;
let toolpadProcess: ExecaChildProcess | undefined;

async function waitForMatch(input: Readable, regex: RegExp): Promise<RegExpExecArray | null> {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({ input });

    rl.on('line', (line) => {
      const match = regex.exec(line);
      if (match) {
        rl.close();
        input.resume();
        resolve(match);
      }
    });
    rl.on('error', (err) => reject(err));
    rl.on('end', () => resolve(null));
  });
}

test(
  'create-toolpad-app can bootstrap a Toolpad Studio app',
  async () => {
    testDir = await fs.mkdtemp(path.resolve(os.tmpdir(), './test-app-'));
    cp = execa(cliPath, [testDir], {
      cwd: currentDirectory,
    });
    cp.stdout?.pipe(process.stdout);
    cp.stderr?.pipe(process.stderr);
    const result = await cp;
    expect(result.stdout).toMatch('Run the following to get started');
    const packageJsonContent = await fs.readFile(path.resolve(testDir, './package.json'), {
      encoding: 'utf-8',
    });
    const packageJson = JSON.parse(packageJsonContent);
    expect(packageJson).toEqual(
      expect.objectContaining({
        dependencies: expect.objectContaining({
          '@toolpad/studio': expect.any(String),
        }),
        scripts: expect.objectContaining({
          build: 'toolpad-studio build',
          dev: 'toolpad-studio dev',
          start: 'toolpad-studio start',
        }),
      }),
    );

    // check that file exists or not in the directory
    const gitignore = await fs.readFile(path.resolve(testDir, './.gitignore'), {
      encoding: 'utf-8',
    });

    expect(gitignore.length).toBeGreaterThan(0);

    toolpadProcess = execa('pnpm', ['dev', '--create'], {
      cwd: testDir,
      env: {
        FORCE_COLOR: '0',
        BROWSER: 'none',
      },
    });
    toolpadProcess.stdout?.pipe(process.stdout);
    toolpadProcess.stderr?.pipe(process.stderr);

    const match = await waitForMatch(toolpadProcess.stdout!, /http:\/\/localhost:(\d+)/);

    expect(match).toBeTruthy();

    const appUrl = match![0];
    const res = await fetch(`${appUrl}/health-check`);
    expect(res).toHaveProperty('status', 200);
  },
  TEST_TIMEOUT,
);

afterEach(async () => {
  if (toolpadProcess) {
    await terminate(toolpadProcess.pid!);
    await toolpadProcess.catch(() => null);
    console.log('toolpad ended');
  }

  if (cp) {
    await terminate(cp.pid!);
    await cp.catch(() => null);
    console.log('create-toolpad-app ended');
  }

  if (testDir) {
    await fs.rm(testDir, { recursive: true, force: true });
    console.log('test directory cleaned up');
  }
}, 30000);
