const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
  "*.{ts,tsx,js}": buildEslintCommand,
  "*.{ts,tsx,js,html,css,scss}": "prettier --write",
};
