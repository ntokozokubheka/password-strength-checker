const regexPatterns = {
  checkLowerCaseLetters: /[a-z]/,
  checkCapitalLetters: /[A-Z]/,
  checkDigits: /[0-9]/,
  checkCharacters: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
  checkWhiteSpace :/\s/,
};

const returnMessages = {
  strong: "strong",
  medium: "medium",
  weak: "weak",
  invalid: "invalid",
};

module.exports = { regexPatterns, returnMessages };