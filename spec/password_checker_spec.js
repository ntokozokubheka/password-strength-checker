const { passwordStrength } = require("../src/password_checker.js");
const { returnMessages } = require("../src/helper_objects.js");

describe("passwordStrength", () => {
  it("should return strong for a password that meets 6 or more of the conditions", () => {
    expect(passwordStrength("PasssWord1@ ")).toBe(returnMessages.strong);
  });

  it("should return medium for a password that meets four to five conditions", () => {
    expect(passwordStrength("pssword1pppp")).toBe(returnMessages.medium);
  });

  it("should return weak for a password that meets three conditions", () => {
    expect(passwordStrength("ppppppppppp")).toBe(returnMessages.weak);
  });

  it("should return invalid for a password that is empty", () => {
    expect(passwordStrength("")).toBe(returnMessages.invalid);
  });

  it("should return invalid for a password that is empty", () => {
    expect(passwordStrength()).toBe(returnMessages.invalid);
  });

  it("should return invalid for a password that is not longer than 8 characters", () => {
    expect(passwordStrength("User1@")).toBe(returnMessages.invalid);
  });
});