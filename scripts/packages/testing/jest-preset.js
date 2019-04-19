const path = require('path');
const testingDir = __dirname;
const rootDir = path.join(testingDir, '..');
const distDir = path.join(rootDir, 'dist');

module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  moduleNameMapper: {
    "^@stencil/core/build-conditionals$": path.join(distDir, 'testing', 'build-conditionals'),
    "^@stencil/core/internal$": path.join(rootDir, 'internal'),
    "^@stencil/core/mock-doc$": path.join(distDir, 'testing', 'mock-doc'),
    "^@stencil/core/platform$": path.join(distDir, 'testing', 'platform'),
    "^@stencil/core/sys$": path.join(distDir, 'sys', 'node'),
    "^@stencil/core/testing$": path.join(distDir, 'testing'),
    "^@stencil/core/utils$": path.join(distDir, 'utils'),
    "^@stencil/core$": path.join(distDir, 'testing', 'core')
  },
  setupTestFrameworkScriptFile: path.join(testingDir, 'jest-setuptestframework.js'),
  testEnvironment: path.join(testingDir, 'jest-environment.js'),
  testPathIgnorePatterns: [
    '/.stencil',
    '/.vscode',
    '/dist',
    '/node_modules',
    '/www'
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?|ts?|jsx?|js?)$',
  transform: {
    '^.+\\.(ts|tsx|jsx)$': path.join(testingDir, 'jest-preprocessor.js')
  }
};
