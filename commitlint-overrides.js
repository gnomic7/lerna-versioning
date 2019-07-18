// To override rules - refer https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md for the available options
module.exports = {
  rules: {
    "body-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 120],
    "subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]]
  }
};
