'use strict'

function reverseString (s) {

    try {
        return s.split('').reverse().join('');
    }
    
    catch (error) {
      console.log(('\n') + error);
    }
  }
  console.log(reverseString(Number('1234')));