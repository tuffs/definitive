import nextJest from 'next/jest';
import type { JestConfigWithTsJest } from 'ts-jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: JestConfigWithTsJest = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json', useEsm: true }],
  },
};

export default createJestConfig(customJestConfig);
