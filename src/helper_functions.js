const { returnMessages, regexPatterns } = require("../src/helper_objects.js");

const calculatePasswordStrength = (passwordStr) => {
  let count = 0;

  if (passwordStr.length > 0) {
    count += 1;
    if (passwordStr.length <= 8) {
      count = 0;
      return count;
    } else {
      count += 1;
    }
    if (regexPatterns.checkLowerCaseLetters.test(passwordStr)) {
      count += 1;
    }
    if (regexPatterns.checkCapitalLetters.test(passwordStr)) {
      count += 1;
    }

    if (regexPatterns.checkDigits.test(passwordStr)) {
      count += 1;
    }

    if (regexPatterns.checkCharacters.test(passwordStr)) {
      count += 1;
    }

    if (regexPatterns.checkWhiteSpace.test(passwordStr)) {
      count += 1;
    }
  }

  return count;
};

const validatePasswordStrength = (passwordStr) => {
  const strengthValue = calculatePasswordStrength(passwordStr);

  if (strengthValue >= 6) {
    return returnMessages.strong;
  } else if (strengthValue >= 4) {
    return returnMessages.medium;
  } else if (strengthValue === 3) {
    return returnMessages.weak;
  } else {
    return returnMessages.invalid;
  }
};
module.exports = { validatePasswordStrength };