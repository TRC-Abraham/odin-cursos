const fibonacci = function(posicion) {
    if ( posicion < 0 ) return "OOPS";
    if ( posicion === 0 ) return 0;

    let a = 0;
    let b = 1;
    for ( let i = 1; i < posicion ; i++){
        const temporal = b;
        b = a + b;
        a = temporal;
    }
    return b; 
};

// Do not edit below this line
module.exports = fibonacci;
