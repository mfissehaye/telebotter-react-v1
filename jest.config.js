module.exports = {
  // The root directory where Jest should look for test files
  roots: ["<rootDir>/src"],

  // The test environment that will be used for testing (e.g., jsdom for browser-like environment)
  //   testEnvironment: "jsdom",

  // A list of file extensions that Jest should consider for tests
  moduleFileExtensions: ["js", "jsx", "json", "node", "ts", "tsx"],

  // A list of directories that Jest should ignore when looking for test files
  testPathIgnorePatterns: ["/node_modules/"],

  // Transform files before running tests (e.g., transpile JavaScript with Babel)
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  // Setup files to run before each test file
  setupFilesAfterEnv: ["./setupTests.js"],

  // Collect coverage information from files matching these patterns
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/index.js"],

  // Directory where Jest should output coverage reports
  coverageDirectory: "coverage",

  // Reporters to use for test results (optional)
  reporters: ["default"],

  // A list of custom reporters to use (optional)
  // reporters: ['default', 'jest-junit'],

  // Other Jest configurations can be added here as needed
};
