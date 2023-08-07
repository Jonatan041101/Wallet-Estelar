import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    specPattern: 'cypress/component/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3002/',
    supportFile: false,
    setupNodeEvents(on, config) {},
  },
});
