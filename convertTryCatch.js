'use strict'

function reverseString(s) {

    if(typeof(s) === 'string')     return s.split("").reverse().join("");
    
    try {
       throw s;
    }
    catch (error) {
        if(typeof(error) !== 'string')   throw  'my error:   ' + "s.split is not a function";
    }
}
console.log(reverseString(123));