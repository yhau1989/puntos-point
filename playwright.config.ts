import { defineConfig } from '@playwright/experimental-ct-react';

export default defineConfig({
  testDir: './tests',
  use: {
    ctViteConfig: {},
  },
});
