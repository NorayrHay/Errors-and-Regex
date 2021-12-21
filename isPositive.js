'use strict'

function isPositive (a) {

    if(a > 0)  return 'Yes'; 

    try {  
        throw a;
    }
    catch(error) {
        if(error === 0)  throw 'Zero Error';
        else if(error < 0) throw 'Negative Error.'
    }
  }
  console.log(isPositive(-3));