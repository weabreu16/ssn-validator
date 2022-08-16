"use strict";
exports.__esModule = true;
var ssn_validator_1 = require("./src/ssn-validator");
var value = process.argv.slice(2)[0];
var result = (0, ssn_validator_1.validateSSN)(value);
console.log("The SSN is ".concat(result ? "Valid" : "Invalid"));
/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question("Write an SSN: ", (ssn: string) => {
  console.log(`The SSN is ${validateSSN(ssn) ? "Valid" : "Invalid"}`);
  readline.close();
});*/
