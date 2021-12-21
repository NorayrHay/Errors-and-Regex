'use strict'

function validatePIN (a) {
    return /^(\d{4}|\d{6})$/.test();
}
console.log(validatePIN("1234"));
console.log(validatePIN("45135"));
console.log(validatePIN("89abc1"));
console.log(validatePIN("900876"));
console.log(validatePIN(" 4983"));

