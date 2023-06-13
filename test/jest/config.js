const path = require("path")

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: ["js", "vue", "json"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "pdfjs-dist/webpack": "pdfjs-dist",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(vue)$": "vue-jest",
    "^.+\\.svg$": "svg-jest",
  },
  verbose: true,
  setupFiles: ["<rootDir>/styleguide/helper.js"],
}
