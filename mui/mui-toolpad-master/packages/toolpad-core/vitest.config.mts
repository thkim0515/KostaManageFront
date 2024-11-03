import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['../../test/setupVitest.ts'],
    browser: {
      enabled: false, // enabled through CLI
      name: 'chromium',
      provider: 'playwright',
      headless: !!process.env.CI,
    },
    coverage: {
      exclude: ['./build/**'],
      reportsDirectory: './.coverage',
      reporter: ['text', 'lcov'],
    },
  },
});
