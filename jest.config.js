
// Add any custom config to be passed to Jest
const config = {
  testEnvironment: "jsdom",


  // Add more setup options before each test is run
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = config;
