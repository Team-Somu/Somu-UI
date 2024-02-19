export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest',
  },
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@service$': '<rootDir>/src/service/$1',
    '^@components$': '<rootDir>/src/components/$1',
  },
  prettierPath: '<rootDir>/node_modules/prettier-2/index.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
