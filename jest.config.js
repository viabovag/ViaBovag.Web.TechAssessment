const { defaults } = require('jest-config');
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Path to Next.js app to load next.config.js and .env files
  dir: './',
});

/** @type {import('jest').Config} */
const customConfig = {
  setupFiles: ['<rootDir>/jest/helper.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',

  coverageReporters: ['clover', 'json', 'lcov', 'text', 'cobertura'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/config/',
    '<rootDir>/jest/',
    '<rootDir>/src/configuration/',
    '<rootDir>/src/types/',
    '<rootDir>/src/pages/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/config',
    '<rootDir>/node_modules/',
  ],

  /** Should be the same as tsconfig.js */
  moduleNameMapper: {
    '.css$': '<rootDir>/node_modules/jest-css-modules',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^providers(.*)$': '<rootDir>/src/providers$1',
    '^services(.*)$': '<rootDir>/src/services$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^data(.*)$': '<rootDir>/src/data$1',
    '^tests(.*)$': '<rootDir>/src/tests$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^helpers(.*)$': '<rootDir>/src/helpers$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^hocs(.*)$': '<rootDir>/src/hocs$1',
    '^configuration(.*)$': '<rootDir>/src/configuration$1',

    // Packages that do not do proper exports
    '^uuid$': require.resolve('uuid'),
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/'],

  roots: ['<rootDir>'],
};

module.exports = createJestConfig(customConfig);
