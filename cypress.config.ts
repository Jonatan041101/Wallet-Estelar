import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '81v51y',
  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },

  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000/',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
