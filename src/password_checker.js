const { validatePasswordStrength } = require("./helper_functions.js");
const { returnMessages } = require("../src/helper_objects.js");

function passwordStrength(passwordStr) {
  if (arguments.length === 0) {
    return returnMessages.invalid;
  }
  return validatePasswordStrength(passwordStr);
}

module.exports = { passwordStrength };