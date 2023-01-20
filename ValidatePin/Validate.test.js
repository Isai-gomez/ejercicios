import {validatePIN} from "./validate.js";

describe("validatePIN", () => {
  test("should return False for pins wtesth length other than 4 or 6", () => {
    expect(validatePIN("1")).toEqual(false)
    expect(validatePIN("123")).toEqual(false)
    expect(
      validatePIN("1234567")).toEqual(false);
    expect(
      validatePIN("00000000")).toEqual(false);
  });
  test("should return False for pins which contain characters other thandigtests", () => {
    expect(validatePIN("a234")).toEqual(false);
    expect(validatePIN(".234")).toEqual(false);
  });
  test("should return True for valid pins", () => {
    expect(validatePIN("1234")).toEqual(true);
    expect(validatePIN("1111")).toEqual(true);
    expect(validatePIN("123456")).toEqual(true);
    expect(validatePIN("098765")).toEqual(true);
    expect(validatePIN("123456")).toEqual(true);
  });
});
