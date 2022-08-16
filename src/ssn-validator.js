"use strict";
exports.__esModule = true;
exports.validateSSN = void 0;
function validateSSN(ssn) {
    var ssnFormat = new RegExp("[0-9]{3}-[0-9]{2}-[0-9]{4}");
    if (!ssnFormat.test(ssn))
        return false;
    var parts = ssn.split("-");
    if (parts[0] === "000" || parts[0] === "666" || (parts[0] >= "900" && parts[0] <= "999"))
        return false;
    if (parts[1] === "00")
        return false;
    if (parts[2] === "0000" || parts[2].length !== 4)
        return false;
    return true;
}
exports.validateSSN = validateSSN;
