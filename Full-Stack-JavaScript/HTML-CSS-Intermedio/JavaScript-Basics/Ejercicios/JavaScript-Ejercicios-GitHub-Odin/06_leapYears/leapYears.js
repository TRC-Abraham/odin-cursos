const leapYears = function( anno ) {
    if ( anno % 100 === 0 && anno % 400 === 0 ) return true;
    if ( anno % 4 === 0 && anno % 100 !== 0 ){
        return true;
    } else {
        return false;
    }
    
    
};

// Si anno es divisible por 4, pero no divisible por 100: Bisiesto
// Si anno es divisible por 100: No bisiesto
// Si anno es divisible por 100 y por 400: Bisiesto


// Do not edit below this line
module.exports = leapYears;
