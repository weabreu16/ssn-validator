import { validateSSN } from "./src/ssn-validator";

const value = process.argv.slice(2)[0];

const result = validateSSN(value);

console.log(`The SSN is ${result ? "Valid" : "Invalid"}`);

