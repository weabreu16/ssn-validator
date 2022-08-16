import { validateSSN } from '../src/ssn-validator';

describe("SSN Validator", () => {

  it("should return true if has 9 digits", () => {
    expect(validateSSN("509-52-0005")).toBeTruthy();
  });

  it("should return false if has less than 9 digits", () => {
    expect(validateSSN("509-52-000")).toBeFalsy();
  });

  it("should return false if has more than 9 digits", () => {
    expect(validateSSN("509-52-00059")).toBeFalsy();
  });

  it("should return false if has less than 2 hyphens", () => {
    expect(validateSSN("509520005")).toBeFalsy();
  });

  it("should return false if has more than 2 hyphens", () => {
    expect(validateSSN("509-52-00-05")).toBeFalsy();
  });

  it("should return false if starts with hyphens", () => {
    expect(validateSSN("-509-520005")).toBeFalsy();
  });

  it("should return false if ends with hyphens", () => {
    expect(validateSSN("50952-0005-")).toBeFalsy();
  });

  it("should return false if first part is 000", () => {
    expect(validateSSN("000-52-0005")).toBeFalsy();
  });

  it("should return false if first part is 666", () => {
    expect(validateSSN("666-52-0005")).toBeFalsy();
  });

  it("should return false if first part is between 900 and 999", () => {
    expect(validateSSN("901-52-0005")).toBeFalsy();
  });

  it("should return false if first part has more than 3 digits", () => {
    expect(validateSSN("5092-52-000")).toBeFalsy();
  });

  it("should return false if first part has less than 3 digits", () => {
    expect(validateSSN("50-523-0005")).toBeFalsy();
  });

  it("should return false if second part is equal to 00", () => {
    expect(validateSSN("509-00-0005")).toBeFalsy();
  });

  it("should return false if second part has more than 2 digits", () => {
    expect(validateSSN("509-002-005")).toBeFalsy();
  });

  it("should return false if third part is equal to 0000", () => {
    expect(validateSSN("509-52-0000")).toBeFalsy();
  });

  it("should return false if third part has more than 4 digits", () => {
    expect(validateSSN("59-52-00052")).toBeFalsy();
  });
});


