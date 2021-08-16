const JsConfigPathsMapper = require("jsconfig-paths-jest-mapper");

module.exports = {
  testPathIgnorePatterns: [
    ".next",
    ".github",
    ".vscode",
    "assets",
    "node_modules",
    "public",
  ],
  moduleNameMapper: new JsConfigPathsMapper("./jsconfig.json"),
};
